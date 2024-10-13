import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import emailjs from "emailjs-com";
import "./Formmain.css";

const Formmain2 = ({ setFormVisible }) => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r6tppud",
        "template_syhmdrq",
        form.current,
        "dlfvxaLtJUSBW3FmH"
      )
      .then(() => {
        e.target.reset();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setFormVisible(false); // Close the form after submission
          navigate("/SE03");
        }, 2000);
      })
      .catch((error) => console.error("Email sending error:", error));
  };

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      color: "black",
      borderColor: "gray",
      minHeight: "40px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f0f0f0" : "white",
      color: "black",
    }),
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 md:p-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-black">Book Now</h1>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              name="firstname"
              type="text"
              placeholder="First Name"
              required
              className="w-full md:w-1/2 p-2 bg-white text-black border border-gray-300 rounded"
            />
            <input
              name="lastname"
              type="text"
              placeholder="Last Name"
              required
              className="w-full md:w-1/2 p-2 bg-white text-black border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full p-2 bg-white text-black border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 bg-white text-black border border-gray-300 rounded"
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

          <div>
            <textarea
              name="message"
              cols="30"
              rows="3"
              placeholder="Describe your message here"
              className="w-full p-2 bg-white text-black border border-gray-300 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-black bg-[#F9ED32] hover:bg-[#f4e027] rounded-md"
          >
            Submit
          </button>

          {/* Close button */}
          <button
              onClick={() => setFormVisible(false)}
              className="absolute top-1 right-4 text-black text-2xl font-bold z-50" 
            >
              &times;
            </button>
        </form>
      </div>
    </div>
  );
};

export default Formmain2;
