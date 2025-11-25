import { createSlice } from "@reduxjs/toolkit";

import { getBookInfo } from "./operations";

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
      });
  },
});

export default readingSlice.reducer;
