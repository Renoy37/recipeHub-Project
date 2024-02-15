import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="icons">
        <Icon icon="skill-icons:instagram" />
        <Icon icon="fa6-brands:facebook-f" />
        <Icon icon="akar-icons:pinterest-fill" />
      </div>
      <ul className="footer-links">
        <li className="links">HOME</li>
        <li className="links">DISCOVER</li>
        <li className="links">ADDYOURS</li>
      </ul>
    </div>
  );
}

export default Footer;
