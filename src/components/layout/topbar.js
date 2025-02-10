import React from "react";
import { Bell, Settings } from "lucide-react";

const TopBlueBar = ({ onBellClick }) => {
  const handleSettingsClick = () => {
    alert("Settings clicked!");
  };

  return (
    <div className="bg-blue-200 mx-auto mt-4 rounded-lg flex justify-between items-center px-8 py-6 shadow-md relative z-20 w-[85%] max-w-[1400px]">
      <h1 className="text-xl font-bold text-gray-900">SafyPower</h1>
      <div className="flex items-center gap-4">
        {/* Settings Icon */}
        <button
          onClick={handleSettingsClick}
          className="relative w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 focus:outline-none z-30"
        >
          <Settings className="w-full h-full" />
        </button>

        {/* Bell Icon */}
        <button
          onClick={onBellClick} 
          className="relative w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 focus:outline-none z-30"
        >
          <Bell className="w-full h-full" />
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-3 h-3 rounded-full flex items-center justify-center">
            •
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopBlueBar;
