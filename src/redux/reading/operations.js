import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../api/axios";

export const getBookInfo = createAsyncThunk(
  "reading/getBookInfo",
  async (_id, thunkAPI) => {
    try {
      const { data } = await api.get(`/books/${_id}`);

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
      const { data } = await api.post("/books/reading/start", startData);

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
      const { data } = await api.post("/books/reading/finish", startData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReading = createAsyncThunk(
  "reading/deleteReading",
  async ({ bookId, readingId }, thunkAPI) => {
    try {
      const { data } = await api.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
