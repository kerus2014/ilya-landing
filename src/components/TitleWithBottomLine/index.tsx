import { Title } from "../Title";
import styles from "./index.module.scss";

export const TitleWithBottomLine = () => {
  return(
    <div>
      <Title title="Контакты"/>
      <hr className={styles.line}/>
    </div>
  )
}