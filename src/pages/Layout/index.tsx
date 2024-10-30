import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <main>
        <div className="center-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
