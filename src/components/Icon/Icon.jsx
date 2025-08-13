import clsx from "clsx";
import sprite from "../../img/icons.svg";

import css from "./Icon.module.css";

const Icon = ({ name, stroke, w, h }) => {
  return (
    <svg
      className={clsx(stroke ? css.iconStroke : css.icon, css[name] || "")}
      width={w}
      height={h}
    >
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
