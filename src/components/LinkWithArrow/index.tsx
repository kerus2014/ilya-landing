import { Link } from "../Link";
import styles from "./index.module.scss";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import { ClassName } from "../../types";

interface LinkWithIcon extends ClassName {
  value: string;
  href?:string;
  onClick?: () => void
}

export const LinkWithArrow = (props: LinkWithIcon) => {
  const { value, className, href } = props;
  return (
    <div
      className={
        className ? `${styles["link-icon"]} ${className}` : styles["link-icon"]
      }
    >
      <Link value={value} href={href}/>
      <ArrowIcon className={styles.arrow} />
    </div>
  );
};
