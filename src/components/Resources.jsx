import React from "react";
import ExcelIcon from "../assets/images/excel-icon.png"; // Ensure this path is correct

const Resources = () => {
  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Explore our curated financial resources to empower your journey.</p>
      <div className="template-container">
        {/* Monthly Budget Template */}
        <div className="template-card">
          <div className="template-header">
            <img
              src={ExcelIcon}
              alt="Excel Icon"
              style={{
                width: "30px",
                height: "auto",
                marginRight: "10px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <h3>Monthly Budget Template</h3>
          </div>
          <p>Organize your monthly finances with this easy-to-use Excel sheet.</p>
          <a
            href="/files/Monthly budget.xlsx"
            download
            className="download-button"
          >
            Download
          </a>
        </div>

        {/* Weekly Budget Template */}
        <div className="template-card">
          <div className="template-header">
            <img
              src={ExcelIcon}
              alt="Excel Icon"
              style={{
                width: "30px",
                height: "auto",
                marginRight: "10px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <h3>Weekly Budget Template</h3>
          </div>
          <p>Plan your weekly expenses and stay on top of your finances.</p>
          <a
            href="/files/Weekly Budget template.xlsx"
            download
            className="download-button"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
