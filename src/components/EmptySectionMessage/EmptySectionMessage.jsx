import booksImg from "../../img/books.png";
import booksImg2x from "../../img/books@2x.png";

import css from "./EmptySectionMessage.module.css";

const EmptySectionMessage = ({ type }) => {
  const messages = {
    "": (
      <>
        To start training, add{" "}
        <span className={css.noBookAccent}>some of your books</span> or from the
        recommended ones
      </>
    ),
    unread: (
      <>
        You have no unread books yet.{" "}
        <span className={css.noBookAccent}>Add new books</span> to your library
        to get started.
      </>
    ),
    "in-progress": (
      <>
        You haven't started reading anything yet.{" "}
        <span className={css.noBookAccent}>Choose a book</span> to begin
        reading.
      </>
    ),
    done: (
      <>
        You haven't finished any books yet.{" "}
        <span className={css.noBookAccent}>Complete a book</span> to see it
        here.
      </>
    ),
  };

  return (
    <div className={css.noBookWrapper}>
      <div className={css.noBookImgWrapper}>
        <img
          className={css.noBookImg}
          src={booksImg}
          srcSet={`${booksImg} 1x, ${booksImg2x} 2x`}
          alt="books"
          width={40}
          height={40}
        />
      </div>
      <p className={css.noBookText}>{messages[type]}</p>
    </div>
  );
};

export default EmptySectionMessage;
