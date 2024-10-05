import React, { useState, useEffect } from "react";

function HomeNew() {
  // External URLs for desktop images
  const desktopImages = [
    "https://i.ibb.co/c8sQvmK/Rhyno-fat-tyre-electric-scooter.jpg",
    "https://i.ibb.co/Tv6B5Kn/Rhyno-cool-ev.jpg",
    "https://i.ibb.co/c8sQvmK/Rhyno-fat-tyre-electric-scooter.jpg",
    "https://i.ibb.co/Tv6B5Kn/Rhyno-cool-ev.jpg",
  ];

  // External URLs for mobile images
  const mobileImages = [
    "https://i.ibb.co/MhXvRxz/Rhyno-EV-off-road-Mobile.jpg",
    "https://i.ibb.co/c8sQvmK/Rhyno-fat-tyre-electric-scooter.jpg",
    "https://i.ibb.co/MhXvRxz/Rhyno-EV-off-road-Mobile.jpg",
    "https://i.ibb.co/c8sQvmK/Rhyno-fat-tyre-electric-scooter.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [desktopImages.length]);

  // Check screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screens are less than or equal to 768px
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? desktopImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex overflow-hidden items-center justify-center h-[95vh] w-full mt-10">
      {/* Image */}
      <img
  loading="lazy"
  src={isMobile ? mobileImages[currentIndex] : desktopImages[currentIndex]}
  className="absolute inset-0 aspect-ratio-main"
  alt="slideshow"
  // style={{ 
  //   objectPosition: "center", // Center the image to prevent top or bottom cutting
  //   height: "100%", // Ensure full height for all screen sizes
  //   width: "100%",   // Full width to cover the container
  // }}
/>
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8">
        {/* Previous button */}
        <button
          onClick={handlePrevClick}
          className="text-2xl md:text-3xl px-4 py-2 bg-slate-600 hover:bg-slate-300 text-white rounded-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        {/* Next button */}
        <button
          onClick={handleNextClick}
          className="text-2xl md:text-3xl px-4 py-2 bg-slate-600 hover:bg-slate-300 text-white rounded-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default HomeNew;
