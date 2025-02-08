import React from "react";
import Sidebar from "../components/sidebar";
import { FaPlug, FaTemperatureHigh, FaFireAlt, FaShieldAlt } from "react-icons/fa";

const SecurityDashboard = () => {
  const boxes = [
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
          <h1 className="text-xl font-bold">Station 1</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">ON</span>
            <input
              type="checkbox"
              checked
              className="toggle-switch w-8 h-4 rounded-full"
            />
          </div>
        </div>

        {/* Boxes Grid */}
        <div className="grid grid-cols-3 gap-6">
          {boxes.map((box) => (
            <div
              key={box.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                {/* ID inside smaller gray circle */}
                <div className="w-5 h-5 bg-gray-300 text-gray-800 flex items-center justify-center rounded-full">
                  <span className="text-[10px] font-bold">{box.id}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {/* Icon inside circle */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                    <FaPlug className="w-3 h-3" />
                  </div>
                  <span className="text-sm">{box.status}</span>
                </div>
                <input
                  type="checkbox"
                  checked={box.switch1}
                  className="toggle-switch w-8 h-4 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                {/* Icon inside circle */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full">
                    <FaTemperatureHigh className="w-3 h-3" />
                  </div>
                  <span className="text-sm">{box.temperature}</span>
                </div>
                <input
                  type="checkbox"
                  checked={box.switch2}
                  className="toggle-switch w-8 h-4 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      box.smokeDetector
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {box.smokeDetector ? (
                      <FaShieldAlt className="w-3 h-3" />
                    ) : (
                      <FaFireAlt className="w-3 h-3" />
                    )}
                  </div>
                  <span className="text-sm">
                    {box.smokeDetector
                      ? "Détecteur de fumée"
                      : "Alerte de fumée"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
