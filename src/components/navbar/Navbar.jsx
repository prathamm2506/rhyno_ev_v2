import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file
import Logo from "../../assets/Logo.png";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

  // const tl = gsap.timeline();
  // useGSAP(() => {
  //   tl.fromTo('.nav', {
  //     delay: 1,
  //     duration: 2,
  //     y: "-100%",
  //     opacity: 0,
  //     ease: 'power2.out'
  //   },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'power4.out'
  //     })
  //   .fromTo('.nav-linksss li', {
  //     duration: 0.1,
  //     y: "-30%",
  //     opacity: 0,
  //     scale: 0.5,
  //     ease: 'power4.out',
  //   },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     scale: 1,
  //     ease: 'power4.out',
  //     stagger: {
  //       amount: 1,
  //     }
  //   });
  // }, []);

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false); // New state for products dropdown

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

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

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.btn').classList.add('animate');
    }, 1375);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.nav').classList.add('animate');
      setTimeout(() => {
        document.querySelector('.logo').classList.add('animate');
      }, 300);
      setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-linksss li');
        navLinks.forEach((link, index) => {
          setTimeout(() => {
            link.classList.add('animate');
          }, (index + 1) * 180);
        });
      }, 350)
    },0);
  }, []);

  return (
    <nav className={`nav ${isSearchOpen ? 'openSearch' : ''} ${isNavOpen ? 'openNav' : ''}`}>
      <Link to="/">
        <img src={Logo} alt="" className="logo" onClick={closeNav} />
      </Link>
      <ul className="nav-linksss">
        <i className="fa-solid fa-xmark navCloseBtn" onClick={closeNav} id="nav-toggler"></i>
        <li><Link to="/" onClick={closeNav}>Home</Link></li>
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
                <Link to="/SE03" smooth={true} duration={500} onClick={() => { closeNav(); handleClick(); }}>
                  SE03
                </Link>
              </li>
              <li>
                <Link to="/SE03MAX" smooth={true} duration={500} onClick={() => { closeNav(); handleClick(); }}>
                  SE03 MAX
                </Link>
              </li>
              <li>
                <Link to="/SE03LITE" smooth={true} duration={500} onClick={() => { closeNav(); handleClick(); }}>
                  SE03 LITE
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/Compare" onClick={() => { closeNav(); handleClick(); }}>Compare</Link></li>
        <li><Link to='/AboutUs' onClick={() => { closeNav(); handleClick(); }}>About Us</Link></li>
        <li><Link to='/ContactUs' onClick={() => { closeNav(); handleClick(); }}>Contact Us</Link></li>
      </ul>

      <button className="search-icon btn btn-nav" id="searchIcon"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
      <i className="fas fa-bars navOpenBtn" onClick={openNav} id="nav-toggler"></i>
    </nav>
  );
};

export default Navbar;
