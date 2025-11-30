import { createSelector } from "@reduxjs/toolkit";

export const selectRecommendedIsLoading = (state) =>
  state.books.recommended.isLoading;
export const selectOwnBooksIsLoading = (state) =>
  state.books.ownBooks.isLoading;
export const selectRecommendedBooks = (state) => state.books.recommended.books;
export const selectRecommendedBooksTotalPages = (state) =>
  state.books.recommended.totalPages;
export const selectOwnBooks = (state) => state.books.ownBooks.books;
export const selectRecommendedWithStatus = createSelector(
  [selectRecommendedBooks, selectOwnBooks],
  (recommended, added) => {
    const addedIds = new Set(added?.map((book) => book.title));

    return (
      recommended?.map((book) => ({
        ...book,
        isAdded: book.isAdded || addedIds.has(book.title),
      })) || []
    );
  }
);
