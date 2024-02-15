
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <ul className="social-links">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="src/icons/icons8-instagram-48.png" alt="Instagram"/></a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="src/icons/icons8-facebook-48.png" alt="Facebook"/></a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><img src="src/icons/icons8-pinterest-48.png" alt="Pinterest"/></a></li>
          </ul>


          <ul className="footer-link-container">
            <li className="footer-links">Home</li>
            <li className="footer-links">Discover</li>
            <li className="footer-links">Add Yours</li>
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
