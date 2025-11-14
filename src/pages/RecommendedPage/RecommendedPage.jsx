import PageWrapper from "../../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../../components/PageMainWrapper/PageMainWrapper";
import RecommendedFilters from "../../components/RecommenededFilters/RecommendedFilters";
import StartYourWorkout from "../../components/StartYourWorkout/StartYourWorkout";
import Icon from "../../components/Icon/Icon";

import books from "../../img/books.png";

import css from "./RecommendedPage.module.css";

const booksData = {
  results: [
    {
      _id: "654fc4d00a563c69b09895ef",
      title: "Lovers of Justice",
      author: "Yuri Andrukhovych",
      imageUrl:
        "https://res.cloudinary.com/drfvfno3o/image/upload/v1699726543/books/1.webp",
      totalPages: 304,
      recommend: true,
    },
    {
      _id: "654fc5064f56fe7a8d0e19eb",
      title: "It doesn't hurt",
      author: "Kateryna Babkina",
      imageUrl:
        "https://res.cloudinary.com/drfvfno3o/image/upload/v1699726598/books/2.png",
      totalPages: 72,
      recommend: true,
    },
  ],
  totalPages: 4,
  page: 1,
  perPage: 2,
};

const RecommendedPage = () => {
  return (
    <PageWrapper>
      <DashboardWrapper>
        <RecommendedFilters />
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
          <button className={css.arrow} type="button">
            <Icon name={"left"} w={6} h={10} stroke />
          </button>
          <button className={css.arrow} type="button">
            <Icon name={"right"} w={6} h={10} stroke />
          </button>
        </div>
        <ul className={css.booksList}>
          {booksData.results.map((book) => (
            <li key={book._id}>
              <div className={css.thumb}>
                <img src={book.imageUrl} alt={book.title} />
              </div>
              <h3 className={css.title}>{book.title}</h3>
              <p className={css.author}>{book.author}</p>
            </li>
          ))}
        </ul>
      </PageMainWrapper>
    </PageWrapper>
  );
};

export default RecommendedPage;
