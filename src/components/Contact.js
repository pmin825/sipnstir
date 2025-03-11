import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    message: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We will get back to you soon.");
    setFormData({ name: "", phone: "", email: "", eventDate: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          We'd love to hear from you! Fill out the form below, and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Event Date</label>
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Your Question/Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
