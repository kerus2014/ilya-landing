import { useState } from "react";

import { ClassName, INavbarData, NavLinkValueType } from "../../types";

import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { closeMenuStateAction } from "../../reduxTools/burgerMenu/actions";

const Navbar = (props: ClassName) => {
  const [activeLink, setActiveLink] = useState<NavLinkValueType>("Главная");

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const navbarData: INavbarData[] = [
    {
      id: 1,
      value: "Главная",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 2,
      value: "Моя история",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/about");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 3,
      value: "Проекты",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        dispatch(closeMenuStateAction())
        navigate("/projects/etno");
      },
    },
    {
      id: 4,
      value: "Кейсы",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        dispatch(closeMenuStateAction())
        navigate("/cases/category1");
      },
    },
    {
      id: 5,
      value: "Блог",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        dispatch(closeMenuStateAction())
        navigate("/blog/events");
      },
    },
    {
      id: 6,
      value: "Сотрудничество",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/services/audit");
        dispatch(closeMenuStateAction())
      },
    },
    {
      id: 7,
      value: "Контакты",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/contacts");
        dispatch(closeMenuStateAction())
      },
    },
  ];

  return (
    <ul
      className={
        props.className
          ? `${styles.container} ${props.className}`
          : styles.container
      }
    >
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
