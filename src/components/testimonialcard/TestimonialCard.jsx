import React, { useState } from "react";
import img1 from '../../assets/t1.png'

const testimonials = [
  {
    id: 1,
    title: "Rhyno saved me from an accident!",
    description:
      "While taking a turn on Rhyno, I encountered sudden gravel in the road which made the vehicle skid. I am glad I was on Rhyno. Any other vehicle would have fallen.",
    name: "Vaibhav Raj Pandey",
    position: "CEO, Cleaneo App Technologies",
    image: img1 // Replace with actual image
  },
  {
    id: 2,
    title: "Rhyno is a game-changer!",
    description:
      "I’ve never felt safer on any other vehicle. Rhyno’s stability and design are unmatched.",
    name: "Rohit Sharma",
    position: "Product Manager, TechCorp",
    image: img1 // Replace with actual image
  },
  {
    id: 3,
    title: "Best investment ever!",
    description:
      "Purchasing Rhyno has been the best decision of my life. Its performance is superb.",
    name: "Amit Patel",
    position: "Founder, StartupX",
    image: img1 // Replace with actual image
  }
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="py-10">
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white shadow-lg rounded-2xl p-8 lg:p-10 gap-6 lg:gap-10 max-w-5xl mx-auto transition-all duration-500 ease-in-out transform">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-xl lg:text-4xl font-bold mb-4 text-black text-left">
          {currentTestimonial.title}
        </h2>
        <p className="text-black text-xl text-left mb-6 leading-relaxed">
          {currentTestimonial.description}
        </p>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-black">
            {currentTestimonial.name}
          </h3>
          <p className="text-sm text-gray-500">{currentTestimonial.position}</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-1/2 lg:pl-6">
        <div className="relative overflow-visible transition-transform duration-500 ease-in-out transform">
          <img
            className="w-full h-[500px] object-cover rounded-2xl shadow-md -translate-y-3 lg:-translate-y-6"
            src={currentTestimonial.image}
            alt="Testimonial"
          />
        </div>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute bottom-4 right-4 bg-black text-white rounded-full w-24 h-14 flex items-center justify-center text-lg"
        >
          Next &rarr;
        </button>
      </div>
    </div>
    </div>
  );
};

export default TestimonialCard;
