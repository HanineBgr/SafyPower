"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import "@fontsource/baloo-chettan-2";
import "@fontsource/montserrat";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      formErrors.password = "Please enter your password";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      
      router.push("/home"); 
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background/bg.png')" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 h-[500px] flex flex-col justify-start pt-10">
        <h2
          className="text-[32px] font-bold text-black text-center mb-6"
          style={{ fontFamily: "'Baloo Chettan 2', sans-serif" }}
        >
          Welcome
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type password"
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

          <div className="flex items-center mb-6 cursor-pointer" onClick={toggleRememberMe}>
            <div
              className={`w-10 h-5 rounded-full p-1 flex items-center transition-all duration-300 ${rememberMe ? "bg-blue-800" : "bg-gray-300"}`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${rememberMe ? "translate-x-5" : "translate-x-0"}`}
              ></div>
            </div>
            <span className="ml-3 text-gray-700">Remember me</span>
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
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/signUp" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
        <p className="text-center mt-2 text-gray-600">
          <a href="/auth/forgotPassword" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
