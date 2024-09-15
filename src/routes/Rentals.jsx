// import React from 'react'
// import RentalsPage from '../components/rentals/RentalsPage'
// import BuyNow from '../components/buynow/BuyNow'
// import ContactForm from '../components/ContactNew/ContactForm'

// const Rentals = () => {
//   return (
//     <div>
//       <RentalsPage/>
//       <BuyNow/>
//       <ContactForm/>
//     </div>
//   )
// }

// export default Rentals
import React, { useState, useRef, useEffect } from 'react';
import img1 from '../assets/about.png';
import { Link } from 'react-router-dom';
// import './Aboutus.css';

const Rentals = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 bg-white text-black mt-20">
      <div className="lg:w-7/12 lg:pl-10 space-y-4 md:pl-0">
        <h1 className="text-4xl font-bold tracking-wide">Rentals</h1>
        <p className="text-lg leading-relaxed text-justify">
        Our flexible rental plans let you experience the thrill for a week or a month. Stop by one of our dealerships to get your ride today!
        </p>
        <p className="text-lg leading-relaxed text-justify">
        We're also offering hourly rentals at PDEU, Gandhinagar. Just download our app and book your ride.
        </p>
        <p className="text-lg leading-relaxed text-justify">Want to bring Rhyno to your campus? <Link className='text-gray-400' to="/Contact-us">Write us</Link>  to request a Rhyno hourly rental service.
        Want to start your own rental business? <Link className='text-gray-400' to="/Contact-us">Contact us</Link> to become a partner through the franchise today!
        </p>

        {/* <div className="space-y-4">
          <Accordion
            title="What is one-week service commitment?"
            content="Due to OEM negligence regarding service, many folks like you have had a hard time. But not you. We value your time. We have engineered Rhyno for simplicity. Even complex repairs such as battery or motor are resolved in seven working days."
            index={0}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="What if you don’t deliver on your commitment?"
            content="Running a sane, sustainable business is part of our commitment to you. We are not in the circus of valuations and hyper-expansion. We chose to go slow and profitable. Your satisfaction will lead us to more sales through referrals. "
            index={1}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="Can a local mechanic repair my Rhyno?"
            content="Yes. Even you can! We’ve got you covered with a comprehensive service and repair manual. Additionally, our YouTube channel has all the tutorial videos about service and repairs. "
            index={3}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        </div> */}
      </div>

      <div className="lg:w-4/12 flex justify-center md:w-full">
        <img
          src={img1}
          alt="Electric Scooter"
          className="lg:max-w-md h-auto shadow-lg"
        />
      </div>
    </div>
  );
};

const Accordion = ({ title, content, index, activeIndex, toggleAccordion }) => {
  const isActive = index === activeIndex;
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div className="border-class">
      <button
        className="flex justify-between items-center w-full py-3 text-lg font-semibold text-left focus:outline-none"
        onClick={() => toggleAccordion(index)}
        style={{ outline: 'none' }} // Inline style to ensure no outline
      >
        <span>{title}</span>
        <span>{isActive ? '-' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-height duration-300 ease-in-out"
      >
        <div className="pb-3 text-black">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Rentals;