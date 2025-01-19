import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../styles/Resources.css";
// Import cover images for templates
import MonthlyBudgetCover from "./assets/images/monthly-budget-cover.png";
import WeeklyBudgetCover from "./assets/images/weekly-budget-cover.png";

const App = () => {
  return (
    <>
      <Header />
      <main className="resources">
        <h1>Budget Templates</h1>
        <p>Explore our curated financial templates to organize your finances.</p>

        {/* Budget Template Section */}
        <div className="template-container">
          {/* Monthly Budget Template */}
          <div className="template-card">
            <h3>Monthly Budget Template</h3>
            <p>Organize your monthly finances with this easy-to-use Excel sheet.</p>
            <div className="iframe-container">
              <a
                href="https://1drv.ms/x/c/961806e07dee157d/IQSVIhroHQ64R6wnaiPquOLtAWFsAzMosM5xJh43kQFUXmE?em=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MonthlyBudgetCover}
                  alt="Monthly Budget Cover"
                  className="iframe-cover"
                />
              </a>
            </div>
          </div>

          {/* Weekly Budget Template */}
          <div className="template-card">
            <h3>Weekly Budget Template</h3>
            <p>Plan your weekly expenses and stay on top of your finances.</p>
            <div className="iframe-container">
              <a
                href="https://1drv.ms/x/c/123456abcdef/IQSVIhroHQ64R6wnaiPquOLtAWFsAzMosM5xJh43kQFUXmE?em=2" // Replace with actual Weekly Budget link
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WeeklyBudgetCover}
                  alt="Weekly Budget Cover"
                  className="iframe-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
