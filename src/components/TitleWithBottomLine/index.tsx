import { Title } from "../Title";
import styles from "./index.module.scss";

interface ITitleWithBottomLine {
  title: string;
  subtitle?: string;
}

export const TitleWithBottomLine = (props: ITitleWithBottomLine) => {
  return (
    <div>
      <Title title={props.title} />
      {props.subtitle && <h3 className={styles.subtitle} >{props.subtitle}</h3>}
      <hr className={props.subtitle ? `${styles.line} ${styles.visible}` : styles.line} />
    </div>
  );
};
