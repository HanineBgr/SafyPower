import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ChangeStationButton = ({ stations, onStationChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState(stations[0]); 
  const handleStationSelect = (station) => {
    setSelectedStation(station);
    setIsOpen(false);
    onStationChange(station); 
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-blue-200 text-black font-bold text-sm px-3 py-1 rounded-lg shadow-md"
      >
        {selectedStation}
        <ChevronDown className="ml-2" size={16} />
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md z-10">
          <ul className="p-2">
            {stations.map((station) => (
              <li
                key={station}
                onClick={() => handleStationSelect(station)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {station}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChangeStationButton;
