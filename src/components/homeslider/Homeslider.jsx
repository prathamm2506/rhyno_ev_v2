import React, { useState } from 'react';
import './Homeslider.css'; // Assuming you have the CSS file in the same directory
import IMG1 from '../../assets/product8.png'

const Homeslider = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  const images = [
    IMG1,
    IMG1,
    IMG1,
    IMG1,
    IMG1,
  ];

  return (
    <>
      <header>
        <a href="#" className="brand">Space</a>
        <div className={`menu-btn ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        <div className={`navigation ${menuActive ? 'active' : ''}`}>
          <div className="navigation-items">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Explore</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </header>

      <section className="home">
        {images.map((image, index) => (
          <img
            key={index}
            decoding="async"
            className={`img-slide ${activeSlide === index ? 'active' : ''}`}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}

        <div className={`content ${activeSlide === 0 ? 'active' : ''}`}>
          <h1>USSF-44.<br/><span>Mission</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>
        <div className={`content ${activeSlide === 1 ? 'active' : ''}`}>
          <h1>STARSHIP UPDATE.<br/><span>Rocket</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>
        <div className={`content ${activeSlide === 2 ? 'active' : ''}`}>
          <h1>INTELSAT.<br/><span>G-31MISSION</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>
        <div className={`content ${activeSlide === 3 ? 'active' : ''}`}>
          <h1>NASA ASTRONAUTS.<br/><span>THE MOON</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>
        <div className={`content ${activeSlide === 4 ? 'active' : ''}`}>
          <h1>Space Travel.<br/><span>Rocket</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>

        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        
        <div className="slider-navigation">
          {images.map((_, index) => (
            <div
              key={index}
              className={`nav-btn ${activeSlide === index ? 'active' : ''}`}
              onClick={() => changeSlide(index)}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Homeslider;
