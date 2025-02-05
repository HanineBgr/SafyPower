import React from 'react';
import { BarChart2, User, MessageCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-14 bg-white flex flex-col items-center py-4 shadow-md rounded-2xl fixed top-6 left-4 h-[90vh]"> {/* Adjusted top to align with text */}
      <div className="mb-8 mt-6"> 
        <img src="/assets/logos/logo.png" alt="Logo" className="w-12 h-12" />
      </div>
      <div className="flex flex-col gap-6 mt-14">
        <button className="bg-yellow-400 p-2 rounded-full flex items-center justify-center shadow-md">
          <BarChart2 className="text-gray-600 w-4 h-4 fill-current" /> 
        </button>
        <button className="bg-gray-100 p-2 rounded-full flex items-center justify-center shadow-sm">
          <User className="text-gray-600 w-4 h-4 fill-current" /> 
        </button>
        <button className="bg-gray-100 p-2 rounded-full flex items-center justify-center shadow-sm">
          <MessageCircle className="text-gray-600 w-4 h-4 fill-current" /> 
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
