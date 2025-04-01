import React, { useState } from "react";
import "../nav/Navbar.css";
import Logoimg from "../../assets/Udaan_logo.png";
import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-main-container">
      <div className="nav-header">
        <div className="logo-container">
          <img className="logo-img " src={Logoimg} alt="" />
        </div>
        <div>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/service">Home </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
