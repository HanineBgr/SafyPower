import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ChangeStationButton = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`flex items-center bg-blue-200 text-black font-bold text-sm px-3 py-1 rounded-lg shadow-md ${className}`} // Softer blue and bold text
    >
      Change Station
      <ChevronDown className="ml-2" size={16} /> {/* Reduced the size of the icon */}
    </button>
  );
};

export default ChangeStationButton;
