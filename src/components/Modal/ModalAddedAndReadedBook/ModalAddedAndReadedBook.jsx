import { useEffect } from "react";

import likeImg from "../../../img/like.png";
import likeImg2x from "../../../img/like@2x.png";
import booksImg from "../../../img/books.png";
import booksImg2x from "../../../img/books@2x.png";

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
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={isbookReaded ? booksImg : likeImg}
          srcSet={
            isbookReaded
              ? `${booksImg} 1x, ${booksImg2x} 2x`
              : `${likeImg} 1x, ${likeImg2x} 2x`
          }
          alt={isbookReaded ? "books" : " like"}
          width={50}
          height={50}
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
