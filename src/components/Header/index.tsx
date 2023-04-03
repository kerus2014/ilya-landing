import { Container } from "../Container";
import Navbar from "../Navbar";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className={styles.container}>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
