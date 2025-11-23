export const selectRecommendedBooks = (state) => state.books.recommended.books;
export const selectRecommendedBooksTotalPages = (state) =>
  state.books.recommended.totalPages;
export const selectOwnBooks = (state) => state.books.ownBooks.books;
