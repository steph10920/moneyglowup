import React from "react";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Explore our valuable financial resources to empower your journey.</p>
      <ul>
        <li><a href="/guides">Financial Guides</a></li>
        <li><a href="/ebooks">E-books</a></li>
        <li><a href="/templates">Templates</a></li>
      </ul>
    </div>
  );
};

export default Resources;
