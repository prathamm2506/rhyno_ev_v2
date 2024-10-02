import React, { useState, useEffect, useRef } from "react";
import "./Modelpage_L2.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "../../assets/rf.png";
import VehicleStats from "../stats/VehicleStats";

const Modelpage_L2 = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const stats = [
    { label: 'Power', progress: 70 },
    { label: 'Speed', progress: 60 },
    { label: 'Range', progress: 80 },
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const thresholdValue = window.innerWidth <= 768 ? 0 : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > thresholdValue) {
          setIsVisible(true);
        }
      },
      { threshold: [0, thresholdValue] }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="gtx-containerMD" ref={componentRef}>
      <div className="gtx-text-section">
        <h2 className={`gtx-title ${isVisible ? 'glow' : ''}`}>Rhyno GTX Series</h2>
        <div className={`info-section ${isVisible ? 'visible' : ''}`} onClick={toggleShowMore}>
          <p>Indulge in the perfect harmony of power and range with this Rhyno</p>
          {showMore ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
        </div>
        {showMore && (
          <div className="gtx-more-info">
            <p>
              The Rhyno GTX is designed to offer an unmatched blend of power and efficiency. With advanced features that cater to your comfort, safety, and convenience, the GTX ensures an exhilarating ride experience that keeps you ahead of the curve.
            </p>
          </div>
        )}
        <hr className={`${isVisible ? 'visible' : ''}`} />
        <VehicleStats stats={stats} />
      </div>

      <div className="gtx-image-section">
        <img src={Image} alt="Rhyno GTX" className="bike-image" />
      </div>
    </div>
  );
};

export default Modelpage_L2;
