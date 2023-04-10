import { BlockWithNav } from "../../components/BlockWithNav";
import { InnerNavData } from "../../types";

const Services = () => {
  const navbarData: InnerNavData[] = [
    {
      id: 1,
      value: "Аудит",
      to: "/services/audit",
    },
    {
      id: 2,
      value: "Консультация",
      to: "/services/consultation",
    },
    {
      id: 3,
      value: "Стратегия под ключ",
      to: "/services/strategy",
    },
    {
      id: 4,
      value: "Организация",
      to: "/services/organization",
    },
    {
      id: 5,
      value: "Проектная поддержка",
      to: "/services/projectsupport",
    },
  ];

  return <BlockWithNav title="Услуги" navData={navbarData} />;
};

export default Services;
