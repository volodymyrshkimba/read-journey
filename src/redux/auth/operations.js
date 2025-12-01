import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../api/axios";
import { clearAuthHeader, setAuthHeader } from "../../api/token";

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", user);

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
      const { data } = await api.post("/users/signin", user);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signout = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
  try {
    await api.post("/users/signout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  if (state.auth.token === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(state.auth.token);

    const { data } = await api.get("/users/current");

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
