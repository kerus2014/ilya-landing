import { BlockTemplate } from "../BlockTemplate";
import { TitleWithBottomLine } from "../TitleWithBottomLine";
import { NavLink, Outlet } from "react-router-dom";
import { ClassName, InnerNavData } from "../../types";
import styles from "./index.module.scss";
import Dropdown from "../Dropdown";

interface IBlockWithNav extends ClassName {
  title: string;
  navData: InnerNavData[];
  navTitle?: string;
  subtitle?: string;
  navTitleSecond?:string;
  navDataSecond?:InnerNavData[];
}

export const BlockWithNav = (props: IBlockWithNav) => {
  const { title, navData, navTitle, subtitle,className, navTitleSecond,navDataSecond} = props;
  return (
    <BlockTemplate className={styles["block-template"]}>
      <TitleWithBottomLine title={title} subtitle={subtitle} />
      <Dropdown dropdownData={navData} />
      <div className={styles.block}>
        <div className={styles["block__nav-column"]}>
          {navTitle && (
            <h3 className={styles["block__nav-title"]}>{navTitle}</h3>
          )}
          <div className={styles["block__nav-column"]}>
            {navData.map((el, index) => {
              return (
                <NavLink
                  key={index.toString()}
                  to={el.to}
                  className={({ isActive }) =>
                    isActive ? "navLink activeNavLink" : "navLink"
                  }
                >
                  {el.value}
                </NavLink>
              );
            })}
          </div>
          {navTitleSecond &&<h3 className={`${styles["block__nav-title"]} ${styles["block__nav-title_second"]}`}>{navTitleSecond}</h3>}
          {navTitleSecond && navDataSecond && 
          <div className={styles["block__nav-hash"]}>
            {navDataSecond.map((el, index) => {
              return (
                <NavLink
                  key={index.toString()}
                  to={el.to}
                  className={({ isActive }) =>
                    isActive ? "navLink activeNavLink" : "navLink"
                  }
                >
                  {el.value}
                </NavLink>
              );
            })}
          </div>
          }
        </div>
        <div className={styles["block__nav-content"]}>
          <Outlet />
          {navTitleSecond &&<h3 className={`${styles["block__nav-title"]} ${styles["block__nav-title_adaptiv"]}`}>{navTitleSecond}</h3>}
            {navTitleSecond && navDataSecond && 
            <div className={`${styles["block__nav-hash"]} ${styles["block__nav-hash_adaptiv"]}`}>
              {navDataSecond.map((el, index) => {
                return (
                  <NavLink
                    key={index.toString()}
                    to={el.to}
                    className={({ isActive }) =>
                      isActive ? "navLink activeNavLink" : "navLink"
                    }
                  >
                    {el.value}
                  </NavLink>
                );
              })}
            </div>
            }
        </div>
      </div>
    </BlockTemplate>
  );
};
