
import { InnerNavData } from "../../types";
import { BlockWithNav } from "../../components/BlockWithNav";

export const Services = () => {


  const navbarData: InnerNavData[] = [
    {
      id: 1,
      value: "Аудит",

      to:"/services/audit"

    },
    {
      id: 2,
      value: "Консультация",

      to:"/services/consulting"

    },
    {
      id: 3,
      value: "Стратегия под ключ",

      to:"/services/strategy"

    },
    {
      id: 4,
      value: "Организация",

      to:"/services/organization"

    },
    {
      id: 5,
      value: "Проектная поддержка",

      to:"/services/project_support"
    },
  ];

  return (
    <BlockWithNav title="Услуги" navData={navbarData}/>
  );
};

