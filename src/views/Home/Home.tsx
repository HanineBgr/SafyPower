"use client";

import React from "react";
import Sidebar from "../../components/sidebar";
import SearchBar from "../../components/searchbar";
import ProfileSection from "../../components/profile";
import ChangeStationButton from "../../components/switchbutton";
import AvailableStationsChart from "../../components/availableStationChart";
import UsedStationsChart from "../../components/usedStations";
import TotalVisitsChart from "../../components/TotalVisitsChart";  
import StationUsageDonutChart from "../../components/DonutChart";  
import TrackingSession from "../../components/TrackingUser"; 

const HomeScreen: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#e0efff]"> 
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-[64px] bg-[#e0efff] overflow-auto"> 
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">SafyPower</h1>
          <SearchBar />
        </div>
        <ChangeStationButton className="mt-6" />

        <div className="mt-6 flex">
          <div className="flex-1 pr-10"> 
            <AvailableStationsChart />
          </div>

          <div className="flex-1">
            <UsedStationsChart />
          </div>
        </div>

        <div className="mt-6 flex gap-6">
          <div className="flex-1 h-[300px]">
            <TotalVisitsChart />
          </div>

          <div className="w-[35%] h-[300px] mt-6"> 
            <StationUsageDonutChart /> 
          </div>
        </div>

      </div>

      <ProfileSection />
    </div>
  );
};

export default HomeScreen;
