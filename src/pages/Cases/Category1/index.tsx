import React from "react";
import { cases } from "../../../services/cases";
import { CaseCard } from "../../../components/CaseCard";
import styles from "./index.module.scss";

const Category1 = () => {
  return (
    <div className={styles["etno__cases"]}>
      {cases
        .slice(0, 6)
        .map(({ id, image, title, description, navigatePath }) => {
          return (
            <CaseCard
              id={id}
              key={id.toString()}
              image={image}
              title={title}
              description={description}
              navigatePath={navigatePath}
            />
          );
        })}
    </div>
  );
};

export default Category1;
