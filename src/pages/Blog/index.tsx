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

  const navHashTagsData: InnerNavData[] = [
    {
      id: 1,
      value: "#история",
      to: "/blog/hash_history",
    },
    {
      id: 2,
      value: "#гастротуризм",
      to: "/blog/hash_gastrotourism",
    },
    {
      id: 3,
      value: "#бизнес",
      to: "/blog/hash_business",
    },
    {
      id: 4,
      value: "#мой опыт",
      to: "/blog/hash_myexperience",
    },
  ];
  return (
    <BlockWithNav title="Блог" navData={navbarData} navTitle="Категории:" navTitleSecond="Популярные теги:" navDataSecond={navHashTagsData}/>
  );
};
