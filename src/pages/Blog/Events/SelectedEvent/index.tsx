import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogCardData } from "../../../../services/blogCardData";
import { IBlogCardData } from "../../../../types";
import styles from "./index.module.scss";
const SelectedEvent = () => {
  const params = useParams();
  const [event, setEvent] = useState<IBlogCardData>();

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedEvent = blogCardData.find(
      (event) => String(event.id) === params.id
    );
    setEvent(selectedEvent);
  }, [params.id]);

  return (
    <div className={styles["selected-event"]}>
      <h3 className={styles["selected-event__title"]}>{event?.text}</h3>
      <p className={styles["selected-event__date"]}>{event?.date}</p>
      <div className={styles["selected-event__image"]}>
        <img src={event?.image} alt="" />
      </div>
    </div>
  );
};

export default SelectedEvent;
