import BlogCard from "../../../components/BlogCard";
import { blogCardData } from "../../../services/blogCardData";
import styles from "./index.module.scss";
const Events = () => {
  return (
    <div className={styles.events}>
      {blogCardData.slice(0, 6).map((elem) => (
        <BlogCard key={elem.id} card={elem} className={styles["events__card"]} />
      ))}
    </div>
  );
};

export default Events;
