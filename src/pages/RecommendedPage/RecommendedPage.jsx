import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../../components/PageMainWrapper/PageMainWrapper";
import RecommendedFilters from "../../components/RecommenededFilters/RecommendedFilters";
import StartYourWorkout from "../../components/StartYourWorkout/StartYourWorkout";
import PaginationArrow from "../../components/PaginationArrow/PaginationArrow";
import Loader from "../../components/Loader/Loader";

import books from "../../img/books.png";

import { usePerPage } from "../../hooks/usePerPage";

import { openModal } from "../../redux/modal/slice";
import { getOwnBooks, getRecommended } from "../../redux/books/operations";
import {
  selectRecommendedBooksTotalPages,
  selectRecommendedIsLoading,
  selectRecommendedWithStatus,
} from "../../redux/books/selectors";

import css from "./RecommendedPage.module.css";

const defaultFilters = { title: "", author: "" };

const RecommendedPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const perPage = usePerPage();
  const [filters, setFilters] = useState(defaultFilters);

  const isLoading = useSelector(selectRecommendedIsLoading);
  const booksData = useSelector(selectRecommendedWithStatus);
  const totalPages = useSelector(selectRecommendedBooksTotalPages);

  const getFilters = (formData) => {
    setPage(1);
    setFilters(formData);
  };

  useEffect(() => {
    dispatch(
      getRecommended({
        page,
        perPage,
        ...filters,
      })
    );
  }, [page, perPage, filters, dispatch]);

  useEffect(() => {
    dispatch(getOwnBooks());
  }, [dispatch]);

  return (
    <PageWrapper>
      <DashboardWrapper>
        <RecommendedFilters
          getFilters={getFilters}
          defaultFilters={defaultFilters}
        />
        <StartYourWorkout />
        <div className={css.booksWrapper}>
          <img src={books} alt="books" width={40} height={40} />
          <p>
            "Books are <span className={css.accent}>windows</span> to the world,
            and reading is a journey into the unknown."
          </p>
        </div>
      </DashboardWrapper>
      <PageMainWrapper title={"Recommended"}>
        <div className={css.arrowsWrapper}>
          <PaginationArrow
            direction="left"
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
          <PaginationArrow
            direction="right"
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={css.booksList}>
            {booksData !== null &&
              booksData.map((book) => (
                <li
                  className={css.listItem}
                  key={book._id}
                  onClick={() =>
                    dispatch(
                      openModal({
                        type: "addRecommendedBook",
                        props: { ...book },
                      })
                    )
                  }
                >
                  <div className={css.thumb}>
                    <img
                      className={css.image}
                      src={book.imageUrl}
                      alt={book.title}
                    />
                  </div>
                  <h3 className={css.title}>{book.title}</h3>
                  <p className={css.author}>{book.author}</p>
                </li>
              ))}
          </ul>
        )}
      </PageMainWrapper>
    </PageWrapper>
  );
};

export default RecommendedPage;
