import React from 'react';
import { Home, BarChart2, User, MessageCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-16 bg-blue-50 flex flex-col items-center py-4 shadow-md rounded-r-2xl fixed top-0 left-0">
      <div className="mb-8">
        <Home className="text-blue-600 w-8 h-8" />
      </div>
      <div className="flex flex-col gap-6">
        <button className="bg-yellow-400 p-3 rounded-full flex items-center justify-center shadow-md">
          <BarChart2 className="text-black w-5 h-5" />
        </button>
        <button className="bg-gray-100 p-3 rounded-full flex items-center justify-center shadow-sm">
          <User className="text-gray-500 w-5 h-5" />
        </button>
        <button className="bg-gray-100 p-3 rounded-full flex items-center justify-center shadow-sm">
          <MessageCircle className="text-gray-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
