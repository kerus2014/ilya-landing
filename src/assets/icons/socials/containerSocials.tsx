import styles from "./index.module.scss";

interface IProps{
  children:React.ReactNode;
}

export const ContainerSocials = (props:IProps) => {
  return(
    <div className={styles.container}>
      {props.children}
    </div>
  )
}