import { ClassName } from "../../types";
import { Container } from "../Container";
import styles from "./index.module.scss";

interface Props extends ClassName {
  children: React.ReactNode;
}

export const BlockTemplate = (props: Props) => {
  return (
    <div
      className={
        props.className ? `${styles.block} ${props.className}` : styles.block
      }
    >
      <Container>{props.children}</Container>
    </div>
  );
};
