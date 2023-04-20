import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import FeedBackBlock from "../FeedBackBlock";
import {Helmet} from "react-helmet";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import styles from "./index.module.scss";
import {useEffect,useState} from "react";

export const Layout = () => {
  const [buttonToTop, setButtonToTop] = useState(false)

  const handleClick = () => {
    const element = document.body
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block:"start"});
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 150){
        setButtonToTop(true)
      } else {
        setButtonToTop(false)
      }
    })
  })

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
      <div onClick={handleClick} className={buttonToTop ? styles["arrow-top"] : styles.hide} id="arrow-top"><ArrowIcon/></div>
    </>
  );
};
