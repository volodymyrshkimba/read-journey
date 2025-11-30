import { RotatingLines } from "react-loader-spinner";
import clsx from "clsx";

import css from "./Loader.module.css";

const Loader = ({ fixed }) => {
  return (
    <div className={clsx(css.loader, fixed && css.fixed)}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#f9f9f9"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
