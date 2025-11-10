import { NavLink } from "react-router-dom";

import css from "./NavigationLink.module.css";

const isActive = ({ isActive }) => {
  return isActive ? css.active : "";
};

const NavigationLink = ({ to, name }) => {
  return (
    <NavLink className={isActive} to={to}>
      {name}
    </NavLink>
  );
};

export default NavigationLink;
