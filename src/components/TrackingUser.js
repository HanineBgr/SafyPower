import React from "react";
import { FaStar } from "react-icons/fa";

const userData = [
  {
    id: "12345",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    chargingTime: "2 hours",
    rating: 4,
  },
  {
    id: "67890",
    startTime: "1:00 PM",
    endTime: "3:00 PM",
    chargingTime: "2 hours",
    rating: 3,
  },
  {
    id: "11223",
    startTime: "5:00 PM",
    endTime: "7:00 PM",
    chargingTime: "2 hours",
    rating: 5,
  },
];

const renderStars = (rating) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar key={i} size={15} color={i <= rating ? "#FFD700" : "#D3D3D3"} />
    );
  }
  return stars;
};

const TrackingUser = () => {
  return (
    <div className="p-6 bg-white shadow-xl rounded-xl max-w-full mx-auto">
      <h2 className="text-sm font-semibold text-gray-800 mb-6">
        Individual User Tracking
      </h2>
      <div className="overflow-y-auto max-h-[400px] scrollbar-thin">
        {/* Custom scrollbar applied */}
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-gray-600">User ID</th>
              <th className="px-6 py-4 text-left text-gray-600">Start Time</th>
              <th className="px-6 py-4 text-left text-gray-600">End Time</th>
              <th className="px-6 py-4 text-center text-gray-600">Charging Time</th>
              <th className="px-6 py-4 text-left text-gray-600">Rating</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-800">{user.id}</td>
                <td className="px-6 py-4 text-gray-800">{user.startTime}</td>
                <td className="px-6 py-4 text-gray-800">{user.endTime}</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-block text-gray-800 text-sm font-medium px-3 py-0.5 rounded-lg border border-gray-300 bg-transparent">
                    {user.chargingTime}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-800">
                  <div className="flex">{renderStars(user.rating)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackingUser;
