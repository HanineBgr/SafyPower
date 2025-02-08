import React from "react";
import { BarChart2, User, MessageCircle, BatteryCharging } from "lucide-react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter(); 
  const currentPath = router.pathname; 

  const isActive = (path) => currentPath === path;

  return (
    <div className="w-14 bg-white flex flex-col items-center py-4 shadow-md rounded-2xl fixed top-6 left-4 h-[90vh]">
      {/* Logo */}
      <div className="mb-8 mt-6">
        <img src="/assets/logos/logo.png" alt="Logo" className="w-12 h-12" />
      </div>

      {/* Sidebar Buttons */}
      <div className="flex flex-col gap-6 mt-14">
        <button
          className={`p-2 rounded-full flex items-center justify-center shadow-md ${
            isActive("/home") ? "bg-yellow-400" : "bg-gray-100"
          }`}
          onClick={() => router.push("/home")}
        >
          <BarChart2
            className={`w-4 h-4 ${
              isActive("/home") ? "text-gray-900" : "text-gray-600"
            }`}
          />
        </button>
        <button
          className={`p-2 rounded-full flex items-center justify-center shadow-md ${
            isActive("/auth/profile") ? "bg-yellow-400" : "bg-gray-100"
          }`}
          onClick={() => router.push("/auth/profile")} 
        >
          <User
            className={`w-4 h-4 ${
              isActive("/auth/profile") ? "text-gray-900" : "text-gray-600"
            }`}
          />
        </button>
        <button
          className={`p-2 rounded-full flex items-center justify-center shadow-md ${
            isActive("/auth/contactForm") ? "bg-yellow-400" : "bg-gray-100"
          }`}
          onClick={() => router.push("/auth/contactForm")} 
        >
          <MessageCircle
            className={`w-4 h-4 ${
              isActive("/auth/contactForm") ? "text-gray-900" : "text-gray-600"
            }`}
          />
        </button>
        {/* Battery Icon Button */}
        <button
          className={`p-2 rounded-full flex items-center justify-center shadow-md ${
            isActive("/security") ? "bg-yellow-400" : "bg-gray-100"
          }`}
          onClick={() => router.push("/security")} 
        >
          <BatteryCharging
            className={`w-4 h-4 ${
              isActive("/security") ? "text-gray-900" : "text-gray-600"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
