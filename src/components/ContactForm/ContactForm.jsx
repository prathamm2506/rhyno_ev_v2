import React from 'react';
import Logo from "../../assets/Logo.png"
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="footer-container">
            <div className="contact-section">
                <div className="form-container">
                    <h2 className="heading">Write to us in case of any query</h2>
                    <form className="form">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Name" className="input" />
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Email" className="input" />
                        <label for="phno">Phone No.</label>
                        <input type="text" name="phno" placeholder="Phone Number" className="input" />
                        <label for="msg">Message</label>
                        <textarea placeholder="Message" name="msg" className="textarea"></textarea>
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
                            <li><a href="/AboutUs" className="link">About Us</a></li>
                            <li><a href="/Careers" className="link">Careers</a></li>
                            <li><a href="#faqs" className="link">FAQs</a></li>
                            <li><a href="#teams" className="link">Teams</a></li>
                            <li><a href="/ContactUs" className="link">Contact Us</a></li>
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
                        <li><a href="/Privacy" className="footer-link">Privacy Policy</a></li>
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
