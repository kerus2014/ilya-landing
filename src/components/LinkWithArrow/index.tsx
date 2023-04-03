import { Link } from "../Link";
import styles from "./index.module.scss";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import { ClassName } from "../../types";

interface LinkWithIcon extends ClassName{
  value:string;
}

export const LinkWithArrow = (props:LinkWithIcon) => {
  const {value,className} = props
  return(
    <div className={className ? `${styles["link-icon"]} ${className}` : styles["link-icon"]}>
      <Link value={value}/>
      <ArrowIcon className={styles.arrow}/>
    </div>
  )
}