import styles from "./index.module.scss";
const FeedBackForm = () => {
  return (
    <div className={styles.container}>
      <h3>
        Давайте знакомится, встречаться и работать <b>вместе</b>!
      </h3>
      <h4>Оставьте заявку, я Вам перезвоню для обсуждения сотрудничества:</h4>
      <form className={styles.formContainer} id="form" action="">
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="Имя"
          />
          <input
            className={styles.input}
            type="tel"
            name="phonenumber"
            placeholder="+375(29)5553377"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="name@gmail.com"
          />
        </div>
        <input
          className={styles.input}
          type="text"
          name="nickname"
          placeholder="Предпочтительный способ связи"
        />
        <textarea
          className={styles.textarea}
          name="textarea"
          placeholder="Кратко опишите ваш запрос"
        ></textarea>
        <input
          className={styles.submit}
          type="submit"
          placeholder="Отправить"
        />
      </form>
    </div>
  );
};

export default FeedBackForm;
