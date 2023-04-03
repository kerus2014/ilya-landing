import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Blog } from "./pages/Blog";
import { Cases } from "./pages/Cases";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";
import { WorkWithUs } from "./pages/WorkWithUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="blog" element={<Blog />} />
        <Route path="cases" element={<Cases />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cooperation" element={<WorkWithUs />} />
      </Route>
    </Routes>
  );
}

export default App;
