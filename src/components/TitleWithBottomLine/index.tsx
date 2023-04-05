import { Title } from "../Title";
import styles from "./index.module.scss";

interface TitleWithBottomLine{
  title:string;
}

export const TitleWithBottomLine = (props:TitleWithBottomLine) => {
  return(
    <div>
      <Title title={props.title}/>
      <hr className={styles.line}/>
    </div>
  )
}