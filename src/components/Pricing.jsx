import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <div className="pricing-table">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p>Perfect for beginners</p>
          <p>KES 1,000/month</p>
        </div>
        <div className="pricing-card">
          <h2>Standard Plan</h2>
          <p>For those who need extra features</p>
          <p>KES 3,000/month</p>
        </div>
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p>Advanced financial management</p>
          <p>KES 5,000/month</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
