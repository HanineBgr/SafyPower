import React from "react";
import { FaPrint } from "react-icons/fa";
import '../styles/globals.css';

const InvoicesCard = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-xl w-full max-w-[170rem]"> {/* Significantly increased width */}
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-base font-bold">Invoices</h2>
        <button className="border border-black rounded-full px-2 py-1 text-xs">
          View all
        </button>
      </div>

      {/* Scrollable List */}
      <div
        className="mt-4 max-h-[5rem] overflow-y-hidden hover:overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 rounded-md pr-6"
      >
        {/* Invoice Items */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col py-2 border-b">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-600">Date: {new Date(2023, 0, i + 1).toLocaleDateString()}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-800 font-medium">$ {1000 * (i + 1)}</span>
                <button className="text-blue-600 text-xs font-medium flex items-center gap-1">
                  <FaPrint className="text-xs" /> PDF
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500">ID: INV-{i + 1}</p> {/* Added IDs */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesCard;
