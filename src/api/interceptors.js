import { api } from "./axios";
import { setAuthHeader } from "./token";

import store from "../redux/store";
import { setTokens } from "../redux/auth/slice";
import { signout } from "../redux/auth/operations";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Якщо 401 ПРИ РЕФРЕШІ — НЕ пробуємо рефреш ще раз
    if (
      error.response?.status === 401 &&
      originalRequest.url.includes("/users/current/refresh")
    ) {
      store.dispatch(signout());
      return Promise.reject(error);
    }

    // Якщо це login/register — НЕ пробуємо refresh
    if (
      originalRequest.url.includes("/users/signup") ||
      originalRequest.url.includes("/users/signin")
    ) {
      return Promise.reject(error);
    }

    // Якщо 401 та запит ще не повторювався
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // Якщо refresh вже виконується — ставимо в чергу
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        const state = store.getState();
        const refreshToken = state.auth.refreshToken;

        const { data } = await api.get("/users/current/refresh", {
          headers: { Authorization: `Bearer ${refreshToken}` },
        });

        const newAccessToken = data.token;
        const newRefreshToken = data.refreshToken;

        store.dispatch(
          setTokens({
            token: newAccessToken,
            refreshToken: newRefreshToken,
          })
        );

        setAuthHeader(newAccessToken);

        processQueue(null, newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        store.dispatch(signout());
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
