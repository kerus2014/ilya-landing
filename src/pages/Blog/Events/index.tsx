import BlogCard from "../../../components/BlogCard";
import { blogCardData } from "../../../services/blogCardData";
import styles from "./index.module.scss";
const Events = () => {
  return (
    <div className={styles.events}>
      {blogCardData.slice(0, 6).map((elem) => (
        <BlogCard key={elem.id} card={elem} />
      ))}
    </div>
  );
};

export default Events;
