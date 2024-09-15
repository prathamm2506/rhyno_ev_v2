import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import emailjs from 'emailjs-com';

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

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-800 p-4">
      {/* Button to show the form */}
      <button
        onClick={() => setFormVisible(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Form
      </button>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="w-16 h-16 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Conditionally render the form as a popup */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <h1 className="text-2xl font-bold text-gray-800">Get Details</h1>

              <div className="flex space-x-4">
                <input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <Select
                options={categorySelect}
                placeholder="Choose Model"
                required
                name="model"
                className="w-full"
              />

              <div className="mt-4">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Enter company description"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
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
