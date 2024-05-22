import React, { useEffect, useState, useRef } from 'react';
import './Twistycarousal.css'; // Make sure to include the styles in a separate CSS file

const Twistycarousel = () => {
  const n = 6;
  const [current, setCurrent] = useState(0);
  const circleContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const texts = [
    'Text for item 1',
    'Text for item 2',
    'Text for item 3',
    'Text for item 4',
    'Text for item 5',
    'Text for item 6',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionPosition = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight * .6;
      const isComponentInView = scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionRef.current.offsetHeight;

      if (isComponentInView) {
        const scrollIndex = Math.floor((scrollPosition - sectionPosition) / (window.innerHeight / 4)) % n;
        setCurrent(scrollIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [n]);

  useEffect(() => {
    const angle = 360 / n;
    const wC = circleContainerRef.current.clientWidth;

    for (let i = 0; i < n; i++) {
      const dist = Math.round(630 + angle * i - angle * current);
      const item = document.querySelector(`.circle-container > .item:nth-of-type(${i + 1})`);
      item.style.transform = `rotate(${dist}deg) translate(${wC / 2}px) rotate(-${dist}deg)`;
    }
  }, [current, n]);

  return (
    <section ref={sectionRef} className='section'>
      <div className="container1">
        <div className="text-container">
          <div className="text-box">
            <h1>Carousel Heading</h1>
            <p>{texts[current]}</p>
          </div>
        </div>
        <div className="col">
          <ul className="circle-container" ref={circleContainerRef}>
            {[...Array(n)].map((_, index) => (
              <li key={index} className="item">
                <a
                  href="#"
                  className={current === index ? 'active1' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrent(index);
                  }}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Twistycarousel;
