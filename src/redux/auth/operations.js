import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", user);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signin", user);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  if (state.auth.token === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(state.auth.token);

    const { data } = await axios.get("/users/current");

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
