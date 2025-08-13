import Icon from "../Icon/Icon";

import iphone from "../../img/iphone-mobile@1x.png";

import css from "./AuthPageWrapper.module.css";

const AuthPageWrapper = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.formWrapper}>
        <div className={css.logoWrapper}>
          <Icon name={"logo"} w={42} h={17} />
        </div>
        <h1 className={css.title}>
          Expand your mind, reading <span className={css.accent}>a book</span>
        </h1>
        <div className={css.form}>{children}</div>
      </div>
      <div className={css.pictureSide}>
        <img className={css.img} src={iphone} alt="iPhone" />
      </div>
    </div>
  );
};

export default AuthPageWrapper;
