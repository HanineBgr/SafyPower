import React from "react";
import { FaPrint } from "react-icons/fa";

const InvoicesCard = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-xl max-w-xl w-full"> {/* Increased width */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Invoices</h2>
        <button className="text-sm font-medium underline text-blue-600">View all</button>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Mar, 10, 2023</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-800 font-medium">$250,000</span>
            <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
              <FaPrint className="text-sm" /> PDF
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Feb, 20, 2023</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-800 font-medium">$150,000</span>
            <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
              <FaPrint className="text-sm" /> PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesCard;
