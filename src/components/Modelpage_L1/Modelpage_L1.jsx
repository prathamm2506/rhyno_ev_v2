import React, { useState } from 'react';
import './Modelpage_L1.css';
import IMG1 from '../../assets/yellow.webp';
import IMG2 from '../../assets/brown.webp';
import IMG3 from '../../assets/pink.webp';
import IMG4 from '../../assets/white.webp';
import IMG5 from '../../assets/darkblue.webp';
import IMG6 from '../../assets/silver.webp';
import IMG7 from '../../assets/black.webp';
import IMG8 from '../../assets/lightblue.webp';
import IMG9 from '../../assets/red.webp';
import IMG10 from '../../assets/violet.webp';

const Modelpage_L1 = ({startState}) => {
  const items = [
    { backgroundColor: '#d7c387', image: `${IMG1}` },
    { backgroundColor: '#a08467', image: `${IMG2}` },
    { backgroundColor: '#7e5070', image: `${IMG3}` },
    { backgroundColor: '#deddd6', image: `${IMG4}` },
    { backgroundColor: '#6471b9', image: `${IMG5}` },
    { backgroundColor: '#737373', image: `${IMG6}` },
    { backgroundColor: '#282424', image: `${IMG7}` },
    { backgroundColor: '#83afc7', image: `${IMG8}` },
    { backgroundColor: '#7c3433', image: `${IMG9}` },
    { backgroundColor: '#886ba7', image: `${IMG10}` },
  ];

  const [currentItem, setCurrentItem] = useState(startState);
  const [nextItem, setNextItem] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // Track which button is active
  const [buttonTransform, setButtonTransform] = useState({}); // Store button transform styles

  const handleColorClick = (index, event) => {
    if (index !== currentItem) {
      const button = event.target;
      const rect = button.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const translateX = centerX - rect.left - rect.width / 2;
      const translateY = centerY - rect.top - rect.height / 2;

      setButtonTransform({
        [index]: {
          transform: `translate(${translateX}px, ${translateY}px) scale(1.5)`,
        },
      });

      setNextItem(index);
      setIsDisabled(true);
      setActiveButton(index); // Set the clicked button as active
      setTimeout(() => {
        setIsDisabled(false);
        setActiveButton(null); // Reset active button after animation
        setButtonTransform({}); // Reset transform after animation
      }, 2000); 
    }
  };

  const handleAnimationEnd = () => {
    setCurrentItem(nextItem);
    setNextItem(null);
  };

  return (
    <section className="carouselMD">
      <div className="listMD">
        <div className="rhyno-text">RHYNO</div>
        {items.map((item, index) => (
          <article
            key={index}
            className={`itemMD ${index === currentItem ? 'active' : ''} ${index === nextItem ? 'next' : ''}`}
            style={{ backgroundColor: item.backgroundColor }}
            onAnimationEnd={index === nextItem ? handleAnimationEnd : null}
          >
            <figure className="imageMD">
              <img src={item.image} alt={`Product ${index + 1}`} />
            </figure>
          </article>
        ))}
      </div>
      <div className="color-buttons">
        {items.map((item, index) => (
          <button
            key={index}
            className={`${activeButton === index ? 'animate-button' : ''}`}
            style={{
              backgroundColor: item.backgroundColor,
              ...buttonTransform[index],
            }}
            onClick={(event) => handleColorClick(index, event)}
            disabled={isDisabled}
          />
        ))}
      </div>
    </section>
  );
};

export default Modelpage_L1;
