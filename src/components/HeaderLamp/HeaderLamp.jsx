import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeaderLamp.css';

gsap.registerPlugin(ScrollTrigger);

const HeaderLamp = ({ title }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = Array.from(titleRef.current.querySelectorAll('.letter'));

    gsap.fromTo(
      letters,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.03,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <h1 className="animated-title" ref={titleRef}>
      {title.split('').map((char, index) => (
        <span key={index} className="letter">
          {char}
        </span>
      ))}
    </h1>
  );
};

export default HeaderLamp;
