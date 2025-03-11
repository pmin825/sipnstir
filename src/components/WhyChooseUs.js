import React from "react";
import "./WhyChooseUs.css";
import bartenderImage from "../assets/images/laure-noverraz-Jtv-kTcayDw-unsplash.jpg"; // Adjust path as needed

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      {/* Left Column - Text */}
      <div className="why-text">
        <h2>Why Choose Us?</h2>
        <p>
          At <strong>Sip N' Stir</strong>, we take your event to the next level with **professional, licensed, and insured** bartending services.
        </p>
        <ul>
          <li>✅ Fully **licensed & insured** for your peace of mind</li>
          <li>✅ **Friendly & experienced** bartenders who bring the party to life</li>
          <li>✅ We **customize your drink menu** & work with you to plan the perfect bar experience</li>
          <li>✅ **Reliable & professional** service—no stress, just great drinks!</li>
        </ul>
        <p>
          Let’s make your event **unforgettable**! 🍸  
          <a href="#contact" className="contact-btn">Book Us Today</a>
        </p>
      </div>

      {/* Right Column - Image */}
      <div className="why-image">
        <img src={bartenderImage} alt="Professional Bartender Service" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
