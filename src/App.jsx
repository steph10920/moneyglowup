import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
// Import assets
import Image1 from "./assets/images/image1.jpg";
import Image2 from "./assets/images/image2.jpg";
import "./styles/App.css";

const App = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
                    <p>Empowering you to achieve financial independence and wealth creation.</p>
                    <div className="hero-buttons">
                      <button onClick={() => handleScrollToSection("solutions-section")}>
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
                      <img src={Image1} alt="Solutions" />
                      <h3>Solutions</h3>
                      <p>Discover actionable strategies to grow and manage your wealth.</p>
                      <Link to="/solutions">
                        <button>Learn More</button>
                      </Link>
                    </div>
                    <div className="feature-card">
                      <img src={Image2} alt="Resources" />
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

                {/* Testimonials Section */}
                <section id="testimonials-section" className="testimonials">
                  <h2>What Our Clients Say</h2>
                  <div className="testimonial-cards">
                    <div className="testimonial-card">
                      <p>"This platform transformed my financial habits. Highly recommended!"</p>
                      <span>- John Doe</span>
                    </div>
                    <div className="testimonial-card">
                      <p>"Thanks to their resources, I now have a clear financial roadmap."</p>
                      <span>- Jane Smith</span>
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
      <Footer />
    </Router>
  );
};

export default App;
