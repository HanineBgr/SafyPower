import React from "react";

const PaymentMethods = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-xl flex gap-4">
      <div className="flex-1 bg-gray-100 p-4 rounded-lg flex items-center justify-between">
        <span className="text-sm font-medium">**** **** **** 1289</span>
        <button className="text-blue-600 text-sm font-medium">Edit</button>
      </div>
      <div className="flex-1 bg-gray-100 p-4 rounded-lg flex items-center justify-between">
        <span className="text-sm font-medium">**** **** **** 1289</span>
        <button className="text-blue-600 text-sm font-medium">Edit</button>
      </div>
    </div>
  );
};

export default PaymentMethods;
