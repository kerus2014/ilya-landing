import { BlockWithNav } from "../../components/BlockWithNav";
import { InnerNavData } from "../../types";
import styles from "./index.module.scss";

export const WorkWithUs = () => {
  const navbarData: InnerNavData[] = [
    {
      id: 1,
      value: "Хозяевам агроусадьб, глэмпингов, гостевых домов",
      to: "/cooperation/farmsteadowners",
    },
    {
      id: 2,
      value: "Туристическим комплексам, санаториям, базам отдыха",
      to: "/cooperation/travel",
    },
    {
      id: 3,
      value: "Дестинациям, кластерам",
      to: "/cooperation/pixel",
    },
    {
      id: 4,
      value: "Проектным организациям в сфере туризма",
      to: "/cooperation/agro",
    },
    {
      id: 5,
      value: "Гос. структурам, центрам поддержки предпринимательства",
      to: "/cooperation/agro",
    },
  ];

  return (
    <BlockWithNav
      title="Сотрудничество"
      navData={navbarData}
      subtitle={"Кому будет полезен мой опыт:"}
    />
  );
};
