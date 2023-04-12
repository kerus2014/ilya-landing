import { BlockTemplate } from "../BlockTemplate";
import { TitleWithBottomLine } from "../TitleWithBottomLine";
import { NavLink, Outlet } from "react-router-dom";
import { InnerNavData } from "../../types";
import styles from "./index.module.scss";
import Dropdown from "../Dropdown";

interface IBlockWithNav {
  title: string;
  navData: InnerNavData[];
  navTitle?: string;
  subtitle?: string;
}

export const BlockWithNav = (props: IBlockWithNav) => {
  const { title, navData, navTitle, subtitle } = props;
  return (
    <BlockTemplate>
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
        </div>
        <Outlet />
      </div>
    </BlockTemplate>
  );
};
