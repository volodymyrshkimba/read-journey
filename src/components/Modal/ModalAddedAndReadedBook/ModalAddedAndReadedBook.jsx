import { useEffect } from "react";

import likeImg from "../../../img/like.png";

import css from "./ModalAddedAndReadedBook.module.css";

const ModalAddedAndReadedBook = ({ onClose }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper}>
      <div className={css.likeImgWrapper}>
        <img src={likeImg} alt="like" />
      </div>
      <p className={css.title}>Good job</p>
      <p className={css.text}>
        Your book is now in the <span className={css.accent}>library!</span> The
        joy knows no bounds and now you can start your training
      </p>
    </div>
  );
};

export default ModalAddedAndReadedBook;
