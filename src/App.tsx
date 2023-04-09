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
import { Services } from "./pages/Services";
import { Audit } from "./pages/Services/Audit";
import { Consulting } from "./pages/Services/Consulting";
import { Strategy } from "./pages/Services/Strategy";
import { Organization } from "./pages/Services/Organization";
import { ProjectSupport } from "./pages/Services/ProjectSupport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="blog" element={<Blog />} />
        <Route path="cases" element={<Cases />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="projects" element={<Projects />}>
          <Route path="etno" element={<Etno />} />
          <Route path="agro" element={<AgroTourism />} />
          <Route path="pixel" element={<PixelLab />} />
          <Route path="travel" element={<TravelTech />} />
        </Route> 
        <Route path="cooperation" element={<WorkWithUs />}/>
        <Route path="partners" element={<Services />} />
        <Route path="services" element={<Services />}>
          <Route path="audit" element={<Audit />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="strategy" element={<Strategy />} />
          <Route path="organization" element={<Organization />} />
          <Route path="project_support" element={<ProjectSupport />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
