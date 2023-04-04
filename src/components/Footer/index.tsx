import { Container } from "../Container";
import { Link } from "../Link";
import Navbar from "../Navbar";
import styles from "./index.module.scss";
export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.container}>
          <div className={styles.footerLeftSide}>
            <div className={styles.footerLeftSide_top}>
              <h3>У Вас есть идея, проект для сотрудничества?</h3>
              <h3>Нужна консультация или помощь?</h3>
              <h3>
                Или Вы просто хотили пообщаться на тему предпринимательства и
                туризма?
              </h3>
              <h3>Буду рад быть с Вами на связи!</h3>
            </div>
            <div className={styles.footerLeftSide_bot}>
              <Navbar />
            </div>
          </div>
          <div className={styles.footerRightSide}>
            <div className={styles.contactBlockContainer}>
              <div className={styles.contactBlock}>
                <h4>Пишите</h4>
                <p>email@gmail.com</p>
              </div>
              <div className={styles.contactBlock}>
                <h4>Звоните</h4>
                <p>+375555425</p>
              </div>
            </div>
            <h3>Будем на связи в социальных сетях</h3>
            <div className={styles.linksContainer}>
              <Link value={"Facebook"} />
              <Link value={"Instagram"} />
              <Link value={"Telegram"} />
              <Link value={"VK"} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
