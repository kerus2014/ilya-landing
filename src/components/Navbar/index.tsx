import { useState } from "react";
import { INavbarData, NavLinkValueType } from "../../types";
import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";
import styles from "./index.module.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<NavLinkValueType>("Главная");
  const navigate = useNavigate();

  const navbarData: INavbarData[] = [
    {
      id: 1,
      value: "Главная",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("");
      },
    },
    {
      id: 2,
      value: "Моя история",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/about");
      },
    },
    {
      id: 3,
      value: "Проекты",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/projects/etno");
      },
    },
    {
      id: 4,
      value: "Кейсы",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/cases/category1");
      },
    },
    {
      id: 5,
      value: "Блог",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/blog/events");
      },
    },
    {
      id: 6,
      value: "Сотрудничество",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/cooperation/farmsteadowners");
      },
    },
    {
      id: 7,
      value: "Контакты",
      handler: (value: NavLinkValueType) => {
        setActiveLink(value);
        navigate("/contacts");
      },
    },
  ];

  return (
    <ul className={styles.container}>
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
