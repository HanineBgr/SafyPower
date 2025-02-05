import React from "react";

// Sample user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  address: "123 Main St, Springfield, USA",
};

const UserInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">User Information</h2>
      
      {/* User Info */}
      <div className="mb-4">
        <p className="text-sm text-gray-800">
          <span className="font-medium">Name: </span>
          {userData.name}
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-800">
          <span className="font-medium">Email: </span>
          {userData.email}
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-800">
          <span className="font-medium">Phone: </span>
          {userData.phone}
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-800">
          <span className="font-medium">Address: </span>
          {userData.address}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
