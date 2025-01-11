import React from "react";
import "../styles/Contact.css";
import FinanceCoachImage from "../assets/images/finance-coach.jpg"; // Ensure this path matches your file structure

const Contact = () => {
  return (
    <div className="contact">
      {/* About Us Section */}
      <div className="contact-about">
        {/* Image */}
        <div className="about-image">
          <img src={FinanceCoachImage} alt="CPA Brenda Atieno" />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>Welcome!</h2>
          <p>
            I’m dedicated to helping you take control of your finances and achieve the stability and
            confidence you deserve. Whether you're looking to get back on track, master budgeting,
            or simply need accountability to stay focused, I’m here to guide you every step of the way.
          </p>
          <p>
            Money may not be everything, but it impacts every part of your life—from your peace of
            mind to your future plans. That’s why I specialize in teaching practical financial
            strategies tailored to your needs, empowering you to make smarter money decisions and
            unlock your potential.
          </p>
          <p>
            It’s never too early or too late to take charge of your finances. Let’s work together
            to create a plan that fits your life and puts you on the path to financial freedom.
          </p>
          <p>
            <strong>CPA Brenda Atieno</strong>,<br />
            Finance Coach
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out via:</p>
        <ul>
          <li>
            Email: <a href="mailto:support@moneyglowup.com">support@moneyglowup.com</a>
          </li>
          <li>Phone: +254 700 123 456</li>
          <li>Address: Nairobi, Kenya</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
