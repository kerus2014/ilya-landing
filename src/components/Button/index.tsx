import { ClassName } from "../../types";
import styles from "./index.module.scss";

interface Button extends ClassName{
  value:string;
  onClick?:() => void;
}

export const Button = (props:Button) => {
  return(
    <button onClick={props.onClick} className={props.className ? `${styles.button} ${props.className}` : styles.button}>
      {props.value}
    </button>
  )
}