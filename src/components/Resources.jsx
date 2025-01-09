import React from "react";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Explore our curated financial resources.</p>
      <ul>
        <li><a href="/guides">Guides</a></li>
        <li><a href="/ebooks">E-books</a></li>
        <li><a href="/templates">Templates</a></li>
      </ul>
    </div>
  );
};

export default Resources;
