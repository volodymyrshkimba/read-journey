import { createSlice } from "@reduxjs/toolkit";

import {
  deleteReading,
  getBookInfo,
  startReading,
  stopReading,
} from "./operations";

const readingSlice = createSlice({
  name: "reading",
  initialState: {
    currentBook: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookInfo.fulfilled, (state, action) => {
        state.currentBook = action.payload;
        state.isLoading = false;
      })
      .addCase(getBookInfo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(startReading.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      })
      .addCase(stopReading.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      })
      .addCase(deleteReading.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      });
  },
});

export default readingSlice.reducer;
