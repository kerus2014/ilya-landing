import { useState } from "react";
import { INavbarData, NavLinkValue } from "../../types";
import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";
import styles from "./index.module.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<NavLinkValue>("Главная");
  const navigate = useNavigate();

  const navbarData: INavbarData[] = [
    {
      id: 1,
      value: "Главная",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
      },
    },
    {
      id: 2,
      value: "Моя история",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("/about");
      },
    },
    {
      id: 3,
      value: "Проекты",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("/projects");
      },
    },
    {
      id: 4,
      value: "Кейсы",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
      },
    },
    {
      id: 5,
      value: "Блог",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
      },
    },
    {
      id: 6,
      value: "Сотрудничество",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
      },
    },
    {
      id: 7,
      value: "Контакты",
      handler: (value: NavLinkValue) => {
        setActiveLink(value);
        navigate("");
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
