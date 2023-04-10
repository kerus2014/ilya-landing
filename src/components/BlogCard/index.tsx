import { useNavigate } from "react-router-dom";
import { IBlogCardData } from "../../types";
import { LinkWithArrow } from "../LinkWithArrow";
import styles from "./index.module.scss";

interface IProps {
  card: IBlogCardData;
}

const BlogCard = (props: IProps) => {
  const navigate = useNavigate();
  const {
    card: { image, text, date, type, path, id },
  } = props;

  const navigateTo = (id: number) => {
    navigate(`${path}${id}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles["card_image-container"]}>
        <img src={image} alt={image} />
      </div>
      <p>{text}</p>
      <p>{date}</p>
      <p className={styles["card__type"]}>{type}</p>
      <LinkWithArrow value="Подробнее" onClick={() => navigateTo(id)} />
    </div>
  );
};

export default BlogCard;
