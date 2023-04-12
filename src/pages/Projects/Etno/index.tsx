import styles from "./index.module.scss";
import logo from "../../../assets/pics/ProjectEtno.png";
import { LinkWithArrow } from "../../../components/LinkWithArrow";
import { etnoImages } from "../../../services/etnoImagesData";
import { cases } from "../../../services/cases";
import { CaseCard } from "../../../components/CaseCard";

export const Etno = () => {
  return (
    <div className={styles.etno}>
      <div className={styles["etno__info"]}>
        <div className={styles["etno__logo"]}>
          <img src={logo} alt="" />
        </div>
        <div className={styles["etno__title-container"]}>
          <p>Сувениры со смыслом</p>
          <LinkWithArrow value="Перейти на сайт" href="https://etno.by/" />
        </div>
      </div>
      <p>
        Etno.by - это семейная мануфактура. Мы производим сувениры, подарки,
        кормушки для птиц, настенные часы, подставки и другие интересные мелочи
        для интерьера, которые ты можешь найти на нашем сайте Etno.by или в
        магазинах-партнерах. Делаем собственные, авторские серии и изготавливаем
        под заказ по макетам и образцам заказчиков.
      </p>
      <div className={styles["etno__images-grid"]}>
        {etnoImages.map(({ id, image }) => {
          return (
            <div className={styles["etno__image"]} key={id.toString()}>
              {" "}
              <img src={image} alt="" />{" "}
            </div>
          );
        })}
      </div>
      <p>
        Для нас это не просто работа, это часть нашего образа жизни, философия,
        которой мы живем. Мы убеждены, что работа должна приносить удовольствие,
        и стоит работать так, чтобы гордиться тем, что делаешь. И мы гордимся
        тем, что наша серия магнитов "Простая беларуская ежа" была представлена
        на EXPO 2015 в Милане (Италия); тем, что стали Лицензионными
        производителями II Европейских игр 2019 Минск; тем, что наши работы
        разьезжаются по всему миру. Нас знают в Америке, Англии, Ирландии и
        Канаде, странах Европы и СНГ. Мы 6 лет шли к осознанию себя, своей
        работы и творчества. Пробовали разные форматы работы и пришли к
        семейному, крафтовому бизнесу. Что соответствует нашему внутреннему
        ощущению работы, которая приносит удовлетворение и гармонию.
      </p>
      <p className={styles["etno__title"]}>
        В рамках этого проекта я реализовал следующие кейсы:
      </p>
      <div className={styles["etno__cases"]}>
        {cases
          .slice(0, 3)
          .map(({ id, image, title, description, navigatePath }) => {
            return (
              <CaseCard
                id={id}
                key={id.toString()}
                image={image}
                title={title}
                description={description}
                navigatePath={navigatePath}
              />
            );
          })}
      </div>
      <LinkWithArrow value="Все кейсы" />
    </div>
  );
};
