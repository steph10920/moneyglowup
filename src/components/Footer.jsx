import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css"; // Ensure the CSS is properly imported

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Money Glowup. All Rights Reserved.</p>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link to="/terms-of-service">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
