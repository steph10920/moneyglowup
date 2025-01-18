import React from "react";
import "../styles/Resources.css";
// Import the cover images
import MonthlyBudgetCover from "../assets/images/monthly-budget-cover.png";
import WeeklyBudgetCover from "../assets/images/weekly-budget-cover.png";

const Resources = () => {
  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Explore our curated financial resources to empower your journey.</p>

      {/* Display Monthly Budget */}
      <div className="template-container">
        <div className="template-card">
          <h3>Monthly Budget Template</h3>
          <p>Organize your monthly finances with this easy-to-use Excel sheet.</p>
          <div className="iframe-container">
            <a
              href="https://1drv.ms/x/c/961806e07dee157d/EZUiGugdDrhHrCdqI-q44u0BbHucNe2BWPGevtwISuCdTw?e=OBihxE" // Replace this with the correct updated OneDrive link for the Monthly Budget
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MonthlyBudgetCover}
                alt="Monthly Budget Cover"
                className="template-cover"
              />
            </a>
          </div>
        </div>

        {/* Display Weekly Budget */}
        <div className="template-card">
          <h3>Weekly Budget Template</h3>
          <p>Plan your weekly expenses and stay on top of your finances.</p>
          <div className="iframe-container">
            <a
              href="https://1drv.ms/x/c/961806e07dee157d/ESvWsFYNdZZLoQYN_X5WWe8BnWx5aXThVNcKrO0S_9O2yg?e=V9liRd" // Replace this with the correct updated OneDrive link for the Weekly Budget
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={WeeklyBudgetCover}
                alt="Weekly Budget Cover"
                className="template-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
