import css from "./DashboardWrapper.module.css";

const DashboardWrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default DashboardWrapper;
