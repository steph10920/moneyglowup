import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Money Glowup</h1>
      </div>
      <nav className="nav">
        <a href="#hero">Home</a>
        <div className="dropdown">
          <a href="#solutions" className="dropdown-toggle">Solutions</a>
          <div className="dropdown-menu">
            <a href="#setting-smart-goals">Setting SMART Financial Goals</a>
            <a href="#budgeting">Budgeting</a>
            <a href="#saving">Saving</a>
            <a href="#investing">Investing</a>
            <a href="#wealth-creation">Wealth Creation</a>
          </div>
        </div>
        <a href="#resources">Resources</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
