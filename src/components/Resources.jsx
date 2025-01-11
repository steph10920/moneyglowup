import React from "react";
import ExcelIcon from "../assets/images/excel-icon.png";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Explore our curated financial resources to empower your journey.</p>
      <div className="template-container">
        {/* Monthly Budget Template */}
        <div className="template-card">
          <div className="template-header">
            <img src={ExcelIcon} alt="Excel Icon" className="template-icon" />
            <h3>Monthly Budget Template</h3>
          </div>
          <p>Organize your monthly finances with this easy-to-use Excel sheet.</p>
          <div className="action-buttons">
            <a
              href="/files/Monthly budget.xlsx"
              download
              className="download-button"
            >
              Download
            </a>
            {/* Disabled View Button */}
            <button className="view-button disabled" disabled>
              View
            </button>
          </div>
        </div>

        {/* Weekly Budget Template */}
        <div className="template-card">
          <div className="template-header">
            <img src={ExcelIcon} alt="Excel Icon" className="template-icon" />
            <h3>Weekly Budget Template</h3>
          </div>
          <p>Plan your weekly expenses and stay on top of your finances.</p>
          <div className="action-buttons">
            <a
              href="/files/Weekly Budget template.xlsx"
              download
              className="download-button"
            >
              Download
            </a>
            {/* Disabled View Button */}
            <button className="view-button disabled" disabled>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
