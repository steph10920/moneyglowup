import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Money Glowup by Brenda. All rights reserved.</p>
      <p>
        <a href="#privacy-policy">Privacy Policy</a> |{" "}
        <a href="#terms-of-service">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;