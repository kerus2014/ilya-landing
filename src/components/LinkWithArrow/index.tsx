import { Link } from "../Link";
import styles from "./index.module.scss";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import { ClassName } from "../../types";

interface LinkWithIcon extends ClassName {
  value: string;
  href?: string;
  onClick?: () => void;
}

export const LinkWithArrow = (props: LinkWithIcon) => {
  const { value, className, href, onClick } = props;
  return (
    <div
      className={
        className ? `${styles["link-icon"]} ${className}` : styles["link-icon"]
      }
      onClick={onClick}
    >
      <Link value={value} href={href} />
      <ArrowIcon className={styles.arrow} />
    </div>
  );
};
