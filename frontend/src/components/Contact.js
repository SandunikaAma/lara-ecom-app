import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://13.127.78.245:3007/api/contact/send', formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          {submitted && <p className="success-message">Message sent successfully!</p>}
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message:</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Stores</h3>
          <p>📍 Colombo - 123 Fashion Rd</p>
          <p>📍 Malabe - 456 Style Street</p>
          <p>📍 Dehiwala - 789 Glamour Lane</p>
          <h3>Call Us</h3>
          <p>📞 +94 11 234 5678</p>
          <h3>Email Us</h3>
          <p>✉️ contact@lara.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
