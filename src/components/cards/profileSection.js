import React from "react";

const ProfileSection = () => {
  return (
    <div className="absolute top-6 right-6 flex items-center space-x-3">
      <div>
        <p className="text-sm font-semibold text-gray-800">Hanine Bouguerra</p>
        <p className="text-sm text-gray-500">Software engineer</p>
      </div>
      <img
        src="/assets/profile.jpg" 
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover" 
      />
    </div>
  );
};
export default ProfileSection;
