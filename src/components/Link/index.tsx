import { ClassName } from "../../types";
import styles from "./index.module.scss";

interface ILink extends ClassName {
  value: string;
}

export const Link = (props: ILink) => {
  const { value, className } = props;
  return (
    <div className={className ? `${styles.link} ${className}` : styles.link}>
      {value}
    </div>
  );
};
