import React from "react";
import "../styles/Resources.css";
// Import the cover images
import MonthlyBudgetCover from "../assets/images/monthly-budget-cover.png";
import WeeklyBudgetCover from "../assets/images/weekly-budget-cover.png";

const Resources = () => {
  const resources = [
    {
      title: "Monthly Budget Template",
      description: "Organize your monthly finances with this easy-to-use Excel sheet.",
      coverImage: MonthlyBudgetCover,
      link: "https://your-monthly-budget-link.com", // Replace with the actual OneDrive link
    },
    {
      title: "Weekly Budget Template",
      description: "Plan your weekly expenses and stay on top of your finances.",
      coverImage: WeeklyBudgetCover,
      link: "https://your-weekly-budget-link.com", // Replace with the actual OneDrive link
    },
  ];

  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Explore our curated financial resources to empower your journey.</p>

      {/* Render Resources */}
      <div className="template-container">
        {resources.map((resource, index) => (
          <div className="template-card" key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <div className="iframe-container">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={resource.coverImage}
                  alt={`${resource.title} Cover`}
                  className="template-cover"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
