import { createSlice } from "@reduxjs/toolkit";

import {
  addRecommendedBookToLibrary,
  addBook,
  deleteBook,
  getRecommended,
  getOwnBooks,
} from "./operations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    recommended: {
      books: null,
      totalPages: null,
      isLoading: false,
    },
    ownBooks: {
      books: null,
      isLoading: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommended.pending, (state) => {
        state.recommended.isLoading = true;
      })
      .addCase(getRecommended.fulfilled, (state, action) => {
        state.recommended.books = action.payload.results;
        state.recommended.totalPages = action.payload.totalPages || null;
        state.recommended.isLoading = false;
      })
      .addCase(getRecommended.rejected, (state) => {
        state.recommended.isLoading = false;
      })
      .addCase(addRecommendedBookToLibrary.pending, (state) => {
        state.recommended.isLoading = true;
      })
      .addCase(addRecommendedBookToLibrary.fulfilled, (state, action) => {
        state.recommended.isLoading = false;
        state.recommended.books = state.recommended.books.map((book) => {
          if (book.title === action.payload.title) {
            return {
              ...book,
              isAdded: true,
            };
          }

          return book;
        });
      })
      .addCase(addRecommendedBookToLibrary.rejected, (state) => {
        state.recommended.isLoading = false;
      })
      .addCase(addBook.pending, (state) => {
        state.ownBooks.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.ownBooks.isLoading = false;
        state.ownBooks.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state) => {
        state.ownBooks.isLoading = false;
      })
      .addCase(deleteBook.pending, (state) => {
        state.ownBooks.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.ownBooks.isLoading = false;
        state.ownBooks.books = state.ownBooks.books.filter(
          (book) => book._id !== action.payload.id
        );
      })
      .addCase(deleteBook.rejected, (state) => {
        state.ownBooks.isLoading = false;
      })
      .addCase(getOwnBooks.pending, (state) => {
        state.ownBooks.isLoading = true;
      })
      .addCase(getOwnBooks.fulfilled, (state, action) => {
        state.ownBooks.books = action.payload;
        state.ownBooks.isLoading = false;
      })
      .addCase(getOwnBooks.rejected, (state) => {
        state.ownBooks.isLoading = false;
      });
  },
});

export default booksSlice.reducer;
