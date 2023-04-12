import logo from "../../assets/pics/feedBackPhoto.png";
import { Container } from "../Container";
import FeedBackForm from "../FeedBackForm";
import styles from "./index.module.scss";
import { BlockTemplate } from "../BlockTemplate";

const FeedBackBlock = () => {
  return (
    <BlockTemplate className={styles["feedback-block"]} id="contacts">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={logo} alt="feedBackLogo" />
        </div>
        <div className={styles.formContainer}>
          <FeedBackForm />
        </div>
      </div>
    </BlockTemplate>
  );
};

export default FeedBackBlock;
