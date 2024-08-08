import React, { useState } from 'react';
import img1 from '../../assets/about.png'

const Aboutus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 bg-white text-black">
      <div className="lg:w-7/12 space-y-4">
        <h1 className="text-4xl font-bold tracking-wide">ABOUT US</h1>
        <p className="text-lg leading-relaxed">
          Established In 2019 By An Automotive Engineer With A Vision For
          Sustainable And Robust Mobility Solutions, RHYNO EV Is Not Just A
          Company; It's A Collective Effort Of A Dynamic Team Of Young
          Individuals Passionately Driving Innovation In The Electric Vehicle
          Industry. We Believe In Engineering Solutions That Solve Problems.
        </p>
        <p className="text-lg leading-relaxed">
          With Our First Product, We've Taken A Bold Step To Create Something
          More Than Just A Vehicle; It's A Unique Experience Of Elegance,
          Comfort, And Style, Addressing The Pitfalls Of Conventional Electric
          Scooters. Our Design Prioritizes Safety, Eliminating Concerns Of Fires
          And Ensuring A Longer Battery Lifespan With Our Battery Technology.
          Perfectly Suited For Fleet Operators, Especially In Tourist-Centric
          Locations Like Goa, Our Rugged Yet Aesthetically Appealing Scooters
          Are Engineered For Longevity And Reliability. Join Us As We Pioneer A
          New Era In Sustainable And Dependable Electric Transportation.
        </p>

        <div className="space-y-4">
          <Accordion
            title="Students Are 75%"
            content="Students Are 75% More Likely To Enroll In A Degree Program That Offers Industry Micro-Credentials"
            index={0}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="85% Of Employers"
            content="85% Of Employers Seek Graduates With Industry Micro-Credentials"
            index={1}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title="50% Of Agree"
            content="50% Of Graduates Believe Industry Micro-Credentials Give Them A Competitive Advantage"
            index={2}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>

      <div className="lg:w-5/12 flex justify-center md:w-full">
        <img
          src={img1}
          alt="Electric Scooter"
          className="max-w-md h-auto shadow-lg"
        />
      </div>
    </div>
  );
};

const Accordion = ({ title, content, index, activeIndex, toggleAccordion }) => {
  const isActive = index === activeIndex;

  return (
    <div >
      <button
        className="flex justify-between items-center w-full py-3 text-lg font-semibold text-left"
        onClick={() => toggleAccordion(index)}
      >
        <span>{title}</span>
        <span>{isActive ? '-' : '+'}</span>
      </button>
      {isActive && (
        <div className="pb-3 text-black transition-all duration-300 ease-in-out">
          {content}
        </div>
      )}
    </div>
  );
};

export default Aboutus;
