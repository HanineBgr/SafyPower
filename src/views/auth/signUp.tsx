"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaBolt } from "react-icons/fa";
import Link from "next/link";
import "@fontsource/baloo-chettan-2";
import "@fontsource/montserrat";

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string; fullName?: string }>({});

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  const toggleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formErrors: { email?: string; password?: string; confirmPassword?: string; fullName?: string } = {};

    if (!fullName) {
      formErrors.fullName = "Please enter your full name.";
    }

    if (!email) {
      formErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      formErrors.password = "Please enter your password.";
    }

    if (!confirmPassword) {
      formErrors.confirmPassword = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      alert(`Signing up...\nRemember Me: ${rememberMe}`);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background/bg.png')" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 h-[600px] flex flex-col justify-start pt-10">
        <h2
          className="text-[32px] font-bold text-black text-center mb-6"
          style={{ fontFamily: "'Baloo Chettan 2', sans-serif" }}
        >
          SIGN UP
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Type your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full p-3 border-b ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Type your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 border-b ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            <span
              className="absolute right-3 top-3 text-gray-600 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full p-3 border-b ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            <span
              className="absolute right-3 top-3 text-gray-600 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>


          <div className="mb-4">
            <input
              placeholder="Verification code"
              value={email}
              className={`w-full p-3 border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
          </div>


          <div className="flex items-center mb-6 cursor-pointer" onClick={toggleRememberMe}>
            <div
              className={`w-10 h-5 rounded-full p-1 flex items-center transition-all duration-300 ${rememberMe ? "bg-blue-800" : "bg-gray-300"}`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${rememberMe ? "translate-x-5" : "translate-x-0"}`}
              ></div>
            </div>
            <span className="ml-3 text-gray-700">I agree to all terms and conditions</span>
          </div>

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
  Sign Up
</button>

        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
