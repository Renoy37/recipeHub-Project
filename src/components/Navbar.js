import React from "react";

function Navbar() {
  return (
    <div>
      <div className="Nav-container">
        <div className="nav-branding">
          Recipe<span className="hub">HUB</span>
        </div>

        <ul className="nav-link-container">
          <li className="nav-links">Home</li>
          <li className="nav-links">Discover</li>
          <li className="nav-links">AddYours</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
