import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Money Glowup</h1>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
