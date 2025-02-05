"use client";

import React from "react";
import Sidebar from "../../components/sidebar";
import SearchBar from "../../components/searchbar";
import ProfileSection from "../../components/profile";
import ChangeStationButton from "../../components/switchbutton";

const HomeScreen: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#e0efff] relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-[64px]">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">SafyPower</h1>
          <SearchBar />
        </div>
        <ChangeStationButton className="mt-4" /> 
        <p className="mt-4 text-gray-600">
          Welcome to the Home screen. Here you can add the content you need.
        </p>
      </div>

      <ProfileSection />
    </div>
  );
};

export default HomeScreen;
