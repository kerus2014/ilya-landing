import { Container } from "../Container";
import Navbar from "../Navbar";
import mainLogo from "../../assets/pics/mainLogo.png";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className={styles.container}>
          <div className={styles.mainLogoContainer}>
            <img src={mainLogo} alt="mainLogo" />
          </div>
          <div className={styles.navBarContainer}>
            <Navbar />
          </div>
        </div>
      </Container>
    </header>
  );
};
