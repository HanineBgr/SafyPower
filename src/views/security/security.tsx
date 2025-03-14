"use client";

import React from "react";
import Sidebar from "../../components/layout/sidebar";
import ChangeStationButton from "../../components/buttons/switchbutton";
import {
  FaPlug,
  FaTemperatureHigh,
  FaFireAlt,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

type Station = string;

type Box = {
  id: number;
  status: string;
  temperature: string;
  smokeDetector: boolean;
  switch1: boolean;
  switch2: boolean;
};

const SecurityDashboard: React.FC = () => {
  const stations: Station[] = ["Station1", "Station2", "Station3"];

  const handleStationChange = (station: Station): void => {
    console.log(`Selected Station: ${station}`);
  };

  const boxes: Box[] = [
    {
      id: 1,
      status: "Prise alimentée",
      temperature: "35.6 °C",
      smokeDetector: true,
      switch1: true,
      switch2: false,
    },
    {
      id: 2,
      status: "Prise hors tension",
      temperature: "27.7 °C",
      smokeDetector: true,
      switch1: false,
      switch2: true,
    },
    {
      id: 3,
      status: "Prise alimentée",
      temperature: "27.5 °C",
      smokeDetector: true,
      switch1: true,
      switch2: true,
    },
    {
      id: 4,
      status: "Prise alimentée",
      temperature: "27.5 °C",
      smokeDetector: true,
      switch1: true,
      switch2: true,
    },
    {
      id: 5,
      status: "Prise alimentée",
      temperature: "27.5 °C",
      smokeDetector: true,
      switch1: true,
      switch2: false,
    },
    {
      id: 6,
      status: "Prise hors tension",
      temperature: "31.8 °C",
      smokeDetector: false,
      switch1: false,
      switch2: true,
    },
  ];

  return (
    <div className="flex h-screen bg-[#e0f0ff]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full p-6 ml-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <ChangeStationButton stations={stations} onStationChange={handleStationChange} />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">ON</span>
            <input type="checkbox" checked readOnly className="toggle-switch w-8 h-4 rounded-full" />
          </div>
        </div>

        {/* Boxes Grid */}
        <div className="grid grid-cols-3 gap-6">
          {boxes.map((box) => {
            const plugIconColor =
              box.status === "Prise alimentée" ? "text-green-600" : "text-black";

            let temperatureIconColor = "text-black";
            const tempValue = parseFloat(box.temperature);
            if (tempValue > 30) {
              temperatureIconColor = "text-red-600";
            } else if (tempValue > 27) {
              temperatureIconColor = "text-orange-300";
            }

            return (
              <div key={box.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-5 h-5 bg-gray-300 text-gray-800 flex items-center justify-center rounded-full">
                    <span className="text-[10px] font-bold">{box.id}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full mr-2 ${plugIconColor}`}
                  >
                    <FaPlug className="w-3 h-3" />
                  </div>
                  <span className="text-sm">{box.status}</span>
                  <input type="checkbox" checked={box.switch1} readOnly className="toggle-switch w-8 h-4 rounded-full ml-auto" />
                </div>
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 bg-orange-100 flex items-center justify-center rounded-full mr-2 ${temperatureIconColor}`}
                  >
                    <FaTemperatureHigh className="w-3 h-3" />
                  </div>
                  <span className="text-sm">{box.temperature}</span>
                  <input type="checkbox" checked={box.switch2} readOnly className="toggle-switch w-8 h-4 rounded-full ml-auto" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 ${
                        box.smokeDetector ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}
                    >
                      {box.smokeDetector ? <FaShieldAlt className="w-3 h-3" /> : <FaFireAlt className="w-3 h-3" />}
                    </div>
                    <span className="text-sm">
                      {box.smokeDetector ? "Détecteur de fumée" : "Alerte de fumée"}
                    </span>
                  </div>
                  {!box.smokeDetector && box.temperature === "31.8 °C" && (
                    <FaExclamationTriangle className="w-5 h-5 text-red-600 ml-auto" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
