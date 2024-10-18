import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import PixelArt from "./pages/PixelArt";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Illustration from "./pages/Illustration";
import Storyboard from "./pages/Storyboard";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Homepage />}/>
          <Route path="storyboard" element={<Storyboard />}/>
          <Route path="illustration" element={<Illustration />}/>
          <Route path="pixel-art" element={<PixelArt />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
