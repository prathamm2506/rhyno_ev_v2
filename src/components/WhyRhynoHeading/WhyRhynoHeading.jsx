import React from "react";
// import Sparkles2 from "../Sparkles2/Sparkles2";
import "./WhyRhynoHeading.css";

const WhyRhynoHeading = () => {
  return (
    <div className="sparkles-preview-container">
      <h1 className="sparkles-preview-title">Aceternity</h1>
      <div className="sparkles-preview-gradient-container">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
        <div className="gradient gradient-4"></div>
        <div className="sparkles-core-container">
          {/* <Sparkles2
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="sparkles-preview-core"
            particleColor="#FFFFFF"
          /> */}
        </div>
        <div className="sparkles-preview-radial-gradient"></div>
      </div>
    </div>
  );
};

export default WhyRhynoHeading;
