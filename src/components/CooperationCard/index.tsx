import { useNavigate } from "react-router-dom";
import { ICooperationCard } from "../../types";
import { LinkWithArrow } from "../LinkWithArrow";
import styles from "./index.module.scss";

interface IProps {
  card: ICooperationCard;
}

const CooperationCard = (props: IProps) => {
  const navigate = useNavigate()
  const {
    card: { image, title, subtitle, linkPath },
  } = props;
  return (
    <div className={styles["card"]}>

      <div className={styles["card__first-column"]}>
        <div className={styles["card__image"]}>
          <img src={image} alt={image} />
        </div>
        <h3 className={styles["card__title"]}>{title}</h3>
      </div>

      <div className={styles["card__second-column"]}>
        <h4 className={styles["card__subtitle"]}>{subtitle}</h4>
        <LinkWithArrow value={"Подробнее"} onClick={() => navigate(linkPath)}/>
      </div>
    </div>
  );
};

export default CooperationCard;
