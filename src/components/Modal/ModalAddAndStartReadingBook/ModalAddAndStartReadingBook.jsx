import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../Button/Button";

import { addRecommendedBookToLibrary } from "../../../redux/books/operations";

import css from "./ModalAddAndStartReadingBook.module.css";

const ModalAddAndStartReadingBook = ({
  _id,
  title,
  author,
  imageUrl,
  totalPages,
  isAdded,
  onClose,
  isStartReadingBook,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addBookToLibrary = () => {
    dispatch(addRecommendedBookToLibrary(_id));
    onClose();
  };

  const startReading = () => {
    navigate(`/reading/${_id}`);
    onClose();
  };

  return (
    <div className={css.content}>
      <div className={css.thumb}>
        <img
          className={css.image}
          src={
            imageUrl ||
            "https://rostislav.kiev.ua/wp-content/uploads/2014/04/kniga.jpg"
          }
          alt={title}
        />
      </div>
      <h3 className={css.title}>{title}</h3>
      <p className={css.author}>{author}</p>
      <p className={css.totalPages}>{totalPages} pages</p>
      {isAdded ? (
        <div className={css.added}>added to library</div>
      ) : (
        <Button
          onClick={isStartReadingBook ? startReading : addBookToLibrary}
          variant="transparent"
          size="addToLibrary"
        >
          {isStartReadingBook ? "Start reading" : "Add to library"}
        </Button>
      )}
    </div>
  );
};

export default ModalAddAndStartReadingBook;
