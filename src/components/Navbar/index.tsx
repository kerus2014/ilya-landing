import { useState } from "react";
import { ClassName, INavbarData, NavLinkValue } from "../../types";
import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { closeMenuStateAction } from "../../reduxTools/burgerMenu/actions";

const Navbar = (props:ClassName) => {
  const [activeLink, setActiveLink] = useState<NavLinkValue>("Главная");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const navbarData: INavbarData[] = [
    {
      id: 1,
      value: "Главная",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 2,
      value: "Моя история",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("/about");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 3,
      value: "Проекты",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("/projects");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 4,
      value: "Кейсы",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 5,
      value: "Блог",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 6,
      value: "Сотрудничество",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("/services");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 7,
      value: "Контакты",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("/contacts");
        dispatch(closeMenuStateAction())
      },
    },
  ];

  return (
    <ul className={props.className ? `${styles.container} ${props.className}` : styles.container}>
      {navbarData.map(({ id, value, handler }) => (
        <NavLink
          key={id}
          value={value}
          handler={handler}
          activeLink={activeLink}
        />
      ))}
    </ul>
  );
};

export default Navbar;
