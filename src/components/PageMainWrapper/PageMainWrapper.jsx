import css from "./PageMainWrapper.module.css";

const PageMainWrapper = ({ children, title }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};

export default PageMainWrapper;
