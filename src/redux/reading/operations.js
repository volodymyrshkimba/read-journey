import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookInfo = createAsyncThunk(
  "reading/getBookInfo",
  async (_id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/books/${_id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const startReading = createAsyncThunk(
  "reading/startReading",
  async (startData, thunkAPI) => {
    try {
      const { data } = await axios.post("/books/reading/start", startData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const stopReading = createAsyncThunk(
  "reading/stopReading",
  async (startData, thunkAPI) => {
    try {
      const { data } = await axios.post("/books/reading/finish", startData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
