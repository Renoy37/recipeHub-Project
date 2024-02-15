
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="Nav-container">
        <div className="nav-branding">
          Recipe<span className="hub">HUB</span>
        </div>

        <ul className="nav-link-container">
          <li className="nav-links"><Link to="/">Home</Link></li>
          <li className="nav-links"><Link to="/discover">Discover</Link></li>
          <li className="nav-links"><Link to="/post">Add Yours</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
