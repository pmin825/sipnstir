import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Our Packages</h2>
        <p className="services-subtitle">
          Choose the perfect **bartending package** for your event! 🍸
        </p>

        <div className="services-grid">
          {/* ✅ Package 1 - Standard */}
          <div className="service-card">
            <h3>🍹 Standard Package</h3>
            <p className="price">$299</p>
            <ul>
              <li>✔️ Professional Bartender</li>
              <li>✔️ 3 Signature Cocktails</li>
              <li>✔️ 3 Hours of Service</li>
              <li>✔️ Bar Setup & Cleanup</li>
              <li>✖️ Alcohol Not Included</li>
            </ul>
            <a href="/contact" className="btn-booking">Book Now</a>
          </div>

          {/* ✅ Package 2 - Premium */}
          <div className="service-card premium">
            <h3>✨ Premium Package</h3>
            <p className="price">$499</p>
            <ul>
              <li>✔️ 2 Professional Bartenders</li>
              <li>✔️ 5 Signature Cocktails</li>
              <li>✔️ 4 Hours of Service</li>
              <li>✔️ Mixers & Garnishes Included</li>
              <li>✖️ Alcohol Not Included</li>
            </ul>
            <a href="/contact" className="btn-booking">Book Now</a>
          </div>

          {/* ✅ Package 3 - VIP */}
          <div className="service-card vip">
            <h3>🥂 VIP Package</h3>
            <p className="price">$799</p>
            <ul>
              <li>✔️ 3 Professional Bartenders</li>
              <li>✔️ Unlimited Custom Cocktails</li>
              <li>✔️ 5 Hours of Service</li>
              <li>✔️ Full Bar Setup & Glassware</li>
              <li>✔️ Complimentary Mocktails</li>
            </ul>
            <a href="/contact" className="btn-booking">Book Now</a>
          </div>
        </div>

        <p className="services-footer">
          Need something custom? Contact us for a **personalized quote!**  
          <br />
          <a href="/contact" className="btn-custom">Get a Custom Quote</a>
        </p>
      </div>
    </section>
  );
}
