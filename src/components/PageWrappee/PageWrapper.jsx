import Header from "../Header/Header";

import css from "./PageWrapper.module.css";

const PageWrapper = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      {children}
    </div>
  );
};

export default PageWrapper;
