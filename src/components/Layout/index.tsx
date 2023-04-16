import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import FeedBackBlock from "../FeedBackBlock";
import {Helmet} from "react-helmet";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import styles from "./index.module.scss";

export const Layout = () => {
  const handleClick = () => {
    const element = document.body
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block:"start"});
    }
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ilya Davydov</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Ilya Davydov" />
      </Helmet>
      <Header />
      <main>
        <Outlet />
        <FeedBackBlock/>
      </main>
      <Footer />
      <div onClick={handleClick} className={styles["arrow-top"]}><ArrowIcon/></div>
    </>
  );
};
