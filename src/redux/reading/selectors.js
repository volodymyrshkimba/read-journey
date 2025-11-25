export const selectBookInfo = (state) => {
  if (state.reading.currentBook) {
    const { title, author, imageUrl } = state.reading.currentBook;
    return { title, author, imageUrl };
  }
  return state.reading.currentBook;
};
