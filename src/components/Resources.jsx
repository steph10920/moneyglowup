import React, { useState } from "react";
import axios from "axios";
import ExcelIcon from "../assets/images/excel-icon.png";
import "../styles/Resources.css";

const Resources = () => {
  const [paidItems, setPaidItems] = useState([]); // Track paid items
  const backendURL = "https://moneyglowup-daraja.vercel.app/api/pay"; // Replace with your backend URL

  // Handle MPESA Payment
  const handlePayment = async (item) => {
    const phone = prompt("Enter your MPESA phone number (e.g., 2547XXXXXXXX):");

    // Validate the phone number format
    if (!phone || !/^2547\d{8}$/.test(phone)) {
      alert("Please enter a valid MPESA phone number starting with 2547.");
      return;
    }

    try {
      // Send payment request to the backend
      const response = await axios.post(backendURL, {
        phone,
        amount: item.price,
        item: item.title,
      });

      if (response.data.success) {
        alert("Payment successful! You can now download your file.");
        setPaidItems([...paidItems, item.title]); // Mark item as paid
      } else {
        alert(response.data.message || "Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error.response?.data || error.message);
      alert("Payment failed. Please check your connection and try again.");
    }
  };

  // Render the resource card
  const renderResourceCard = (title, description, filePath, price) => {
    const isPaid = paidItems.includes(title);

    return (
      <div className="template-card" key={title}>
        <div className="template-header">
          <img src={ExcelIcon} alt="Excel Icon" className="template-icon" />
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <p>
          <strong>Price:</strong> KES {price}
        </p>
        <div className="action-buttons">
          {isPaid ? (
            // If paid, allow downloading
            <a href={filePath} download className="download-button">
              Download
            </a>
          ) : (
            // Otherwise, show the purchase button
            <button
              className="purchase-button"
              onClick={() => handlePayment({ title, price, filePath })}
            >
              Purchase
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Explore our curated financial resources to empower your journey.</p>

      {/* Display resources */}
      <div className="template-container">
        {renderResourceCard(
          "Monthly Budget Template",
          "Organize your monthly finances with this easy-to-use Excel sheet.",
          "/files/Monthly budget.xlsx",
          1000
        )}
        {renderResourceCard(
          "Weekly Budget Template",
          "Plan your weekly expenses and stay on top of your finances.",
          "/files/Weekly Budget template.xlsx",
          300
        )}
      </div>
    </div>
  );
};

export default Resources;
