import styles from "./index.module.scss";
import { Title } from "../../components/Title";
import { TitleWithBottomLine } from "../../components/TitleWithBottomLine";
import { Link } from "../../components/Link";
import { LinkWithArrow} from "../../components/LinkWithArrow";
import { Button } from "../../components/Button";
import { ListRow } from "../../components/ListRow";

export const Home = () => {
  return(
    <>
      <Title title="Обо мне"/>
      <TitleWithBottomLine/>
      <Link value="Подробнее"/>
      <LinkWithArrow value="Подробнее"/>
      <Button value="Click"/>
      <ListRow value1="2009" value2="Предприниматель
Собственный бизнес с 2009 года" value3="Летом 2009 отправился в свободное плавание с нулевым бюджетом в кармане. Начал создавать себя и свое дело. Дело, которое сейчас кормит мою семью и помогает двигаться дальше."/>
      <ListRow value1="2020" value2="Предприниматель
Собственный бизнес с 2009 года" value3="Летом 2009 отправился в свободное плавание с нулевым бюджетом в кармане. Начал создавать себя и свое дело. Дело, которое сейчас кормит мою семью и помогает двигаться дальше."/>
    </>
  )
}