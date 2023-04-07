import { ClassName } from "../../types";
import styles from "./index.module.scss";

interface ILink extends ClassName {
  value: string;
  href?:string;
}

export const Link = (props: ILink) => {
  const { value, className, href } = props;
  return (
    <a href={href} className={className ? `${styles.link} ${className}` : styles.link}>
      {value}
    </a>
  );
};
