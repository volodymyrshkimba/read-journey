import clsx from "clsx";

import css from "./Button.module.css";

const Button = ({ type, children, size, variant, onClick }) => {
  return (
    <button
      className={clsx(css.btn, variant && css[variant], size && css[size])}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
