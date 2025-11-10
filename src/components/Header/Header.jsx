import { useState } from "react";

import MobileMenu from "../MobileMenu/MobileMenu";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import css from "./Header.module.css";
import NavigationLink from "../NavigationLink/NavigationLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={css.header}>
      <span className={css.logo}>
        <Icon name={"logo"} w={42} h={17} />
        <span className={css.logoText}>read journey</span>
      </span>
      <ul className={css.linksList}>
        <li>
          <NavigationLink to={"/recommended"} name={"Home"} />
        </li>
        <li>
          <NavigationLink to={"/library"} name={"My library"} />
        </li>
      </ul>
      <div className={css.userWrapper}>
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
      </div>
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
