import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Blog } from "./pages/Blog";
import { Cases } from "./pages/Cases";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";
import { WorkWithUs } from "./pages/WorkWithUs";
import { Etno } from "./pages/Projects/Etno";
import { AgroTourism } from "./pages/Projects/AgroTourismPro";
import { PixelLab } from "./pages/Projects/PixelLab";
import { TravelTech } from "./pages/Projects/TravelTech";
import Category1 from "./pages/Cases/Category1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />}>
          <Route path="etno" element={<Etno />} />
          <Route path="agro" element={<AgroTourism />} />
          <Route path="pixel" element={<PixelLab />} />
          <Route path="travel" element={<TravelTech />} />
        </Route>
        <Route path="cases" element={<Cases />}>
          <Route path="category1" element={<Category1 />} />
          <Route path="category2" element={<Category1 />} />
          <Route path="category3" element={<Category1 />} />
          <Route path="category4" element={<Category1 />} />
        </Route>
        <Route path="cooperation" element={<WorkWithUs />} />
      </Route>
    </Routes>
  );
}

export default App;
