"use client";

import React from "react";
import Sidebar from "../../components/Sidebar"; 

const HomeScreen: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {}
      <div className="ml-16 w-full h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800">Home Screen</h1>
        <p className="mt-4 text-gray-600">Welcome to the Home screen. Here you can add the content you need.</p>

        {}
      </div>
    </div>
  );
};

export default HomeScreen;
