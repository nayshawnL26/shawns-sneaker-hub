
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
