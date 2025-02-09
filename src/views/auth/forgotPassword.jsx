"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@fontsource/baloo-chettan-2";
import "@fontsource/montserrat";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email) {
      setError("Please enter your email.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
      alert(`Password reset instructions have been sent to: ${email}`);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background/bg.png')" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 h-[400px] flex flex-col justify-between pt-8">
        <h2
          className="text-[32px] font-bold text-black text-center mb-2"
          style={{ fontFamily: "'Baloo Chettan 2', sans-serif" }}
        >
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email input field */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border-b ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-900 text-white py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 600 }}
          >
            <img
              src="/assets/logos/logosite.png"  
              alt="Logo"
              className="mr-2 w-6 h-6"  
            />
            Send instructions
          </button>
        </form>

        {/* Link to login page */}
        <p className="text-center mt-4 text-gray-600">
          Remember your password?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
