import { LinkWithArrow } from "../../../components/LinkWithArrow";
import forOwners from "../../../assets/pics/cooperatrion/forOwners/forOwners.png";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export const ForOwner = () => {
  const navigate = useNavigate()

  return (
    <div className={styles["for-owner"]}>
      <p>
      Консультация по вопросам развития вашего туристического бизнеса. Консультация по вопросам развития вашего туристического бизнеса. Консультация по вопросам развития вашего туристического бизнеса. Летом 2009 отправился в свободное плавание с нулевым бюджетом в кармане. Начал создавать себя и свое дело. Дело, которое сейчас кормит мою семью и помогает двигаться дальше. Консультация по вопросам развития вашего туристического бизнеса. Консультация по вопросам развития вашего туристического бизнеса. Консультация по вопросам развития вашего туристического бизнеса.
      </p>
      <div className={styles["for-owner__image"]}>
        <img src={forOwners} alt="home" />
      </div>
      <p>
      Если Вы хозяин агроусадьбы, то для развития вашего бизнеса доступны следующие услуги:
      </p>
      <div className={styles["for-owner__link"]}>
        <hr className={styles["for-owner__link-line"]}/>
        <LinkWithArrow value="Аудит" onClick={() => navigate("/services/audit")}/>
      </div>
      <div className={styles["for-owner__link"]}>
        <hr className={styles["for-owner__link-line"]}/>
        <LinkWithArrow value="Консультация" onClick={() => navigate("/services/consulting")}/>
      </div>
      <div className={styles["for-owner__link"]}>
        <hr className={styles["for-owner__link-line"]}/>
        <LinkWithArrow value="Стратегия под ключ" onClick={() => navigate("/services/strategy")}/>
      </div>
    </div>
  );
};

