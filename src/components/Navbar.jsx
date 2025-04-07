import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/mytuteeLogo.png";
import "./Navbar.css";

export const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={props.temp ? "centered-nav" : ""}>
      {/* Always show the logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="Logo" />
      </Link>

      {/* Show menu only if props.temp is false */}
      {!props.temp && (
        <>
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/store">Store</NavLink>
            </li>
            <li>
              <NavLink to="/boardofexperts">Board of Experts</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="bi bi-cart"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="btnlink">
                <button className="Regbtn">Register/Login</button>
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};
