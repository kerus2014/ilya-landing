import { IBlogCardData } from "../../types";
import styles from "./index.module.scss";

interface IProps {
  card: IBlogCardData;
}

const index = (props: IProps) => {
  const {
    card: { image, text, date, type },
  } = props;
  return (
    <div className={styles.card}>
      <div className={styles["card_image-container"]}>
        <img src={image} alt={image} />
      </div>
      <p>{text}</p>
      <p>{date}</p>
      <p className={styles["card__type"]}>{type}</p>
    </div>
  );
};

export default index;
