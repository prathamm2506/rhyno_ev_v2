import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import Logo from "../../assets/Logo.png";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.fromTo('.nav', {
      delay: 1,
      duration: 2,
      y: "-100%",
      opacity: 0,
      ease: 'power2.out'
    },
      {
        y: 0,
        opacity: 1,
        ease: 'power4.out'
      })
    .fromTo('.nav-linksss li', {
      duration: 0.1,
      y: "-30%",
      opacity: 0,
      scale: 0.5,
      ease: 'power4.out',
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: 'power4.out',
      stagger: {
        amount: 1,
      }
    });
  }, []);

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
    <nav className={`nav ${isSearchOpen ? 'openSearch' : ''} ${isNavOpen ? 'openNav' : ''}`}>
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>
      <ul className="nav-linksss">
        <i className="fa-solid fa-xmark navCloseBtn" onClick={closeNav} id="nav-toggler"></i>
        <li><Link to="/">Home</Link></li>
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
                  SE03
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="ourProducts" smooth={true} duration={500} onClick={closeNav}>
                  SE03 MAX
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="ourProducts" smooth={true} duration={500} onClick={closeNav}>
                  SE03 LITE
                </ScrollLink>
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/Compare">Compare</Link></li>
        <li><Link to='/AboutUs'>About Us</Link></li>
        <li><Link to='/ContactUs'>Contact Us</Link></li>
      </ul>

      <button className="search-icon btn btn-nav" id="searchIcon"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
      <i className="fas fa-bars navOpenBtn" onClick={openNav} id="nav-toggler"></i>
    </nav>
  );
};

export default Navbar;
