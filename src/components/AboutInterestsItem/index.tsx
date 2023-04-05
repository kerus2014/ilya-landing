import { ClassName } from "../../types";
import styles from "./index.module.scss";

interface Props extends ClassName{
  value:string;
}

export const AboutInterstsItem = (props:Props) => {
  return(
    <div className={styles["item"]}>
      <p className={styles["item__text"]}>{props.value}</p>
      <hr className={styles["item__line"]}/>
    </div>
  )
}