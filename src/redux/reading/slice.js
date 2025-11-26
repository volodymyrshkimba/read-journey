import { createSlice } from "@reduxjs/toolkit";

import { getBookInfo, startReading, stopReading } from "./operations";

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
      .addCase(startReading.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(startReading.fulfilled, (state, action) => {
        state.currentBook = action.payload;
        state.isLoading = false;
      })
      .addCase(startReading.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(stopReading.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(stopReading.fulfilled, (state, action) => {
        state.currentBook = action.payload;
        state.isLoading = false;
      })
      .addCase(stopReading.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default readingSlice.reducer;
