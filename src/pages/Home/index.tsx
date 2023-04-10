import { BlockTemplate } from "../../components/BlockTemplate";
import { Button } from "../../components/Button";
import { ListRow } from "../../components/ListRow";
import { Title } from "../../components/Title";
import { TitleWithBottomLine } from "../../components/TitleWithBottomLine";
import { myHistoryData } from "../../services/myHistoryData";
import photo from "../../assets/pics/фото.png";
import { Link } from "../../components/Link";
import ProjectCard from "../../components/ProjectCard";
import { projectCardsData } from "../../services/projectCardsData";
import { myCooperationData } from "../../services/myCooperationData";
import CooperationCard from "../../components/CooperationCard";
import { blogCardData } from "../../services/blogCardData";
import BlogCard from "../../components/BlogCard";
import styles from "./index.module.scss";

export const Home = () => {
  return (
    <>
      <BlockTemplate className={styles.banner}>
        <div className={styles["banner__container"]}>
          <div className={styles["banner__left"]}>
            <Title title="Илья Давыдов" />
            <h2 className={styles["banner__subtitle"]}>
              Туризм. Технологии. Будущее.
            </h2>
            <p className={styles["banner__devis"]}>
              Объединяю личный опыт и опыт специалистов из разных сфер для
              развития туризма
            </p>
            <div className={styles["banner__button-container"]}>
              <Button value={"Связаться"} />
            </div>
          </div>
          <div className={styles["banner__right"]}>
            <div className={styles["banner__photo-container"]}>
              <img src={photo} alt="photo1" />
            </div>
            <div className={styles["banner__links"]}>
              <Link value={"Facebook"} />
              <Link value={"Instagram"} />
              <Link value={"Telegram"} />
              <Link value={"VK"} />
            </div>
          </div>
        </div>
      </BlockTemplate>
      <BlockTemplate className={styles.history}>
        <TitleWithBottomLine title="МОЯ ИСТОРИЯ" />

        {myHistoryData.map(({ number, title, description }, index) => (
          <ListRow
            key={index}
            value1={number}
            value2={title}
            value3={description}
          />
        ))}
      </BlockTemplate>
      <BlockTemplate className={styles.history}>
        <TitleWithBottomLine title="Проекты" />

        {projectCardsData.map((elem, index) => (
          <ProjectCard card={elem} />
        ))}
      </BlockTemplate>
      <BlockTemplate className={styles.cooperation}>
        <TitleWithBottomLine
          title="Сотрудничество"
          subtitle="Кому будет полезен мой опыт:"
        />

        {myCooperationData.map((elem, index) => (
          <CooperationCard key={index} card={elem} />
        ))}
      </BlockTemplate>
      <BlockTemplate className={styles.cooperation}>
        <Title
          title="Блог"
          subtitle="В блоге я пишу полезные статьи, делюсь личным опытом, кейсами и новостями из сферы туризма:"
        />

        <div className={styles["cooperation__card-container"]}>
          {blogCardData.slice(0, 4).map((elem, index) => (
            <BlogCard key={index} card={elem} />
          ))}
        </div>
      </BlockTemplate>
    </>
  );
};
