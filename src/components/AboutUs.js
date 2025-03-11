import React from "react";
import "./AboutUs.css"; // Make sure to create this CSS file
import drinkImage from  "../assets/images/timothe-durand-iZKqt2sfDo8-unsplash.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Left Column - Image */}
      <div className="about-image">
        <img src={drinkImage} alt="Mobile Bartending Service" />
      </div>

      {/* Right Column - Description */}
      <div className="about-text">
        <h2>About Sip N' Stir</h2>
        <p>
          At <strong>Sip N' Stir</strong>, we bring the **bar experience to you!**  
          Our professional **mobile bartending service** specializes in crafting delicious cocktails, 
          providing top-notch service, and elevating any event—from **weddings and private parties** 
          to **corporate gatherings and special occasions**.  
        </p>
        <p>
          We provide a **fully customized bar setup**, including signature drinks, themed cocktails, and expert bartenders 
          who know how to keep the party going. Whether it's an intimate gathering or a large-scale event, 
          we've got your drinks covered! 🍸
        </p>
        <p>
          Let us handle the drinks so you can focus on celebrating! 🎉  
          <a href="#contact" className="contact-btn">Get in Touch</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
