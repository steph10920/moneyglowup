import React from "react";
import ExcelIcon from "../assets/images/excel-icon.png"; // Ensure this path is correct
import "../styles/Resources.css"; // Import the CSS for styling

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
            <a
              href="https://view.officeapps.live.com/op/view.aspx?src=YOUR_URL_HERE/files/Monthly%20budget.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              View
            </a>
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
            <a
              href="https://view.officeapps.live.com/op/view.aspx?src=YOUR_URL_HERE/files/Weekly%20Budget%20template.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
