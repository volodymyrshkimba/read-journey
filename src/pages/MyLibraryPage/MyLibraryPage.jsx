import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../../components/PageMainWrapper/PageMainWrapper";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";
import MyLibrarySelect from "../../components/MyLibrarySelect/MyLibrarySelect";
import EmptySectionMessage from "../../components/EmptySectionMessage/EmptySectionMessage";
import Icon from "../../components/Icon/Icon";
import Loader from "../../components/Loader/Loader";

import { openModal } from "../../redux/modal/slice";
import { deleteBook, getOwnBooks } from "../../redux/books/operations";
import {
  selectOwnBooks,
  selectOwnBooksIsLoading,
} from "../../redux/books/selectors";

import css from "./MyLibraryPage.module.css";

const MyLibraryPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const isLoading = useSelector(selectOwnBooksIsLoading);
  const booksData = useSelector(selectOwnBooks);

  useEffect(() => {
    dispatch(getOwnBooks(value));
  }, [dispatch, value]);

  return (
    <PageWrapper>
      <DashboardWrapper page="mylibrary">
        <AddBookForm />
        <RecommendedBooks />
      </DashboardWrapper>
      <PageMainWrapper title={"My library"}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <MyLibrarySelect value={value} setValue={setValue} />
            {booksData !== null && booksData.length !== 0 && (
              <ul className={css.list}>
                {booksData.map((book) => {
                  return (
                    <li key={book._id} className={css.listItem}>
                      <div
                        className={css.thumb}
                        onClick={() =>
                          dispatch(
                            openModal({
                              type: "startReadingBook",
                              props: { ...book },
                            })
                          )
                        }
                      >
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
          </>
        )}

        {(!booksData || booksData.length === 0) && (
          <EmptySectionMessage type={value} />
        )}
      </PageMainWrapper>
    </PageWrapper>
  );
};

export default MyLibraryPage;
