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
  onClose,
}) => {
  const dispatch = useDispatch();

  const addBookToLibrary = () => {
    dispatch(addRecommendedBookToLibrary(_id));
    onClose();
  };

  return (
    <div className={css.content}>
      <div className={css.thumb}>
        <img className={css.image} src={imageUrl} alt={title} />
      </div>
      <h3 className={css.title}>{title}</h3>
      <p className={css.author}>{author}</p>
      <p className={css.totalPages}>{totalPages} pages</p>
      <Button
        onClick={addBookToLibrary}
        variant="transparent"
        size="addToLibrary"
      >
        Add to library
      </Button>
    </div>
  );
};

export default ModalAddAndStartReadingBook;
