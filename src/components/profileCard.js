import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

const ProfileCard = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleSettingsClick = () => {
    setShowSettingsModal(true);
  };

  const handleProfileInfoClick = () => {
    setShowInfoModal(true);
  };

  const closeSettingsModal = () => {
    setShowSettingsModal(false);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-auto" style={{ maxWidth: "500px", height: "170px" }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logos/logo.png" alt="Logo" className="w-12 h-12" />
          <div>
            <h2 className="text-lg font-bold">Hanine Bouguerra</h2>
            <p className="text-gray-500">bouguerrahanine4@gmail.com</p>
          </div>
        </div>
        <FaPen className="text-gray-500 cursor-pointer text-sm" />
      </div>

      <div className="flex mt-6 gap-4">
        <button
          onClick={handleSettingsClick}
          className="flex-1 py-2 border rounded-full text-center font-medium"
        >
          Profile settings
        </button>
        <button
          onClick={handleProfileInfoClick}
          className="flex-1 py-2 border rounded-full text-center font-medium"
        >
          Profile informations
        </button>
      </div>

      {showSettingsModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeSettingsModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">Platform Settings</h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Account</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Email me when someone follows me.</span>
                <input type="checkbox" className="toggle-switch" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Email me when someone answers my post.</span>
                <input type="checkbox" className="toggle-switch" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email me when someone mentions me.</span>
                <input type="checkbox" className="toggle-switch" defaultChecked />
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Application</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">New launches and projects.</span>
                <input type="checkbox" className="toggle-switch" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Monthly product changes.</span>
                <input type="checkbox" className="toggle-switch" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Subscribe to the newsletter.</span>
                <input type="checkbox" className="toggle-switch" defaultChecked />
              </div>
            </div>

            <button
              onClick={closeSettingsModal}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showInfoModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeInfoModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">Profile Information</h3>
            <p className="text-gray-700 mb-4">
              Hi,
              <br />
              I am contacting you following the charging of my battery which failed due to a bad placement of the battery. I am checking the placement of the battery to avoid wasting time.
            </p>
            <p className="text-gray-800">
              <span className="font-bold">Fullname:</span> Omar Hiopil
            </p>
            <p className="text-gray-800">
              <span className="font-bold">Mobile phone:</span> +33 656 64 14 18
            </p>
            <p className="text-gray-800">
              <span className="font-bold">Email:</span> email.mail@gmail.fr
            </p>
            <p className="text-gray-800">
              <span className="font-bold">Address:</span> 23 voie du succès 3000
            </p>
            <button
              onClick={closeInfoModal}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
