import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Icon from "../Icon/Icon";

import { getRecommended } from "../../redux/books/operations";
import { selectRecommendedBooks } from "../../redux/books/selectors";

import css from "./RecommendedBooks.module.css";

const RecommendedBooks = () => {
  const dispatch = useDispatch();

  const booksData = useSelector(selectRecommendedBooks);

  useEffect(() => {
    dispatch(
      getRecommended({
        perPage: 3,
      })
    );
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended books</h2>
      <ul className={css.list}>
        {booksData !== null &&
          booksData.map((book) => (
            <li className={css.listItem} key={book._id}>
              <div className={css.thumb}>
                <img
                  className={css.image}
                  src={book.imageUrl}
                  alt={book.title}
                />
              </div>
              <h3 className={css.bookTitle}>{book.title}</h3>
              <p className={css.author}>{book.author}</p>
            </li>
          ))}
      </ul>
      <NavLink to={"/recommended"} className={css.link}>
        Home
      </NavLink>
      <NavLink to={"/recommended"} className={css.linkArrow}>
        <Icon name={"arrow"} stroke w={24} h={24} />
      </NavLink>
    </div>
  );
};

export default RecommendedBooks;
