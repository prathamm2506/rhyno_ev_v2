import React, { useState } from "react";
import img1 from '../../assets/t1.png';

const testimonials = [
  {
    id: 1,
    title: "Rhyno saved me from an accident!",
    description:
      "While taking a turn on Rhyno, I encountered sudden gravel in the road which made the vehicle skid. I am glad I was on Rhyno. Any other vehicle would have fallen.",
    name: "Vaibhav Raj Pandey",
    position: "CEO, Cleaneo App Technologies",
    image: img1
  },
  {
    id: 2,
    title: "Rhyno is a game-changer!",
    description:
      "I’ve never felt safer on any other vehicle. Rhyno’s stability and design are unmatched.",
    name: "Rohit Sharma",
    position: "Product Manager, TechCorp",
    image: img1
  },
  {
    id: 3,
    title: "Best investment ever!",
    description:
      "Purchasing Rhyno has been the best decision of my life. Its performance is superb.",
    name: "Amit Patel",
    position: "Founder, StartupX",
    image: img1
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
    <div className="py-24 pb-40 bg-white h-full">
      {/* Heading */}
      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-20 text-black">
        Tips by Our Customers
      </h1>

      {/* Testimonial Section */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white shadow-lg rounded-xl p-6 lg:p-8 gap-6 lg:gap-10 max-w-5xl mx-auto h-[450px]">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-xl lg:text-4xl font-bold mb-6 lg:mb-8 text-black text-left">
            {currentTestimonial.title}
          </h2>
          <p className="text-black text-xl text-left mb-6 lg:mb-8 leading-relaxed">
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
        <div className="relative lg:w-1/2 lg:pl-6 overflow-visible">
          <div className="relative">
            <img
              className="w-full h-[500px] object-cover rounded-2xl shadow-md -translate-y-14"
              src={currentTestimonial.image}
              alt="Testimonial"
            />
            {/* Next Button */}
            
          </div>
        </div>
        <button
              onClick={handleNext}
              className="absolute bottom-10 left-full transform -translate-x-1/2 bg-black text-white rounded-full w-24 h-14 flex items-center justify-center text-lg"
            >
              Next &rarr;
            </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
