import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import styles from "./index.module.scss";
import photo from "../../assets/pics/фото.png";
import interests from "../../assets/pics/about-interests.png";
import { TitleWithBottomLine } from "../../components/TitleWithBottomLine";
import { BlockTemplate } from "../../components/BlockTemplate";
import { ListRow } from "../../components/ListRow";
import { AboutInterstsItem } from "../../components/AboutInterestsItem";
import { myHistoryData } from "../../services/myHistoryData";

export const AboutMe = () => {
  return (
    <>
      <BlockTemplate className={styles.history}>
      <Title title="Моя история"/>
        <div className={styles["history__content-container"]}>
          <div className={styles["history__photo-container"]}>
            <img src={photo} alt=""/>
          </div>
          <div className={styles["history__right-side"]}>
            <p>Я Илья Давыдов - предприниматель и основатель стартапов в сфере туризма.</p>
            <p>Свой путь в предпринимательстве я начал еще в 2009 году, открыв первый бизнес - семейную мануфактуру. С тех пор я развиваюсь в направлении туризма, ищу возможности для развития эко туризма в Беларуси, сотрудничаю с владельцами агроусадеб, создаю инновационные решения для развития туризма в Беларуси.</p>
            <p>Имею богатый опыт в создании и развитии собственного дела, организации мероприятий, создании Travel Tech проектов. Объединяю личный опыт и опыт специалистов из разных сфер для развития туризма.</p>
            <div className={styles["history__items"]}>
              <div className={styles["history__items-row"]}>
                <div className={styles["item"]}>
                  <p className={styles["item__number"]}>4</p>
                  <p className={styles["item__text"]}>стартап-проекта за 13 лет</p>
                </div>
                <div className={styles["item"]}>
                  <p className={styles["item__number"]}>100</p>
                  <p className={styles["item__text"]}>успешных кейсов как эксперта</p>
                </div>
              </div>
              <div className={styles["history__items-row"]}>
                <div className={styles["item"]}>
                  <p className={styles["item__number"]}>10</p>
                  <p className={styles["item__text"]}>партнеров в сфере туризма</p>
                </div>
                <div className={styles["item"]}>
                  <p className={styles["item__number"]}>800</p>
                  <p className={styles["item__text"]}>часов лекций и менторства</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlockTemplate>

      <BlockTemplate className={styles.way}>
        <TitleWithBottomLine title="Мой путь"/>
        {myHistoryData.map((el,index) => {
          return <ListRow key={index.toString()} value1={el.year} value2={el.title} value3={el.description}/>
        })}
      </BlockTemplate>

      <BlockTemplate className={styles.interests}>
        <Title title="Мои интересы"/>
        <p>В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. </p>
        <div className={styles["interests__row"]}>
          <div className={styles["interests__row-item"]}>
            <AboutInterstsItem value="Альтернативный туризм"/>
            <AboutInterstsItem value="Агро / Эко / Сельский туризм"/>
            <AboutInterstsItem value="Маркетинг Дестинации, кластеры"/>
            <AboutInterstsItem value="Монетизация"/>
          </div>
          <div className={styles["interests__row-item"]}>
            <img src={interests} alt="" />
          </div>
          <div className={styles["interests__row-item"]}>
            <AboutInterstsItem value="Travel Tech проекты"/>
            <AboutInterstsItem value="Современные туристические продукты"/>
            <AboutInterstsItem value="Режиссура и постановка впечатлений"/>
            <AboutInterstsItem value="Событийный туризм"/>
          </div>
        </div>
        <p>
          В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм.
          В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм. В сферу моих инетересов входит предпринимательство и туризм.
        </p>
      </BlockTemplate>
    </>
  );
};
