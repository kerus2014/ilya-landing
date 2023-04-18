import styles from "./index.module.scss";

interface IProps{
  children:React.ReactNode;
  href?:string;
}

export const ContainerSocials = (props:IProps) => {
  return(
    <a className={styles.container} href={props.href}>
      {props.children}
    </a>
  )
}