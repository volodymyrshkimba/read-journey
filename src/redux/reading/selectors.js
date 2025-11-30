import { createSelector } from "@reduxjs/toolkit";

import { clearActiveProgress } from "../../utils/clearActiveProgress";

export const selectReadingIsLoading = (state) => state.reading.isLoading;
export const selectBook = (state) => state.reading.currentBook;
export const selectProgress = (state) => state.reading.currentBook.progress;
export const selectTotalPages = (state) => state.reading.currentBook.totalPages;

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

export const selectHasProgress = (state) => {
  if (state.reading.currentBook?.progress) {
    return (
      clearActiveProgress(state.reading.currentBook?.progress).length !== 0
    );
  } else {
    return false;
  }
};

export const selectPercentageAndPagesRead = createSelector(
  [selectBook],
  (book) => {
    let pagesRead = 0;

    const clearedProgress = clearActiveProgress([...book.progress]);

    if (book.progress.length !== 0) {
      const sortedBooks = clearedProgress.sort(
        (a, b) => b.finishPage - a.finishPage
      );

      pagesRead = sortedBooks[0].finishPage;
    }

    const totalPages = book.totalPages;

    let percentage = 0;

    if (pagesRead !== 0) {
      percentage = ((pagesRead / totalPages) * 100).toFixed(2);
    }

    return { pagesRead, percentage: Number(percentage) };
  }
);

export const selectDiary = createSelector(
  [selectProgress, selectTotalPages],
  (progress, totalPages) => {
    const sortedToLastDate = clearActiveProgress([...progress]).sort(
      (a, b) => new Date(b.finishReading) - new Date(a.finishReading)
    );

    const mapedData = sortedToLastDate.map((item) => {
      const startReadingDate = new Date(item.startReading);
      const finishReadingDate = new Date(item.finishReading);

      const startMinutes = startReadingDate.getMinutes();
      const finishMinutes = finishReadingDate.getMinutes();
      const finishDay = String(finishReadingDate.getDate()).padStart(2, "0");
      const finishMonth = String(finishReadingDate.getMonth() + 1).padStart(
        2,
        "0"
      );
      const finishYear = finishReadingDate.getFullYear();

      const date = `${finishDay}.${finishMonth}.${finishYear}`;
      const pages = item.finishPage - item.startPage + 1;
      const percentage = ((pages / totalPages) * 100).toFixed(1);
      const minutes = finishMinutes - startMinutes;
      const perHour = item.speed;

      return { id: item._id, date, pages, percentage, minutes, perHour };
    });

    const data = mapedData.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = {
          result: [],
          pages: 0,
        };
      }

      acc[item.date].result.push(item);
      acc[item.date].pages += item.pages;

      return acc;
    }, {});

    return data;
  }
);
