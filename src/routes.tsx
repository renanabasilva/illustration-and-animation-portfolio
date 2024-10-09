import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Homepage />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={"404 - Page not found"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
