import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ type, children, size, variant }) => {
  return (
    <button
      className={clsx(css.btn, variant && css[variant], size && css[size])}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
