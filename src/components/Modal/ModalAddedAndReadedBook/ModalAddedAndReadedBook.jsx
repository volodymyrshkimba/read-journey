import { useEffect } from "react";

import likeImg from "../../../img/like.png";
import booksImg from "../../../img/books.png";

import css from "./ModalAddedAndReadedBook.module.css";

const ModalAddedAndReadedBook = ({ onClose, isbookReaded }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onClose();
    }, 15000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper}>
      <div className={css.likeImgWrapper}>
        <img
          src={isbookReaded ? booksImg : likeImg}
          alt={isbookReaded ? "books" : " like"}
        />
      </div>
      <p className={css.title}>
        {isbookReaded ? "The book is read" : "Good job"}{" "}
      </p>
      {isbookReaded ? (
        <p className={css.text}>
          It was an <span className={css.accent}>exciting journey</span>, where
          each page revealed new horizons, and the characters became inseparable
          friends.
        </p>
      ) : (
        <p className={css.text}>
          Your book is now in the <span className={css.accent}>library!</span>{" "}
          The joy knows no bounds and now you can start your training
        </p>
      )}
    </div>
  );
};

export default ModalAddedAndReadedBook;
