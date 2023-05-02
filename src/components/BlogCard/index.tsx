import { useNavigate } from "react-router-dom";
import { ClassName, IBlogCardData } from "../../types";
import styles from "./index.module.scss";
import { LinkWithArrowBlue } from "../LinkWithArrow/LinkWithArrowBlue";

interface IProps extends ClassName {
  card: IBlogCardData;
}

const BlogCard = (props: IProps) => {
  const navigate = useNavigate();
  const {
    card: { image, text, date, type, path, id },
    className,
  } = props;

  const navigateTo = (id: number) => {
    navigate(`${path}${id}`);
  };
  return (
    <div className={className ? `${styles.card} ${className}` : styles.card}>
      <div className={styles["card__image-container"]}>
        <img src={image} alt={image} />
      </div>
      <p>{text}</p>
      <p>{date}</p>
      <p className={styles["card__type"]}>{type}</p>
      <LinkWithArrowBlue value="Подробнее" onClick={() => navigateTo(id)} />
    </div>
  );
};

export default BlogCard;
