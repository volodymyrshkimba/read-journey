import clsx from "clsx";

import css from "./DashboardWrapper.module.css";

const DashboardWrapper = ({ children, page }) => {
  return <aside className={clsx(css.wrapper, css[page])}>{children}</aside>;
};

export default DashboardWrapper;
