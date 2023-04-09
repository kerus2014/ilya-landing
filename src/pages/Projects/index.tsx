import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { BlockTemplate } from "../../components/BlockTemplate";
import { TitleWithBottomLine } from "../../components/TitleWithBottomLine";
import { InnerNavData } from "../../types";
import { BlockWithNav } from "../../components/BlockWithNav";

export const Projects = () => {

  const navbarData: InnerNavData[] = [
    {
      id: 1,
      value: "Сувениры со смыслом Etno.by",
      to:"/projects/etno"
    },
    {
      id: 2,
      value: "Travel Tech проекты",
      to:"/projects/travel"
    },
    {
      id: 3,
      value: "Туристические продукты Pixel Lab",
      to:"/projects/pixel"
    },
    {
      id: 4,
      value: "Образовательная платформа AgroTourism Pro",
      to:"/projects/agro"
    },
  ];

  return (
    <BlockWithNav title="Проекты" navData={navbarData}/>
  );
};
