import { BlockTemplate } from "../BlockTemplate";
import { TitleWithBottomLine } from "../TitleWithBottomLine";
import { NavLink,Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { InnerNavData } from "../../types";

interface IBlockWithNav{
  title:string;
  navData:InnerNavData[];
} 

export const BlockWithNav = (props:IBlockWithNav) => {
  const {title,navData} = props
  return (
    <BlockTemplate>
      <TitleWithBottomLine title={title}/>
      <div className={styles.block}>
        <div className={styles["block__nav-column"]}>
          {navData.map((el,index) => {
            return <NavLink key={index.toString()} to={el.to} className={(({isActive}) => isActive ? "navLink activeNavLink" : "navLink")}>{el.value}</NavLink>
          })}
        </div>
        <Outlet/>
      </div>
    </BlockTemplate>
  );
}