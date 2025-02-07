import React from "react";

const BillingInformation = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-xl">
      <h2 className="text-lg font-bold">Billing information</h2>
      <div className="mt-4 space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold">Oliver Liam</h3>
            <p className="text-sm text-gray-600">Company name: Look Design</p>
            <p className="text-sm text-gray-600">Email: company@company.fr</p>
            <p className="text-sm text-gray-600">VAT Number: FR9864983</p>
          </div>
          <button className="text-red-500 text-sm font-medium">Delete</button>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold">Emma Smith</h3>
            <p className="text-sm text-gray-600">Company name: Creative Studio</p>
            <p className="text-sm text-gray-600">Email: emma@creativestudio.com</p>
          </div>
          <button className="text-red-500 text-sm font-medium">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BillingInformation;
