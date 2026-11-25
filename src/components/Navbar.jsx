
import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="site-header">
      <div className="navbar">
        <NavLink to="/" className="logo">
          Shawn's Sneaker Hub
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/shop">
            Shop Sneakers
          </NavLink>

          <NavLink to="/login">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
