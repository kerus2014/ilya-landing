import { useDispatch } from "react-redux";
import { closeMenuStateAction } from "../../reduxTools/burgerMenu/actions";
import { ClassName, INavbarData} from "../../types";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props: ClassName) => {
  const dispatch = useDispatch()

  const navbarData: INavbarData[] = [
    {
      id: 1,
      value: "Главная",
      path: "/",
    },
    {
      id: 2,
      value: "Моя история",
      path: "/about",
    },
    {
      id: 3,
      value: "Проекты",
      path:"/projects/etno",
    },
    {
      id: 4,
      value: "Кейсы",
      path: "/cases/category1"
    },
    {
      id: 5,
      value: "Блог",
      path: "/blog/events"
    },
    {
      id: 6,
      value: "Сотрудничество",
      path: "/cooperation/forOwners",
    },
    {
      id: 7,
      value: "Контакты",
      path: "/contacts",
    },
  ];

  return (
    <nav
      className={
        props.className
          ? `${styles.container} ${props.className}`
          : styles.container
      }
    >
      {navbarData.map(({ id, value, path }) => (
        <NavLink key={id.toString()} to={path} className={({ isActive }: { isActive: boolean }): string => (isActive ? 'navLink activeNavLink' : 'navLink')} onClick={() => dispatch(closeMenuStateAction())} >
          {value}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
