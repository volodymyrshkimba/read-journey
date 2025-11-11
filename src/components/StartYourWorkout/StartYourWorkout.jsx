import { NavLink } from "react-router-dom";

import Icon from "../Icon/Icon";

import css from "./StartYourWorkout.module.css";

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

const StartYourWorkout = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Start your workout</h2>
      <ul className={css.list}>
        {listInfo.map((item, i) => {
          return (
            <li key={i} className={css.listItem}>
              <span className={css.itemNumber}>{i + 1}</span>
              <p className={css.text}>
                {item.defin}
                <span className={css.accent}>{item.text}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <NavLink to={"/library"} className={css.link}>
        My library
      </NavLink>
      <NavLink to={"/library"} className={css.linkArrow}>
        <Icon name={"arrow"} stroke w={24} h={24} />
      </NavLink>
    </div>
  );
};

export default StartYourWorkout;
