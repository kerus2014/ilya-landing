import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { BlockTemplate } from "../../components/BlockTemplate";
import { TitleWithBottomLine } from "../../components/TitleWithBottomLine";

interface ProjectsNavData{
  id: number,
  value: string,
  to:string
}

export const Projects = () => {

  const navbarData: ProjectsNavData[] = [
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
    <BlockTemplate>
      <TitleWithBottomLine title="Проекты"/>
      <div className={styles.projects}>
        <div className={styles["projects__nav-column"]}>
          {navbarData.map((el,index) => {
            return <NavLink key={index.toString()} to={el.to} className={(({isActive}) => isActive ? "navLink activeNavLink" : "navLink")}>{el.value}</NavLink>
          })}
        </div>
        <Outlet/>
      </div>
    </BlockTemplate>
  );
};
