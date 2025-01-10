import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <p className="pricing-description">
        Choose a plan that fits your financial needs and start your journey toward better financial management.
      </p>
      <div className="pricing-table">
        {/* Basic Plan */}
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p className="pricing-amount">KES 1,000/month</p>
          <ul className="features">
            <li>Access to basic templates</li>
            <li>Email support</li>
            <li>Monthly financial insights</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>

        {/* Standard Plan */}
        <div className="pricing-card">
          <h2>Standard Plan</h2>
          <p className="pricing-amount">KES 3,000/month</p>
          <ul className="features">
            <li>Access to all templates</li>
            <li>Priority email support</li>
            <li>Weekly financial insights</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p className="pricing-amount">KES 5,000/month</p>
          <ul className="features">
            <li>All Standard Plan features</li>
            <li>One-on-one consultations</li>
            <li>Custom financial strategies</li>
          </ul>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
