import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section id="hero" className="hero">
          <h2>Take Control of Your Finances</h2>
          <p>Your journey to financial independence starts here. Choose the right tools and guidance to succeed.</p>
          <button>Select Your 2025 Budgeting Template (KES 300)</button>
        </section>
        <section id="setting-smart-goals">
          <h3>Setting SMART Financial Goals</h3>
          <p>Learn how to set Specific, Measurable, Achievable, Relevant, and Time-bound financial goals.</p>
        </section>
        <section id="budgeting">
          <h3>Budgeting</h3>
          <p>Discover effective budgeting strategies tailored to your needs.</p>
        </section>
        <section id="saving">
          <h3>Saving</h3>
          <p>Understand the importance of saving and how to maximize your savings.</p>
        </section>
        <section id="investing">
          <h3>Investing</h3>
          <p>Explore investment opportunities to grow your wealth.</p>
        </section>
        <section id="wealth-creation">
          <h3>Wealth Creation</h3>
          <p>Learn strategies to create and sustain wealth over time.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
