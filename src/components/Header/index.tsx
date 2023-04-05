import { Container } from "../Container";
import Navbar from "../Navbar";
import mainLogo from "../../assets/pics/mainLogo.png";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
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
        </div>
      </Container>
    </header>
  );
};
