import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resources from "./components/Resources";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
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
                <h2>Take Control of Your Finances</h2>
                <p>Your journey to financial independence starts here. Choose the right tools and guidance to succeed.</p>
                <Link to="/pricing">
                  <button>Explore Pricing</button>
                </Link>
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
