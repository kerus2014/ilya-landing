import styles from "./index.module.scss";

interface ListRow {
  value1: string;
  value2: string;
  value3: string;
}

export const ListRow = (props: ListRow) => {
  const { value1, value2, value3 } = props;
  return (
    <>
      <div className={styles["list-row"]}>
        <p className={styles["list-row__first-column"]}>{value1}</p>
        <div className={styles["list-row__grid"]}>
          <p className={styles["list-row__grid-item_first"]}>{value2}</p>
          <p className={styles["list-row__grid-item_second"]}>{value3}</p>
        </div>
      </div>
      <hr className={styles["line"]} />
    </>
  );
};
