import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>ABOUT US</h2>
        <p>
          Established In 2019 By An Automotive Engineer With A Vision For
          Sustainable And Robust Mobility Solutions, RHYNO EV Is Not Just A
          Company; It's A Collective Effort Of A Dynamic Team Of Young
          Individuals Passionately Driving Innovation In The Electric Vehicle
          Industry. We Believe In Engineering Solutions That Solve Problems.
        </p>
        <p>
          With Our First Product, We've Taken A Bold Step To Create Something
          More Than Just A Vehicle; It's A Unique Experience Of Elegance,
          Comfort, And Style, Addressing The Pitfalls Of Conventional Electric
          Scooters. Our Design Prioritizes Safety, Eliminating Concerns Of
          Fires And Ensuring A Longer Battery Lifespan With Our Battery
          Technology. Perfectly Suited For Fleet Operators, Especially In
          Tourist-Centric Locations Like Goa, Our Rugged Yet Aesthetically
          Appealing Scooters Are Engineered For Longevity And Reliability. Join
          Us As We Pioneer A New Era In Sustainable And Dependable Electric
          Transportation.
        </p>
      </div>
      <div className="about-us-stats">
        <div className="stat-item">
          <span className="stat-percentage">75%</span>
          <span className="stat-text">
            Students Are 75% More Likely To Enroll In A Degree Program That
            Offers Industry Micro-Credentials
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-percentage">88%</span>
          <span className="stat-text">
            Of Employers Believe That Professional Certificates Strengthen A
            Candidate's Job Application.
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-percentage">90%</span>
          <span className="stat-text">
            Of Students Agree That A Professional Certificate Will Help Them
            Secure A Job.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
