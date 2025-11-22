import { NavLink } from "react-router-dom";

import Icon from "../Icon/Icon";

import css from "./RecommendedBooks.module.css";

const listInfo = [
  {
    defin: "Create a personal library: ",
    text: "add the books you intend to read to it.",
  },
  {
    defin: "Create your first workout: ",
    text: "define a goal, choose a period, start training.",
  },
];

const RecommendedBooks = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended books</h2>
      <ul className={css.list}></ul>
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
