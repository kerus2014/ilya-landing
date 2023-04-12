import React, { useState } from "react";
import { InnerNavData } from "../../types";
import { useLocation, useNavigate } from "react-router";
import styles from "./index.module.scss";
import cn from "classnames";
interface IProps {
  dropdownData: InnerNavData[];
}

const Dropdown = (props: IProps) => {
  const { dropdownData } = props;
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const initialValue = dropdownData.find((elem) => elem.to === pathname);

  const [value, setValue] = useState(initialValue?.value);

  const closeDropdownMenu = () => {
    setOpen(false);
  };
  const toggleDropdownMenu = () => {
    setOpen((prevState) => !prevState);
  };
  const clickDropdownItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    path: string,
    value: string
  ) => {
    e.stopPropagation();
    closeDropdownMenu();
    setValue(value);
    navigate(path);
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdownMenu}>
      <div className={styles["dropdown__value"]}>{value}</div>
      <div
        className={cn(styles["dropdown__items"], {
          [styles["dropdown__items_visible"]]: open,
        })}
      >
        {dropdownData.map(({ to, value }) => (
          <div key={value} onClick={(e) => clickDropdownItem(e, to, value)}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
