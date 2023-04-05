import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import FeedBackBlock from "../FeedBackBlock";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <FeedBackBlock/>
      </main>
      <Footer />
    </>
  );
};
