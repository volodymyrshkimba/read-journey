import clsx from "clsx";

import css from "./PageMainWrapper.module.css";

const PageMainWrapper = ({ children, title, page }) => {
  return (
    <main className={clsx(css.wrapper, css[page])}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </main>
  );
};

export default PageMainWrapper;
