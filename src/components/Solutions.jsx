import React, { useState, useEffect, useRef } from "react";
import "../styles/Solutions.css";

const Solutions = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-wrapper" ref={menuRef}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        Solutions &#9662;
      </div>
      {open && (
        <ul className="dropdown-menu">
          <li><a href="#smart-goals">Setting SMART Financial Goals</a></li>
          <li><a href="#budgeting">Budgeting</a></li>
          <li><a href="#saving">Saving</a></li>
          <li><a href="#investing">Investing</a></li>
          <li><a href="#wealth-creation">Wealth Creation</a></li>
        </ul>
      )}
    </div>
  );
};

export default Solutions;
