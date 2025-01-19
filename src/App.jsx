import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import MonthlyBudgetCover from "./assets/images/monthly-budget-cover.png";
import WeeklyBudgetCover from "./assets/images/weekly-budget-cover.png";
import "./styles/App.css";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar visibility state

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section id="hero" className="hero">
                  <div className="hero-content">
                    <h1>Take Charge of Your Financial Freedom</h1>
                    <p>
                      Empowering you to achieve financial independence and wealth creation.
                    </p>
                    <div className="hero-buttons">
                      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        Explore Solutions
                      </button>
                      <Link to="/contact">
                        <button>Contact Us</button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section id="features-section" className="features">
                  <h2>Our Services</h2>
                  <div className="feature-cards">
                    <div className="feature-card">
                      <img src="./assets/images/image1.jpg" alt="Solutions" />
                      <h3>Solutions</h3>
                      <p>Discover actionable strategies to grow and manage your wealth.</p>
                      <Link to="/solutions">
                        <button>Learn More</button>
                      </Link>
                    </div>
                    <div className="feature-card">
                      <img src="./assets/images/image2.jpg" alt="Resources" />
                      <h3>Resources</h3>
                      <p>Access tools and templates for financial planning and budgeting.</p>
                      <Link to="/resources">
                        <button>Explore Resources</button>
                      </Link>
                    </div>
                    <div className="feature-card">
                      <h3>Affordable Pricing</h3>
                      <p>Choose a plan that suits your financial journey.</p>
                      <Link to="/pricing">
                        <button>View Pricing</button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Budget Templates Section */}
                <section id="resources-section" className="resources">
                  <h2>Budget Templates</h2>
                  <p>
                    Download our easy-to-use budget templates to plan your finances effectively.
                  </p>
                  <div className="template-container">
                    <div className="template-card">
                      <h3>Monthly Budget Template</h3>
                      <p>Organize your monthly finances with this detailed Excel sheet.</p>
                      <div className="iframe-container">
                        <a
                          href="" // Add the link to the OneDrive or embedded resource
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

                    <div className="template-card">
                      <h3>Weekly Budget Template</h3>
                      <p>Plan your weekly expenses to stay on top of your financial goals.</p>
                      <div className="iframe-container">
                        <a
                          href="" // Add the link to the OneDrive or embedded resource
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
                </section>
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>404: Page Not Found</h1>
                <p>The page you are looking for doesn’t exist.</p>
                <Link to="/">
                  <button>Go Back to Home</button>
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Sidebar for Submit Form */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <h2>Request Budget Templates</h2>
          <form className="submit-form">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" required />
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Phone Number:</label>
            <input type="tel" placeholder="Enter your phone number" required />
            <label>Select Template:</label>
            <select>
              <option value="Monthly Budget">Monthly Budget</option>
              <option value="Weekly Budget">Weekly Budget</option>
            </select>
            <button type="submit">Submit</button>
          </form>
          <button className="close-button" onClick={toggleSidebar}>
            Close
          </button>
        </div>
      </div>

      {/* Button to Open Sidebar */}
      <button className="open-sidebar-button" onClick={toggleSidebar}>
        Request Templates
      </button>

      <Footer />
    </Router>
  );
};

export default App;
