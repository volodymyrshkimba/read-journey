import clsx from "clsx";

import css from "./DashboardWrapper.module.css";

const DashboardWrapper = ({ children, mylibrary }) => {
  return (
    <div className={clsx(css.wrapper, mylibrary && css.mylibrary)}>
      {children}
    </div>
  );
};

export default DashboardWrapper;
