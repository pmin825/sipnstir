import React from "react";
import "./WhatWeOffer.css"; // Import CSS file for styling

export default function WhatWeOffer() {
  return (
    <section className="offer-section">
      <div className="offer-container">
        <h2>What We Offer</h2>
        <p className="offer-subtitle">
          **Experience the Art of Handcrafted Mobile Craft Cocktails** 🍸
        </p>
        <ul className="offer-list">
          <li>🍹 **Premium Handcrafted Cocktails** – Fresh ingredients & unique flavors.</li>
          <li>🚚 **Mobile Bar Service** – We bring the experience to you!</li>
          <li>🎨 **Custom Drink Menus** – Tailored cocktails for your event.</li>
          <li>🍾 **Professional Bartenders** – Friendly, skilled, and engaging staff.</li>
          <li>✨ **Luxury Bar Setup** – Elegant presentation with high-end tools.</li>
        </ul>
        <p className="offer-footer">
          Elevate your event with **Sip N' Stir** – where cocktails meet craft!  
          <br />
          <a href="/contact" className="btn-booking">Book Us Today</a>
        </p>
      </div>
    </section>
  );
}
