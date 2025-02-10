import React from "react";
import { Bell, XCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Message Received",
    description: "You have a new message from John.",
    time: "5 min ago",
    type: "info",
  },
  {
    id: 2,
    title: "System Alert",
    description: "Your system storage is almost full.",
    time: "10 min ago",
    type: "alert",
  },
  {
    id: 3,
    title: "Scheduled Maintenance",
    description: "The system will go down for maintenance at 12 AM.",
    time: "1 hour ago",
    type: "update",
  },
];

const NotificationCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Bell className="text-blue-500 w-6 h-6" />
          Notifications
        </h2>
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => alert("All notifications cleared!")}
        >
          Clear All
        </button>
      </div>

      {/* Notifications List */}
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`flex items-start gap-4 p-4 rounded-lg shadow-sm ${
              notification.type === "info"
                ? "bg-blue-50 border-l-4 border-blue-500"
                : notification.type === "alert"
                ? "bg-red-50 border-l-4 border-red-500"
                : "bg-yellow-50 border-l-4 border-yellow-500"
            }`}
          >
            <div className="flex-shrink-0">
              {notification.type === "info" && (
                <Bell className="w-6 h-6 text-blue-500" />
              )}
              {notification.type === "alert" && (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
              {notification.type === "update" && (
                <Bell className="w-6 h-6 text-yellow-500" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                {notification.title}
              </h3>
              <p className="text-sm text-gray-600">{notification.description}</p>
              <span className="text-xs text-gray-400">{notification.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCard;
