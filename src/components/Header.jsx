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
        <div className="dropdown">
          <Link to="/solutions" className="dropdown-toggle">Solutions</Link>
          <div className="dropdown-menu">
            <Link to="/setting-smart-goals">Setting SMART Financial Goals</Link>
            <Link to="/budgeting">Budgeting</Link>
            <Link to="/saving">Saving</Link>
            <Link to="/investing">Investing</Link>
            <Link to="/wealth-creation">Wealth Creation</Link>
          </div>
        </div>
        <Link to="/resources">Resources</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
