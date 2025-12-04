import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavigationLink from "../NavigationLink/NavigationLink";
import MobileMenu from "../MobileMenu/MobileMenu";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import { signout } from "../../redux/auth/operations.js";
import { selectUserNameAndFirstLetter } from "../../redux/auth/selectors.js";

import css from "./Header.module.css";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const userInfo = useSelector(selectUserNameAndFirstLetter);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const singOut = () => {
    dispatch(signout())
      .unwrap()
      .catch((error) => {
        toast.info(error.message);
      });
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
        <span className={css.avatar}>{userInfo.letter}</span>
        <span className={css.fullName}>{userInfo.name}</span>
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
