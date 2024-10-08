import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";


function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />}></Route>
        <Route path="*" element={"404 - Page not found"} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
