import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import emailjs from 'emailjs-com';
import './Formmain.css';

const Formmain = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false); // State to control form visibility

  const categorySelect = [
    { label: "SE03", value: "SE03" },
    { label: "SE03 LITE", value: "SE03 LITE" },
    { label: "SE03 MAX", value: "SE03 MAX" },
  ];

  const cityOptions = [
    { label: "Mumbai", value: "mumbai" },
    { label: "Delhi", value: "delhi" },
    { label: "Bengaluru", value: "bengaluru" },
    { label: "Hyderabad", value: "hyderabad" },
    { label: "Chennai", value: "chennai" },
    { label: "Kolkata", value: "kolkata" },
    { label: "Pune", value: "pune" },
    { label: "Ahmedabad", value: "ahmedabad" },
    { label: "Surat", value: "surat" },
    { label: "Jaipur", value: "jaipur" },
    // Add more cities as needed
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6tppud', 'template_syhmdrq', form.current, 'dlfvxaLtJUSBW3FmH')
      .then(() => {
        e.target.reset();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setFormVisible(false); // Close the form after submission
          navigate("/SE03");
        }, 2000);
      })
      .catch(error => console.error('Email sending error:', error));
  };

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white', // Changed to white
      color: 'black',
      borderColor: 'gray',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black', // Changed to black
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white', // Changed to white
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#f0f0f0' : 'white', // Focus effect
      color: 'black', // Changed to black
    }),
  };

  return (
    <div>
      {/* Button to show the form */}
      <button
        onClick={() => setFormVisible(true)}
        className="search-icon btn btn-nav" id="searchIcon"
      >
        Order Now
      </button>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="w-16 h-16 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Conditionally render the form as a popup */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xl p-8"> 
            <form ref={form} onSubmit={sendEmail} className="space-y-6"> 
              <h1 className="text-2xl font-bold text-black">Book Now</h1> 

              <div className="flex space-x-4">
                <input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-1/2 p-2 bg-white text-black borderbottommainform" 
                />
                <input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-1/2 p-2 bg-white text-black borderbottommainform" 
                />
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full p-2 bg-white text-black borderbottommainform" 
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 bg-white text-black borderbottommainform" 
                />
              </div>

              <Select
                options={categorySelect}
                placeholder="Choose Model"
                required
                name="model"
                styles={customSelectStyles}
                className="w-full"
              />

              <Select
                options={cityOptions}
                placeholder="Choose City"
                required
                name="city"
                styles={customSelectStyles}
                className="w-full"
              />

              <div className="mt-4">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Describe your message here"
                  className="w-full p-2 bg-white text-black borderbottommainform" 
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-black bg-[#F9ED32] hover:bg-[#f4e027] rounded-md"
              >
                Submit
              </button>
            </form>

            {/* Close button */}
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-4 right-4 text-black text-2xl font-bold z-50" 
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formmain;
