import styles from "./index.module.scss";
import { ICaseCard } from "../../types";
import { useNavigate } from "react-router-dom";
import { LinkWithArrowBlue } from "../LinkWithArrow/LinkWithArrowBlue";

export const CaseCard = (props: ICaseCard) => {
  const navigate = useNavigate();
  const { image, title, description, navigatePath } = props;
  return (
    <div className={styles["case-card"]}>
      <div className={styles["case-card__image"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["case-card__right-side"]}>
        <p className={styles["case-card__title"]}>{title}</p>
        <div className={styles["case-card__image_small"]}>
          <img src={image} alt="" />
        </div>
        <p className={styles["case-card__description"]}>{description}</p>
        <LinkWithArrowBlue
          value="Подробнее"
          onClick={() => navigate(navigatePath)}
        />
      </div>
    </div>
  );
};
