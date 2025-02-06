import React from "react";
import Sidebar from "../../components/sidebar";
import SearchBar from "../../components/searchbar";
import ProfileSection from "../../components/profile";
import ChangeStationButton from "../../components/switchbutton";
import AvailableStationsChart from "../../components/availableStationChart";
import UsedStationsChart from "../../components/usedStations";
import TotalVisitsChart from "../../components/TotalVisitsChart";
import StationUsageDonutChart from "../../components/DonutChart";
import TrackingUser from "../../components/TrackingUser"; // Importing TrackingUser
import StationUsagePieChart from "../../components/DonutChart";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../../components/map"), {
  ssr: false,
});

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
          <div className="flex-1 pr-10 ml-4">
            <AvailableStationsChart />
          </div>

          <div className="flex-1 ml-[-16px]">
            <UsedStationsChart />
          </div>
        </div>

        <div className="mt-6 flex gap-6">
          <div className="flex-1 h-[300px] max-w-[70%] ml-4">
            <TotalVisitsChart />
          </div>

          <div className="flex-1 h-[300px] max-w-[30%]">
            <StationUsagePieChart />
          </div>
        </div>

        {/* Tracking User and Map Section */}
        <div className="mt-6 flex gap-6">
          <div className="flex-1 h-[auto] max-w-[70%] ml-4">
            <TrackingUser />
          </div>
          <div className="flex-1 h-[auto] max-w-[30%] -mt-5">
            <MapComponent />
          </div>
        </div>
      </div>

      <ProfileSection />
    </div>
  );
};

export default HomeScreen;
