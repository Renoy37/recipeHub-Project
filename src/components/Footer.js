
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="" alt="Instagram"/></a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="" alt="Facebook"/></a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><img src="" alt="Pinterest"/></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RecipeHUB. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
