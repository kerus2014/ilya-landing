import { BlockWithNav } from "../../components/BlockWithNav";
import { InnerNavData } from "../../types";
import styles from "./index.module.scss";

export const Cases = () => {
  const navbarData: InnerNavData[] = [
    {
      id: 1,
      value: "Категория 1",
      to: "/cases/category1",
    },
    {
      id: 2,
      value: "Категория 2",
      to: "/cases/category2",
    },
    {
      id: 3,
      value: "Категория 3",
      to: "/cases/category3",
    },
    {
      id: 4,
      value: "Категория 4",
      to: "/cases/category4",
    },
  ];

  return <BlockWithNav title="Кейсы" navData={navbarData} />;
};
