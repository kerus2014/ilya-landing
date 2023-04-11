import { Container } from "../Container";
import Navbar from "../Navbar";
import mainLogo from "../../assets/pics/mainLogo.png";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CHANGE_MENU_STATE, changeMenuStateAction } from "../../reduxTools/burgerMenu/actions";
import { useSelector } from "react-redux";
import { AppState } from "../../reduxTools/store";
import cn from "classnames";
import { VK } from "../../assets/icons/socials/VK";
import { INST } from "../../assets/icons/socials/INST";
import { TG } from "../../assets/icons/socials/TG";
import { FB } from "../../assets/icons/socials/FB";


export const Header = () => {
  const isBurgerOpen = useSelector((state:AppState) => state.burgerMenu.isOpen)
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <NavLink to="/" className={styles.mainLogoContainer}>
            <img src={mainLogo} alt="mainLogo" />
          </NavLink>
          <div className={styles.navBarContainer}>
            <Navbar />
          </div>
          <div className={cn(styles.hamburger, { [styles["hamburger__active"]]: isBurgerOpen === true, })} onClick={() => dispatch(changeMenuStateAction())}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={cn(styles["hamburger-menu"], {[styles["hamburger-menu__active"]]: isBurgerOpen === true, })}>
            <div className={styles["hamburger-menu__container"]}>
              <Navbar className={styles["hamburger-menu__list"]}/>
              <hr className={styles["hamburger-menu__line"]}/>
              <p>davydov@gmail.com</p>
              <p>+375(33)5556677</p>
              <div className={styles["hamburger-menu__socials"]}>
                <VK/>
                <INST/>
                <TG/>
                <FB/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
