import { NavLinkValueType } from "../../types";
import cn from "classnames";
import styles from "./index.module.scss";

interface IProps {
  value: NavLinkValueType;
  handler: (value: NavLinkValueType) => void;
  activeLink: NavLinkValueType;
}
const NavLink = (props: IProps) => {
  const { value, handler, activeLink } = props;

  return (
    <li
      className={cn("navLink", {
        activeNavLink: activeLink === value,
      })}
      onClick={() => handler(value)}
    >
      {value}
    </li>
  );
};

export default NavLink;
