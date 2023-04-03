import { ClassName } from "../../types";
import styles from "./index.module.scss";

interface Title extends ClassName {
  title: string;
}

export const Title = (props: Title) => {
  const { className, title } = props;
  return (
    <p className={className ? `${styles.title} ${className}` : styles.title}>
      {title}
    </p>
  );
};
