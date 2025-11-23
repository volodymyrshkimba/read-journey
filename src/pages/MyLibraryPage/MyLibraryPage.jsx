import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../../components/PageMainWrapper/PageMainWrapper";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";
import MyLibrarySelect from "../../components/MyLibrarySelect/MyLibrarySelect";
import Icon from "../../components/Icon/Icon";

import booksImg from "../../img/books.png";

import { deleteBook, getOwnBooks } from "../../redux/books/operations";
import { selectOwnBooks } from "../../redux/books/selectors";

import css from "./MyLibraryPage.module.css";

const MyLibraryPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const booksData = useSelector(selectOwnBooks);

  useEffect(() => {
    dispatch(getOwnBooks(value));
  }, [dispatch, value]);

  return (
    <PageWrapper>
      <DashboardWrapper mylibrary>
        <AddBookForm />
        <RecommendedBooks />
      </DashboardWrapper>
      <PageMainWrapper title={"My library"}>
        <MyLibrarySelect value={value} setValue={setValue} />
        {booksData !== null && booksData.length !== 0 && (
          <ul className={css.list}>
            {booksData.map((book) => {
              return (
                <li key={book._id} className={css.listItem}>
                  <div className={css.thumb}>
                    <img
                      className={css.image}
                      src={
                        book.imageUrl ||
                        "https://rostislav.kiev.ua/wp-content/uploads/2014/04/kniga.jpg"
                      }
                      alt={book.title}
                    />
                  </div>
                  <div className={css.cardBottomSide}>
                    <div className={css.infoWrapper}>
                      <h3 className={css.title}>{book.title}</h3>
                      <p className={css.author}>{book.author}</p>
                    </div>
                    <button
                      className={css.trashButton}
                      type="button"
                      onClick={() => dispatch(deleteBook(book._id))}
                    >
                      <Icon name="trash" stroke w={14} h={14} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {(!booksData || booksData.length === 0) && (
          <div className={css.noBookWrapper}>
            <div className={css.noBookImgWrapper}>
              <img className={css.noBookImg} src={booksImg} alt="books" />
            </div>
            <p className={css.noBookText}>
              To start training, add{" "}
              <span className={css.noBookAccent}>some of your books</span> or
              from the recommended ones
            </p>
          </div>
        )}
      </PageMainWrapper>
    </PageWrapper>
  );
};

export default MyLibraryPage;
