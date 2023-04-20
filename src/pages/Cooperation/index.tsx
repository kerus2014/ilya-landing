import { InnerNavData } from "../../types";
import { BlockWithNav } from "../../components/BlockWithNav";
import styles from "./index.module.scss";

export const Cooperation = () => {

  const navbarData: InnerNavData[] = [
    {
      id: 1,
      value: "Хозяевам агроусадьб, глэмпингов, гостевых домов",
      to:"/cooperation/forOwners",
    },
    {
      id: 2,
      value: "Туристическим комплексам, санаториям, базам отдыха",
      to:"/cooperation/touristComplex",
    },
    {
      id: 3,
      value: "Дестинациям, кластерам",
      to:"/cooperation/forDestination",
    },
    {
      id: 4,
      value: "Проектным организациям в сфере туризма",
      to:"/cooperation/forProjectOrganization",
    },
    {
      id: 5,
      value: "Национальным паркам, заказникам, заповедникам",
      to:"/cooperation/forNationalPark",
    },
    {
      id: 6,
      value: "Гос. структурам, центрам поддержки предпринимательства",
      to:"/cooperation/forStateStructures",
    }
  ];

  return (
    <BlockWithNav title="Сотрудничество" navData={navbarData} subtitle="Кому будет полезен мой опыт"/>
  );
};

