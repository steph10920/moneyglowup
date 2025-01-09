import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
// Import the uploaded images
import Image1 from "./assets/images/image1.jpg";
import Image2 from "./assets/images/image2.jpg";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <section id="hero" className="hero">
                <div className="hero-content">
                  <div className="hero-text">
                    <h2>Take Control of Your Finances</h2>
                    <p>
                      Your journey to financial independence starts here. Choose
                      the right tools and guidance to succeed.
                    </p>
                    <Link to="/pricing">
                      <button>Explore Pricing</button>
                    </Link>
                  </div>
                  <div className="hero-images">
                    <img
                      src={Image1}
                      alt="Financial Growth"
                      className="hero-image"
                    />
                    <img
                      src={Image2}
                      alt="Investment Opportunities"
                      className="hero-image"
                    />
                  </div>
                </div>
              </section>
            }
          />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/setting-smart-goals"
            element={
              <section id="setting-smart-goals">
                <h3>Setting SMART Financial Goals</h3>
                <p>
                  Learn how to set Specific, Measurable, Achievable, Relevant,
                  and Time-bound financial goals.
                </p>
              </section>
            }
          />
          <Route
            path="/budgeting"
            element={
              <section id="budgeting">
                <h3>Budgeting</h3>
                <p>Discover effective budgeting strategies tailored to your needs.</p>
              </section>
            }
          />
          <Route
            path="/saving"
            element={
              <section id="saving">
                <h3>Saving</h3>
                <p>Understand the importance of saving and how to maximize your savings.</p>
              </section>
            }
          />
          <Route
            path="/investing"
            element={
              <section id="investing">
                <h3>Investing</h3>
                <p>Explore investment opportunities to grow your wealth.</p>
              </section>
            }
          />
          <Route
            path="/wealth-creation"
            element={
              <section id="wealth-creation">
                <h3>Wealth Creation</h3>
                <p>Learn strategies to create and sustain wealth over time.</p>
              </section>
            }
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
