import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Blog } from "./pages/Blog";
import { Cases } from "./pages/Cases";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";
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
import Events from "./pages/Blog/Events";
import SelectedEvent from "./pages/Blog/Events/SelectedEvent";
import { ForOwner } from "./pages/Cooperation/FowOwner";
import { TouristComplex } from "./pages/Cooperation/TouristComplex";
import { ForDestination } from "./pages/Cooperation/ForDestination";
import { ForProjectOrganization } from "./pages/Cooperation/ForProjectOrganization";
import { ForNationalPark } from "./pages/Cooperation/ForNationalPark";
import { ForStateStructures } from "./pages/Cooperation/ForStateStructures";
import Category1 from "./pages/Cases/Category1";
import Category2 from "./pages/Cases/Category2";
import Category3 from "./pages/Cases/Category3";
import Category4 from "./pages/Cases/Category4";
import { Cooperation } from "./pages/Cooperation";

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
          <Route path="hash_history" element={<SelectedEvent />} />
          <Route path="hash_gastrotourism" element={<SelectedEvent />} />
          <Route path="hash_business" element={<SelectedEvent />} />
          <Route path="hash_myexperience" element={<SelectedEvent />} />
        </Route>
        <Route path="projects" element={<Projects />}>
          <Route path="etno" element={<Etno />} />
          <Route path="agro" element={<AgroTourism />} />
          <Route path="pixel" element={<PixelLab />} />
          <Route path="travel" element={<TravelTech />} />
        </Route>
        <Route path="cooperation" element={<Cooperation />}>
          <Route path="forOwners" element={<ForOwner />} />
          <Route path="touristComplex" element={<TouristComplex />} />
          <Route path="forDestination" element={<ForDestination />} />
          <Route path="forProjectOrganization" element={<ForProjectOrganization />} />
          <Route path="forNationalPark" element={<ForNationalPark />} />
          <Route path="forStateStructures" element={<ForStateStructures />} />
        </Route>
        <Route path="services" element={<Services />}>
          <Route path="audit" element={<Audit />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="strategy" element={<Strategy />} />
          <Route path="organization" element={<Organization />} />
          <Route path="project_support" element={<ProjectSupport />} />
        </Route>
        <Route path="cases" element={<Cases />}>
          <Route path="category1" element={<Category1 />} />
          <Route path="category2" element={<Category2/>} />
          <Route path="category3" element={<Category3 />} />
          <Route path="category4" element={<Category4 />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
