import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Add styles for the hover dropdown

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Money Glowup</h1>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <span className="dropdown-toggle">Solutions</span>
          <ul className="dropdown-menu">
            <li>
              <a href="#setting-smart-goals">Setting SMART Financial Goals</a>
            </li>
            <li>
              <a href="#budgeting">Budgeting</a>
            </li>
            <li>
              <a href="#saving">Saving</a>
            </li>
            <li>
              <a href="#investing">Investing</a>
            </li>
            <li>
              <a href="#wealth-creation">Wealth Creation</a>
            </li>
          </ul>
        </div>
        <Link to="/resources">Resources</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
