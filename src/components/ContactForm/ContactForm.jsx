import React, { useRef, useState } from 'react';
import Logo from "../../assets/Logo.png"
import './ContactForm.css';
import { useNavigate, Link } from 'react-router-dom';

import emailjs from 'emailjs-com'

const ContactForm = () => {
    const form = useRef();

 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6tppud', 'template_syhmdrq', form.current, 'dlfvxaLtJUSBW3FmH')
    e.target.reset()
    setLoading(true);

    // Simulate a loading state for 2 seconds
    setTimeout(() => {
      setLoading(false);
      navigate("/SE03");
    }, 2000);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

    return (
        <div className="footer-container">
            <div className="contact-section">
                <div className="form-container">
                    <h2 className="heading">Write to us in case of any query</h2>
                    <form className="form" onSubmit={sendEmail} ref={form}>
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Name" className="input" required/>
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Email" className="input" required/>
                        <label for="phno">Phone No.</label>
                        <input type="text" name="phno" placeholder="Phone Number" className="input" required/>
                        <label for="msg">Message</label>
                        <textarea placeholder="Message" name="msg" className="textarea" required></textarea>
                        <button type="submit" className="button">Submit</button>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="logo-contact">
                        <div className="logo-container">
                            <img src={Logo} alt="Rhyno Logo" className="logoF" />
                        </div>
                        <div className="contact-container">
                            {/* <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e125e873c698e0623af1c1449a551f7511863aba5f08f9820a82dfbeb791b3e?"
                                className="aspect-square"
                            /> */}
                            <p className='phoneNo'>📞 +91 9023 9875 28</p>

                            {/* <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb69222e5d61cc9af49db599119f82cf468dabe5fcbe71dc5eae2b9cfdf0db3?"
                                className="aspect-square"
                            /> */}
                            <p className='email'>✉️ info@Rhyno.in</p>
                        </div>
                        <div className="address-container">
                            <p>Rhyno Wheels Private Limited,<br />
                                UG Hostel Gate 2, Behind PDEU, Raisan,<br />
                                Gandhinagar, Gujarat
                            </p>
                        </div>
                    </div>
                    <div className="company-links">
                        <p>Company</p>
                        <ul className="link-list">
                            <li><Link to="/AboutUs" className="link" onClick={handleClick}>About Us</Link></li>
                            <li><Link to="/Careers" className="link" onClick={handleClick}>Careers</Link></li>
                            <li><Link to="#faqs" className="link" onClick={handleClick}>FAQs</Link></li>
                            <li><Link to="#teams" className="link" onClick={handleClick}>Teams</Link></li>
                            <li><Link to="/ContactUs" className="link" onClick={handleClick}>Contact Us</Link></li>
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
                        <li><Link to="/Privacy" className="footer-link" onClick={handleClick}>Privacy Policy</Link></li>
                        <li><Link to="#terms-of-use" className="footer-link" onClick={handleClick}>Terms of Use</Link></li>
                        <li><Link to="#sales-and-refunds" className="footer-link" onClick={handleClick}>Sales and Refunds</Link></li>
                        <li><Link to="#legal" className="footer-link" onClick={handleClick}>Legal</Link></li>
                        <li><Link to="#site-map" className="footer-link" onClick={handleClick}>Site Map</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default ContactForm;
