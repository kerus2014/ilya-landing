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
      {props.subtitle && <h3>{props.subtitle}</h3>}
      <hr className={styles.line} />
    </div>
  );
};
