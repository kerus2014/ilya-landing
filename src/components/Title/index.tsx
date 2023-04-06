import { ClassName } from "../../types";
import styles from "./index.module.scss";

interface ITitle extends ClassName {
  title: string;
  subtitle?: string;
}

export const Title = (props: ITitle) => {
  const { className, title, subtitle } = props;
  return (
    <>
      <p className={className ? `${styles.title} ${className}` : styles.title}>
        {title}
      </p>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </>
  );
};
