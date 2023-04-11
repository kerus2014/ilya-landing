import { BlockWithNav } from "../../components/BlockWithNav";
import { InnerNavData } from "../../types";
import styles from "./index.module.scss";

export const Blog = () => {
  const navbarData: InnerNavData[] = [
    {
      id: 1,
      value: "События",
      to: "/blog/events",
    },
    {
      id: 2,
      value: "Туризм",
      to: "/blog/tourism",
    },
    {
      id: 3,
      value: "Бизнес",
      to: "/blog/business",
    },
    {
      id: 4,
      value: "Мой опыт",
      to: "/blog/myexperience",
    },
  ];
  return (
    <BlockWithNav title="Блог" navData={navbarData} navTitle="Категории:" />
  );
};
