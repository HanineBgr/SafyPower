import React, { useState } from "react";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import Sidebar from "../../components/sidebar";

const ContactForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-[#e0efff]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-8 relative">
        {/* Success Alert */}
        {showAlert && (
          <div className="absolute top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center shadow-lg animate-fadeIn">
            <FaCheckCircle className="mr-2" />
            Message sent successfully!
          </div>
        )}

        {/* ✅ Centered Form with Reduced Height */}
        <div className="bg-[#f4f9ff] rounded-xl shadow-md w-[80%] max-w-[900px] p-6 flex flex-row-reverse items-center">
          {/* Right Side - PNG Image Inside Form */}
          <div className="w-2/5 flex justify-center items-center">
            <img
              src="/assets/Contact.png" // Replace with your actual image path
              alt="Contact Illustration"
              className="w-[70%] h-auto"
            />
          </div>

          {/* Left Side - Contact Form */}
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
                  className="border rounded-lg p-2 w-full text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="border rounded-lg p-2 w-full text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border rounded-lg p-2 w-full text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone N°"
                  className="border rounded-lg p-2 w-full text-sm"
                  required
                />
                <textarea
                  rows={3}
                  placeholder="Type your message..."
                  className="col-span-2 border rounded-lg p-2 w-full text-sm"
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
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  <img
                    src="/assets/logos/logosite.png"
                    alt="Logo"
                    className="mr-2 w-5 h-5"
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
  );
};

export default ContactForm;
