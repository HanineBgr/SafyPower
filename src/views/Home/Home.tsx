"use client";

import React from "react";
import Sidebar from "../../components/sidebar";
import SearchBar from "../../components/searchbar";
import ProfileSection from "../../components/profile";
import ChangeStationButton from "../../components/switchbutton";
import AvailableStationsChart from "../../components/availableStationChart";
import UsedStationsChart from "../../components/usedStations";

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
        <ChangeStationButton className="mt-6" />

        <div className="mt-6 flex "> 
          <div className="flex-1 pr-100"> 
            <AvailableStationsChart />
          </div>

          <div className="flex-1 "> {/* Reduced padding-left to 1 */}
            <UsedStationsChart />
          </div>
        </div>
      </div>

      {/* Profile Section in the top right */}
      <ProfileSection />
    </div>
  );
};

export default HomeScreen;
