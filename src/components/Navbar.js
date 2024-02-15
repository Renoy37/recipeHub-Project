import React from "react";
import { Link } from "react-router-dom";
import chef from "../Assets/chef.jpeg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Nav-container">
        <div className="nav-branding">
          <img src={chef} alt="chef" className="chef" />
          Recipe<span className="hub">HUB</span>
        </div>

        <ul className="nav-link-container">
          <li className="nav-links">
            <Link to="/Home" className="navs">
              Home
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/Discover" className="navs">
              Discover
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/PostPage" className="navs">
              Add Yours
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
