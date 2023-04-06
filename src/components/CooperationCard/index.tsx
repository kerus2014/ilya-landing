import { ICooperationCard } from "../../types";
import { LinkWithArrow } from "../LinkWithArrow";
import styles from "./index.module.scss";

interface IProps {
  card: ICooperationCard;
}

const CooperationCard = (props: IProps) => {
  const {
    card: { image, title, subtitle, linkPath },
  } = props;
  return (
    <div className={styles["card"]}>
      <div className={styles["card__image"]}>
        <img src={image} alt={image} />
      </div>

      <h3 className={styles["card__title"]}>{title}</h3>
      <h4 className={styles["card__subtitle"]}>{subtitle}</h4>

      <LinkWithArrow value={"Подробнее"} />
    </div>
  );
};

export default CooperationCard;
