import clsx from "clsx";
import css from "./PageMainWrapper.module.css";

const PageMainWrapper = ({ children, title, page }) => {
  return (
    <div className={clsx(css.wrapper, css[page])}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};

export default PageMainWrapper;
