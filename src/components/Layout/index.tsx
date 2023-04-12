import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import FeedBackBlock from "../FeedBackBlock";
import {Helmet} from "react-helmet";

export const Layout = () => {
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
    </>
  );
};
