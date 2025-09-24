import Icon from "../Icon/Icon";

import iphone from "../../img/iphone-mobile@1x.png";
import iphoneRetina from "../../img/iphone-mobile@2x.png";
import iphoneDesctop from "../../img/iphone-desctop@1x.png";
import iphoneDesctopRetina from "../../img/iphone-desctop@2x.png";

import css from "./AuthPageWrapper.module.css";

const AuthPageWrapper = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.formWrapper}>
        <div className={css.logoWrapper}>
          <Icon name={"logo"} w={42} h={17} />
          <span className={css.logoText}>read journey</span>
        </div>
        <h1 className={css.title}>
          Expand your mind, reading <span className={css.accent}>a book</span>
        </h1>
        {children}
      </div>
      <div className={css.pictureSide}>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`
					  		 ${iphoneDesctop}    1x,
                      ${iphoneDesctopRetina} 2x
						 `}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`
					  		 ${iphone}    1x,
                      ${iphoneRetina} 2x
						 `}
          />
          <img className={css.img} src={iphone} alt="iPhone" />
        </picture>
      </div>
    </div>
  );
};

export default AuthPageWrapper;
