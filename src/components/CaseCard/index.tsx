import { LinkWithArrow } from "../LinkWithArrow";
import styles from "./index.module.scss";
import { ICaseCard } from "../../types";
import { useNavigate } from "react-router-dom";

export  const CaseCard = (props:ICaseCard) => {
  const navigate = useNavigate()
  const {image,title,description,navigatePath} = props
  return(
    <div className={styles["case-card"]}>
      <div className={styles["case-card__image"]}>
        <img src={image} alt="" />
      </div>
      <div className={styles["case-card__right-side"]}>
        <p className={styles["case-card__title"]}>{title}</p>
        <p className={styles["case-card__description"]}>{description}</p>
        <LinkWithArrow value="Подробнее" onClick={() => navigate(navigatePath)}/>
      </div>
    </div>
  )
}