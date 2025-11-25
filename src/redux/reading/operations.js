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
