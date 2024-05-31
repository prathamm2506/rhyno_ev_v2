import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false); // New state for products dropdown

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setNavOpen(false);
  };

  const openNav = () => {
    setNavOpen(true);
    setSearchOpen(false);
  };

  const closeNav = () => {
    setNavOpen(false);
    setProductsOpen(false); // Close products dropdown when the navigation closes
  };

  const toggleProducts = () => {
    setProductsOpen(!isProductsOpen);
  };

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <Link to="/" onClick={closeNavbar}>
        <img src={Logo} alt="" className="logo" />
      </Link>
      <ul className="nav-linksss">
        <i className="fa-solid fa-xmark navCloseBtn" onClick={closeNav} id="nav-toggler"></i>
        <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
        <li
          className="dropdown-wrapper"
          onMouseEnter={toggleProducts}
          onMouseLeave={toggleProducts}
        >
          <a href="#" className="dropdown-togglele">Products <i className={`uil ${isProductsOpen ? 'uil-angle-up' : 'uil-angle-down'}`}></i></a>
          {/* Products Dropdown */}
          {isProductsOpen && (
            <ul className="dropdown">
              <li>
                <ScrollLink to="ourProducts" smooth={true} duration={500} onClick={closeNav}>
                  <Link to='/SE03' onClick={closeNavbar}>SE03</Link>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="ourProducts" smooth={true} duration={500} onClick={closeNav}>
                <Link to='/SE03MAX' onClick={closeNavbar}>SE03 MAX</Link>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="ourProducts" smooth={true} duration={500} onClick={closeNav}>
                <Link to='/SE03LITE' onClick={closeNavbar}>SE03 LITE</Link>
                </ScrollLink>
              </li>
            </ul>
          )}
        </li>
        <li><a href="/Compare" onClick={closeNavbar}>Compare</a></li>
        <li><Link to='/AboutUs' onClick={closeNavbar}>About Us</Link></li>
        <li><Link to='/ContactUs' onClick={closeNavbar}>Contact Us</Link></li>
      </ul>

      <button className="search-icon btn btn-nav" id="searchIcon"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
      <i className="fas fa-bars navOpenBtn" onClick={openNav} id="nav-toggler"></i>
    </nav>
  );
};

export default Navbar;
