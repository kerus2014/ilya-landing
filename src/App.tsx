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
import Events from "./pages/Blog/Events";
import SelectedEvent from "./pages/Blog/Events/SelectedEvent";
import FarmsteadOwners from "./pages/WorkWithUs/FarmsteadOwners";
import Audit from "./pages/Services/Audit";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="blog" element={<Blog />}>
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<SelectedEvent />} />

          <Route path="tourism" element={<SelectedEvent />} />
          <Route path="business" element={<SelectedEvent />} />
          <Route path="myexperience" element={<SelectedEvent />} />
        </Route>
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
        <Route path="cooperation" element={<WorkWithUs />}>
          <Route path="farmsteadowners" element={<FarmsteadOwners />} />
        </Route>
        <Route path="services" element={<Services />}>
          <Route path="audit" element={<Audit />} />
          <Route path="consultation" element={<Audit />} />
          <Route path="strategy" element={<Audit />} />
          <Route path="organization" element={<Audit />} />
          <Route path="projectsupport" element={<Audit />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
