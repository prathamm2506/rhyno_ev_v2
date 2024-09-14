import React, { useState, useEffect } from "react";
import IMG1 from "../../assets/home.png";
import IMG2 from "../../assets/home2.jpg"; // Add your other images here
import IMG3 from "../../assets/home3.jpg";
import IMG4 from "../../assets/home2.jpg";

function HomeNew() {
  const images = [IMG1, IMG2, IMG3, IMG4]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex overflow-hidden flex-col items-center px-16 pt-20 mt-20 pb-10 min-h-[90vh] max-md:px-5">
      <img
        loading="lazy"
        src={images[currentIndex]}
        className="object-cover absolute inset-0 w-full h-full"
        alt="slideshow"
      />
      <div className="flex relative justify-between mt-96 w-full max-w-[1219px] max-md:flex-wrap max-md:mt-72 max-md:max-w-full">
        {/* Previous button fixed at bottom-left of the screen */}
        <div className="left-5 mt-24">
          <button
            onClick={handlePrevClick}
            className="text-3xl px-4 py-2 outline-none border-none bg-slate-600 hover:bg-slate-300 focus:outline-none focus:border-none"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </div>
        {/* Next button fixed at bottom-right of the screen */}
        <div className="right-5 mt-24">
          <button
            onClick={handleNextClick}
            className="text-3xl px-4 py-2 outline-none border-none bg-slate-600 hover:bg-slate-300 focus:outline-none focus:border-none"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeNew;
