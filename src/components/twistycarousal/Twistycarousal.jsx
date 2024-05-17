import React, { useEffect, useState, useRef } from 'react';
import './Twistycarousal.css'; // Make sure to include the styles in a separate CSS file

const Twistycarousel = () => {
  const n = 6;
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const circleContainerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAuto) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === n - 1 ? 0 : prev + 1));
      }, 1500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAuto]);

  useEffect(() => {
    const angle = 360 / n;
    const wC = circleContainerRef.current.clientWidth;

    for (let i = 0; i < n; i++) {
      const dist = Math.round(630 + angle * i - angle * current);
      const item = document.querySelector(`.circle-container > .item:nth-of-type(${i + 1})`);
      item.style.transform = `rotate(${dist}deg) translate(${wC / 2}px) rotate(-${dist}deg)`;
    }
  }, [current]);

  const handleClick = (index) => {
    setIsAuto(false);
    setCurrent(index);
  };

  return (
    <section>
      <div className="container1">
        <div className="col">
          <ul className="circle-container" ref={circleContainerRef}>
            {[...Array(n)].map((_, index) => (
              <li key={index} className="item">
                <a
                  href="#"
                  className={current === index ? 'active1' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(index);
                  }}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <ul className="number">
            {[...Array(n)].map((_, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={current === index ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(index);
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
