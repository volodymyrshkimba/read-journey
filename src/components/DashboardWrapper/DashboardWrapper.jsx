import clsx from "clsx";

import css from "./DashboardWrapper.module.css";

const DashboardWrapper = ({ children, page }) => {
  return <div className={clsx(css.wrapper, css[page])}>{children}</div>;
};

export default DashboardWrapper;
