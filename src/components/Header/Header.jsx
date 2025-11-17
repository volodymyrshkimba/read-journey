import { useState } from "react";
import { useDispatch } from "react-redux";

import NavigationLink from "../NavigationLink/NavigationLink";
import MobileMenu from "../MobileMenu/MobileMenu";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import { signout } from "../../redux/auth/operations.js";

import css from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const singOut = () => {
    dispatch(signout());
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
        <Button
          type="button"
          variant="transparent"
          size="logOut"
          onClick={singOut}
        >
          Log out
        </Button>
      </div>
      {isOpen && <MobileMenu closeMenu={closeMenu} singOut={singOut} />}
    </header>
  );
};

export default Header;
