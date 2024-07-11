import React from 'react';
import Logo from "../../assets/Logo.png"
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  return (
    <div className="container">
      <div className="contact-section">
        <div className="form-container">
          <h2 className="heading">Write to us in case of any query</h2>
          <form className="form">
            <input type="text" placeholder="Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="text" placeholder="Phone Number" className="input" />
            <textarea placeholder="Message" className="textarea"></textarea>
            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="logo-container">
            <img src={Logo} alt="Rhyno Logo" className="logoF" />
            <p className="tagline">Imagine. Initiate. Inspire.</p>
          </div>
          <div className="contact-info">
            <p>📞 +91 9023 9875 28</p>
            <p>✉️ info@Rhyno.in</p>
            <p>Rhyno Wheels Private Limited,<br />
              UG Hostel Gate 2, Behind PDEU, Raisan,<br />
              Gandhinagar, Gujarat
            </p>
          </div>
          <div className="company-links">
            <p>Company</p>
            <ul className="link-list">
              <li><a href="#about-us" className="link">About Us</a></li>
              <li><a href="#careers" className="link">Careers</a></li>
              <li><a href="#faqs" className="link">FAQs</a></li>
              <li><a href="#teams" className="link">Teams</a></li>
              <li><a href="#contact-us" className="link">Contact Us</a></li>
            </ul>
          </div>
          <div className="subscribe-section">
            <p>Subscribe</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Email" className="subscribe-input" />
              <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 All Rights Reserved</p>
          <ul className="footer-links">
            <li><a href="#privacy-policy" className="footer-link">Privacy Policy</a></li>
            <li><a href="#terms-of-use" className="footer-link">Terms of Use</a></li>
            <li><a href="#sales-and-refunds" className="footer-link">Sales and Refunds</a></li>
            <li><a href="#legal" className="footer-link">Legal</a></li>
            <li><a href="#site-map" className="footer-link">Site Map</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
