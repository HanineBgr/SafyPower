import React from "react";
import { FaPen } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      {/* Header Section */} 
      <div className="flex items-center justify-between">
        {/* Profile Image and Info */}
        <div className="flex items-center gap-4">
        <img src="/assets/logos/logo.png" alt="Logo" className="w-12 h-12" />

          <div>
            <h2 className="text-lg font-bold">Hanine Bouguerra</h2>
            <p className="text-gray-500">bouguerrahanine4@gmail.com</p>
          </div>
        </div>
        {/* Edit Icon */}
        <FaPen className="text-gray-500 cursor-pointer text-sm" />
        </div>

      {/* Buttons Section */}
      <div className="flex mt-6 gap-4">
        <button className="flex-1 py-2 border rounded-full text-center font-medium">
          Profile settings
        </button>
        <button className="flex-1 py-2 border rounded-full text-center font-medium">
          Profile informations
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
