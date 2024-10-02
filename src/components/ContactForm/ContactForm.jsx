import React, { useRef, useState } from 'react';
import Logo from "../../assets/Logo.png";
import './ContactForm.css';
import { useNavigate, Link } from 'react-router-dom';

const ContactForm = () => {
    const form = useRef();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="footer-container">
            {/* <div className="contact-section">
                <div className="form-container">
                    <h2 className="heading">Write to us in case of any query</h2>
                    <form className="form" onSubmit={sendEmail} ref={form}>
                        <label for="name">Name
                            <input type="text" name="name" placeholder="Name" className="input" required /></label>
                        <label for="email">Email
                            <input type="email" name="email" placeholder="Email" className="input" required /></label>
                        <label for="phno">Phone No
                            <input type="text" name="phno" placeholder="Phone Number" className="input" required /></label>
                        <label for="msg">Message
                            <textarea placeholder="Message" name="msg" className="textarea" required></textarea></label>
                        <button type="submit" className="button">Submit</button>
                    </form>
                </div>
            </div> */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="logo-contact">
                        <div className="logo-container">
                            <img src={Logo} alt="Rhyno Logo" className="logoF" />
                        </div>
                        <div className="contact-container">
                            <p className='phoneNo'><i class="fa-solid fa-headset mr-2"></i> +91 9023 9875 28</p>
                            <p className='email'><i class="fa-regular fa-envelope mr-2"></i> info@Rhyno.in</p>
                        </div>
                        <div className="address-container">
                            <p>Rhyno Wheels Private Limited, 05, Jay Industrial Park, Nana Chiloda Ring Road Circle,  Muthiya, Ahmedabad, Gujarat, India. 382330.
                            </p>
                        </div>
                    </div>
                    <div className="company-links">
                        <p>Company</p>
                        <ul className="link-list">
                            <li><Link to="/Contact-us" className="link" onClick={handleClick}>Contact US</Link></li>
                            <li><Link to="/Careers" className="link" onClick={handleClick}>Careers</Link></li>
                            <li><Link to="/Privacy" className="link" onClick={handleClick}>Privacy Policy</Link></li>
                            <li><Link to="/Rentals" className="link" onClick={handleClick}>Rentals</Link></li>
                            <li><Link to="/Refund" className="link" onClick={handleClick}>Refund Policy</Link></li>
                            <li><Link to="/Terms" className="link" onClick={handleClick}>Terms of Service</Link></li>
                            <li><Link to="/Rentals" className="link" onClick={handleClick}>Media</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 All Rights Reserved</p>
                    <ul className="footer-links">
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default ContactForm;
