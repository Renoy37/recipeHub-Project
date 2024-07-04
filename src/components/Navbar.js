import React, { useState } from "react";
import { Link } from "react-router-dom";
import chef from "../Assets/chef.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="Nav-container">
        <div className="nav-branding">
          <img src={chef} alt="chef" className="chef" />
          Recipe<span className="hub">HUB</span>
        </div>

        <div className={`nav-link-container ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-links">
              <Link to="/Home" className="navs" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/Discover" className="navs" onClick={toggleMenu}>
                Discover
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/PostPage" className="navs" onClick={toggleMenu}>
                Add Yours
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
