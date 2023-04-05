import logo from "../../assets/pics/feedBackPhoto.png";
import { Container } from "../Container";
import FeedBackForm from "../FeedBackForm";
import styles from "./index.module.scss";
const FeedBackBlock = () => {
  return (
    <div className={styles["feedback-block"]}>
      <Container>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src={logo} alt="feedBackLogo" />
          </div>
          <div className={styles.formContainer}>
            <FeedBackForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeedBackBlock;
