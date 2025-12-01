import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../api/axios";

export const getRecommended = createAsyncThunk(
  "books/getRecommended",
  async ({ title = "", author = "", page = 1, perPage }, thunkAPI) => {
    try {
      const { data } = await api.get(
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
      const { data } = await api.post(`/books/add/${_id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (bookData, thunkAPI) => {
    try {
      const { data } = await api.post("/books/add", bookData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (_id, thunkAPI) => {
    try {
      const { data } = await api.delete(`/books/remove/${_id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnBooks = createAsyncThunk(
  "books/getOwnBooks",
  async (status, thunkAPI) => {
    try {
      const { data } = await api.get(
        status ? `/books/own?status=${status}` : "/books/own"
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
