export const selectBookInfo = (state) => {
  if (state.reading.currentBook) {
    const { title, author, imageUrl } = state.reading.currentBook;
    return { title, author, imageUrl };
  }
  return state.reading.currentBook;
};

export const selectActiveStatus = (state) =>
  state.reading.currentBook?.progress.some(
    (book) => book.status === "active"
  ) || false;
