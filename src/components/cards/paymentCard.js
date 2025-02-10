import React from "react";
import { FaPen } from "react-icons/fa";

const PaymentCards = () => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md mx-auto" style={{ width: '550px' }}> {/* Augmented width */}
      <div className="grid grid-cols-2 gap-4">
        
        <div className="flex items-center justify-between bg-[#f4f9ff] p-2 rounded-md shadow-sm h-12">
          <div className="flex items-center gap-4">
            <img
              src="/assets/cards/mastercard.png" 
              alt="Amex Card"
              className="w-5 h-3" 
            />
            <span className="text-gray-700 text-sm font-medium">**** **** **90 1289</span>
          </div>
          <FaPen className="text-gray-500 cursor-pointer text-sm" />
        </div>

        {/* Visa */}
        <div className="flex items-center justify-between bg-[#f4f9ff] p-2 rounded-md shadow-sm h-12">
          <div className="flex items-center gap-4">
            <img
              src="/assets/cards/visa.png" 
              alt="Visa Card"
              className="w-5 h-3" 
            />
            <span className="text-gray-700 text-sm font-medium">**** **** **90 1289</span>
          </div>
          <FaPen className="text-gray-500 cursor-pointer text-sm" />
        </div>
        
      </div>
    </div>
  );
};

export default PaymentCards;
