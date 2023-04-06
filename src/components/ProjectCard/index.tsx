import { IProjectCard } from "../../types";
import { LinkWithArrow } from "../LinkWithArrow";
import styles from "./index.module.scss";
interface IProps {
  card: IProjectCard;
}
const ProjectCard = (props: IProps) => {
  const {
    card: {
      image,
      title,
      subtitle,
      text,
      firstLinkValue,
      firstLinkPath,
      secondLinkPath,
    },
  } = props;
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card__image"]}>
        <img src={image} alt={image} />
      </div>
      <div className={styles["project-card__info"]}>
        <h3 className={styles["project-card__title"]}>{title}</h3>
        <h4 className={styles["project-card__subtitle"]}>{subtitle}</h4>
        <p className={styles["project-card__text"]}>{text}</p>
        <div className={styles["project-card__link-container"]}>
          <LinkWithArrow value={firstLinkValue} />
          <LinkWithArrow value={"Подробнее"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
