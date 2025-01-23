import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    template: "",
    phone: "",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, template, phone } = formData;

    // Replace these with your EmailJS credentials
    const serviceID = "service_btrc3kb";
    const templateID = "template_2xu5rld";
    const userID = "-W_tLO5PFEBi-n2er";

    const templateParams = {
      name,
      email,
      template,
      phone,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert("Your message has been sent successfully!");
        console.log("Success:", response.status, response.text);
      })
      .catch((error) => {
        alert("Failed to send the message. Please try again later.");
        console.error("Error:", error);
      });

    // Reset the form
    setFormData({
      name: "",
      email: "",
      template: "",
      phone: "",
    });

    // Close the sidebar
    setSidebarOpen(false);
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
                          href="https://1drv.ms/x/s!example_link"
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
                          href="https://1drv.ms/x/s!example_link"
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
          <form className="submit-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br></br>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br></br>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <br></br>
            <label>Select Template:</label>
            <select
              name="template"
              value={formData.template}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Template --</option>
              <option value="Monthly Budget">Monthly Budget</option>
              <option value="Weekly Budget">Weekly Budget</option>
            </select>
            <br></br>
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
