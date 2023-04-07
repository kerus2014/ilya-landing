import { NavLinkValue } from "../../types";
import cn from "classnames";
import styles from "./index.module.scss";

interface IProps {
  value: NavLinkValue;
  handler: (value: NavLinkValue) => void;
  activeLink: NavLinkValue;
}
const NavLink = (props: IProps) => {
  const { value, handler, activeLink } = props;

  return (
    <li
      className={cn("navLink", {
        ["activeNavLink"]: activeLink === value,
      })}
      onClick={() => handler(value)}
    >
      {value}
    </li>
  );
};

export default NavLink;
