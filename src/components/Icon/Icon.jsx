import sprite from "../../img/icons.svg";

import css from "./Icon.module.css";

const Icon = ({ name, w, h }) => {
  return (
    <svg className={css[name]} width={w} height={h}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
