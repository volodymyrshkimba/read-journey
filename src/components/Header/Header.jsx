import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import css from "./Header.module.css";
import { useState } from "react";

const isActive = ({ isActive }) => {
  return isActive ? css.active : "";
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={css.header}>
      <span className={css.logo}>
        <Icon name={"logo"} w={42} h={17} />
        <span className={css.logoText}>read journey</span>
      </span>
      <ul className={css.linksList}>
        <li>
          <NavLink className={isActive} to={"/recommended"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to={"/library"}>
            My library
          </NavLink>
        </li>
      </ul>
      <span className={css.avatar}>I</span>
      <span className={css.fullName}>Ilona Ratushniak</span>
      <button
        className={css.burger}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Icon name={"burger"} w={21} h={14} stroke />
      </button>
      <Button type="button" variant="transparent" size="logOut">
        Log out
      </Button>
      {isOpen && (
        <div className={css.mobileMenu}>
          <div className={css.menu}>MobMEnu</div>
        </div>
      )}
    </header>
  );
};

export default Header;
