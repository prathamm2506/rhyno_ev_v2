import React from "react";
import Sparkles from '../Sparkles/Sparkles';
import "./WhyRhynoHeading.css";

const WhyRhynoHeading = () => {
  return (
    <div className="sparkles-preview-container">
      <h1 className="sparkles-preview-title">Why Rhyno is Awesome</h1>
      <div className="sparkles-preview-core-container">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
        <div className="gradient gradient-4"></div>

        {/* <Sparkles
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="sparkles-container"
          particleColor="#FFFFFF"
        /> */}

        <div className="radial-gradient"></div>
      </div>
    </div>
  );
};

export default WhyRhynoHeading;
