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
import { SimpleSlider } from "../../components/SimpleSlider";
import { LinkWithArrow } from "../../components/LinkWithArrow";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    const element = document.getElementById("contacts")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block:"nearest"});
    }
  }

  return (
    <>
      <BlockTemplate className={styles.banner}>
        <div className={styles["banner__container"]}>
          <div className={styles["banner__left"]}>
            <Title title="Илья Давыдов" className={styles["banner__title"]}/>
            <h2 className={styles["banner__subtitle"]}>
              Туризм. Технологии. Будущее.
            </h2>
            <div className={styles["banner__photo-adaptiv"]}>
              <img src={photo} alt="photo1" />
            </div>
            <p className={styles["banner__devis"]}>
              Объединяю личный опыт и опыт специалистов из разных сфер для
              развития туризма
            </p>
            <div className={styles["banner__button-container"]}>
              <Button value={"Связаться"} onClick={handleClick}/>
            </div>
          </div>
          <div className={styles["banner__right"]}>
            <div className={styles["banner__photo-container"]}>
              <img src={photo} alt="photo1" />
            </div>
            <div className={styles["banner__links"]}>
              <Link value="Facebook" href="https://www.facebook.com/ilja.davydov/"/> 
              <Link value="Instagram" href="https://www.instagram.com/ilyadavydov/"/> 
              <Link value="Telegram" href="https://t.me/ilaidavy"/> 
              <Link value="VK" href="https://vk.com/ildavydov"/>
            </div>
          </div>
        </div>
      </BlockTemplate>
      <BlockTemplate className={`${styles.history} dark`}>
        <TitleWithBottomLine title="МОЯ ИСТОРИЯ" />

        {myHistoryData.map(({ number, title, description }, index) => (
          <ListRow
            key={index}
            value1={number}
            value2={title}
            value3={description}
          />
        ))}
        <LinkWithArrow value="Подробнее" onClick={() => navigate("/about")}/>
      </BlockTemplate>
      <BlockTemplate className={styles.projects}>
        <TitleWithBottomLine title="Проекты" />

        {projectCardsData.map((elem, index) => (
          <ProjectCard card={elem}/>
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
        <p>
        Не нашли себя в списке? Не беда. Если вас что-то заинтересовало, у вас есть предложение, или наши интересы совпадают и вы хотите поучаствовать в каком-нибудь проекте - смело обращайтесь.
        </p>
      </BlockTemplate>
      <BlockTemplate className="dark">
        <Title
          title="Блог"
          subtitle="В блоге я пишу полезные статьи, делюсь личным опытом, кейсами и новостями из сферы туризма:"
        />

        <div className={styles["blog__card-container"]}>
          <SimpleSlider>
            {blogCardData.slice(0,4).map((elem, index) => (
              <BlogCard key={index} card={elem} />
            ))}
          </SimpleSlider>
        </div>
        <LinkWithArrow value="Все статьи" onClick={() => navigate("/blog/events")}/>
      </BlockTemplate>
    </>
  );
};
