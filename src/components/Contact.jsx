import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out via:</p>
      <ul>
        <li>Email: <a href="mailto:support@moneyglowup.com">support@moneyglowup.com</a></li>
        <li>Phone: +254 700 123 456</li>
        <li>Address: Nairobi, Kenya</li>
      </ul>
    </div>
  );
};

export default Contact;
