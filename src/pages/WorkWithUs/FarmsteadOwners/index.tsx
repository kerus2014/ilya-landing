import logo from "../../../assets/pics/FarmsteadOwnersLogo.png";
import { LinkWithArrow } from "../../../components/LinkWithArrow";
import styles from "./index.module.scss";
const FarmsteadOwners = () => {
  return (
    <div className={styles.farmsteadowners}>
      <p className={styles["farmsteadowners__text"]}>
        Консультация по вопросам развития вашего туристического бизнеса.
        Консультация по вопросам развития вашего туристического бизнеса.
        Консультация по вопросам развития вашего туристического бизнеса. Летом
        2009 отправился в свободное плавание с нулевым бюджетом в кармане. Начал
        создавать себя и свое дело. Дело, которое сейчас кормит мою семью и
        помогает двигаться дальше. Консультация по вопросам развития вашего
        туристического бизнеса. Консультация по вопросам развития вашего
        туристического бизнеса. Консультация по вопросам развития вашего
        туристического бизнеса.
      </p>
      <img className={styles["farmsteadowners__logo"]} src={logo} alt="" />
      <p className={styles["farmsteadowners__text"]}>
        Если Вы хозяин агроусадьбы, то для развития вашего бизнеса доступны
        следующие услуги:
      </p>
      <div className={styles["farmsteadowners__links"]}>
        <LinkWithArrow value="Аудит" href="/services/audit" />
        <LinkWithArrow value="Консультация" />
        <LinkWithArrow value="Стратегия под ключ" />
      </div>
    </div>
  );
};

export default FarmsteadOwners;
