import NavigationLink from "../NavigationLink/NavigationLink";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import css from "./MobileMenu.module.css";

const MobileMenu = ({ closeMenu, singOut }) => {
  return (
    <div className={css.mobileMenu} onClick={() => closeMenu()}>
      <div className={css.menu} onClick={(e) => e.stopPropagation()}>
        <button
          className={css.closeBtn}
          type="button"
          onClick={() => {
            closeMenu();
          }}
        >
          <Icon name={"x"} w={28} h={28} stroke />
        </button>
        <ul className={css.linksList}>
          <li>
            <NavigationLink to={"/recommended"} name={"Home"} />
          </li>
          <li>
            <NavigationLink to={"/library"} name={"My library"} />
          </li>
        </ul>
        <Button
          type="button"
          variant="transparent"
          size="logOutMobile"
          onClick={singOut}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
