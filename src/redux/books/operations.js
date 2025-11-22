import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecommended = createAsyncThunk(
  "books/getRecommended",
  async ({ title, author, page, perPage }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/books/recommend?title=${title}&author=${author}&page=${page}&limit=${perPage}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecommendedBookToLibrary = createAsyncThunk(
  "books/addRecommendedBookToLibrary",
  async (_id, thunkAPI) => {
    try {
      await axios.post(`/books/add/${_id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
