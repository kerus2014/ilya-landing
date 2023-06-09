import { BlockTemplate } from "../../components/BlockTemplate";
import { Link } from "../../components/Link";
import { TitleWithBottomLine } from "../../components/TitleWithBottomLine";
import styles from "./index.module.scss";

export const Contacts = () => {
  return(
    <BlockTemplate className={styles.contacts}>
      <TitleWithBottomLine title="Контакты"/>
      <p>
        Я Илья Давыдов - предприниматель и основатель стартапов в сфере туризма. Объединяю личный опыт и опыт специалистов из разных сфер для развития туризма.
        <br/>Я сотрудничаю с хозяевами агроусадеб и гостевых домов, санаториями, заповедниками по вопросам развития туризма.
        Если у Вас есть вопросы, идеи, предложения по сотрудничеству - я всегда буду рад быть на связи и помочь!
      </p>
      <div className={styles["contacts__connect"]}>
        <p>Пишите: <span>opennewtime@gmail.com</span></p>
        <p>Звоните: <span>+375 (29) 751 61 78</span></p>
        <p>
          Будем на связи в социальных сетях:
          <div>
            <Link value="Facebook" href="https://www.facebook.com/ilja.davydov/"/> 
            <Link value="Instagram" href="https://www.instagram.com/ilyadavydov/"/> 
            <Link value="Telegram" href="https://t.me/ilaidavy"/> 
            <Link value="VK" href="https://vk.com/ildavydov"/>
          </div>
        </p>
      </div>
      <p>
      Если Вы из Республики Беларусь - свяжитесь со мной любым удобным способом.<br/>
      Если Вы из-за границы - прошу писать на почту или в мессенджеры.<br/>
      Также Вы всегда можете оставить заявку и я сам с Вами свяжусь.
      </p>
    </BlockTemplate>
  )
}