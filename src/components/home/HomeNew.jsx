import React, { useState, useEffect } from "react";
import IMG1 from "../../assets/home1.jpg";
import IMG2 from "../../assets/home2.jpg";
import IMG3 from "../../assets/home3.jpg";
import IMG4 from "../../assets/home2.jpg";

function HomeNew() {
  const images = [IMG1, IMG2, IMG3, IMG4]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

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
    <div className="relative flex overflow-hidden items-center justify-center h-[95vh] w-full mt-10">
      {/* Image */}
      <img
        loading="lazy"
        src={images[currentIndex]}
        className="w-full h-full absolute inset-0"
        alt="slideshow"
        style={{ objectFit: "fill", maxHeight: "95vh", objectPosition: "top" }}
      />

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-8">
        {/* Previous button - Vertically centered on the left */}
        <button
          onClick={handlePrevClick}
          className="text-3xl px-4 py-2 outline-none border-none bg-slate-600 hover:bg-slate-300 focus:outline-none focus:border-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "50%" }}
        >
          <i className="fa-solid fa-angle-left text-white"></i>
        </button>

        {/* Next button - Vertically centered on the right */}
        <button
          onClick={handleNextClick}
          className="text-3xl px-4 py-2 outline-none border-none bg-slate-600 hover:bg-slate-300 focus:outline-none focus:border-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "50%" }}
        >
          <i className="fa-solid fa-angle-right text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default HomeNew;
