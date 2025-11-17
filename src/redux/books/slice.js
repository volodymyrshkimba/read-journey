import { createSlice } from "@reduxjs/toolkit";

import { getRecommended } from "./operations";

const authSlice = createSlice({
  name: "books",
  initialState: {
    recommended: {
      books: null,
      totalPages: null,
    },
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommended.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecommended.fulfilled, (state, action) => {
        state.recommended.books = action.payload.results;
        state.recommended.totalPages = action.payload.totalPages || null;
        state.isLoading = false;
      })
      .addCase(getRecommended.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
