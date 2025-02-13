"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import Sidebar from "../../components/layout/sidebar";
import TopBlueBar from "../../components/layout/topbar"; 

const ContactForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="relative flex h-screen w-full bg-[#e0efff] scrollbar-thin overflow-auto">
      {/* Sidebar */}
      <div className="z-50">
        <Sidebar />
      </div>

      {/* Success Alert */}
      {showAlert && (
        <div
          className="fixed top-2 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center shadow-lg animate-fadeIn z-40"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <FaCheckCircle className="mr-2" />
          Message sent successfully!
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-[#e0efff]">
        {/* Top Blue Bar */}
        <TopBlueBar onBellClick={() => { console.log('Bell clicked'); }} />

        {/* Contact Form Section */}
        <div className="flex justify-center items-center p-8 relative -mt-[60] z-20">
          <div className="bg-[#f4f9ff] rounded-xl shadow-md w-[90%] max-w-[800px] p-6 flex flex-row-reverse items-center">
            <div className="w-2/5 flex justify-center items-center">
              <img
                src="/assets/Contact.png"
                alt="Contact Illustration"
                className="w-[70%] h-auto"
              />
            </div>

            <div className="w-3/5 p-4">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Contact Form</h2>
                <button className="text-xl font-bold text-gray-600 hover:text-black">
                  &times;
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="border rounded-lg p-3 w-full text-sm"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="border rounded-lg p-3 w-full text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="border rounded-lg p-3 w-full text-sm"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone N°"
                    className="border rounded-lg p-3 w-full text-sm"
                    required
                  />
                  <textarea
                    rows={3}
                    placeholder="Type your message..."
                    className="col-span-2 border rounded-lg p-3 w-full text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center bg-blue-900 text-white py-2 rounded-full text-lg font-semibold hover:bg-blue-800 transition"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      src="/assets/logos/logosite.png"
                      alt="Logo"
                      className="mr-2 w-6 h-6"
                    />
                    Send message
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-4">
                <h3 className="font-bold text-lg">Have a question for us?</h3>
                <p className="text-sm text-gray-600">
                  In case of emergency contact us by phone.
                </p>
                <div className="flex items-center mt-2 text-blue-600">
                  <FaPhoneAlt className="mr-2" />
                  <span>+33 651 741418</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
