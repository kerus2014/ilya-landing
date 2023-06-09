import { NavLink } from "react-router-dom";
import { Container } from "../Container";
import { Link } from "../Link";
import Navbar from "../Navbar";
import styles from "./index.module.scss";
import { DesignerLogo } from "../../assets/icons/DesignerLogo";
import { TG } from "../../assets/icons/socials/TG";
import { FB } from "../../assets/icons/socials/FB";
import { INST } from "../../assets/icons/socials/INST";
import { VK } from "../../assets/icons/socials/VK";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
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
              <h3 className={styles.subtitle}>
                Буду рад быть с Вами на связи!
              </h3>
            </div>
            <div className={styles.footerLeftSide_bot}>
              <Navbar />
            </div>
          </div>
          <div className={styles.footerRightSide}>
            <div>
              <div className={styles.contactBlockContainer}>
                <div className={styles.contactBlock}>
                  <h4 className={styles.subtitle}>Пишите:</h4>
                  <p>opennewtime@gmail.com</p>
                </div>
                <div className={styles.contactBlock}>
                  <h4 className={styles.subtitle}>Звоните:</h4>
                  <p>+375 (29) 751 61 78 </p>
                </div>
              </div>
              <h3 className={styles.subtitle}>
                Будем на связи в социальных сетях:
              </h3>
              <div className={styles.linksContainer}>
                <VK href="https://vk.com/ildavydov"/>
                <INST href="https://www.instagram.com/ilyadavydov/"/>
                <TG href="https://t.me/ilaidavy"/>
                <FB href="https://www.facebook.com/ilja.davydov/"/>
                {/* <Link value={"Facebook"} />
                <Link value={"Instagram"} />
                <Link value={"Telegram"} />
                <Link value={"VK"} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles["footer__last-row"]}>
          <a href="">© Илья Давыдов 2023</a>
          <a href="">Карта сайта</a>
          <a href="">Разработка сайта TravelWeb</a>
          <a href="https://www.instagram.com/nastaway/" className={styles["footer__designer"]}>Дизайн сайта разработан
          <DesignerLogo className={styles["footer__designer-logo"]} /></a>
        </div>
      </Container>
    </footer>
  );
};
