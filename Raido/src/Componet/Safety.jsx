import React from "react";
import {FaMobile,  FaTired, FaShieldAlt } from "react-icons/fa";

function Safety() {
  const callEmergency = () => {
    window.location.href = "tel:112";
  };

  return (
    <div className="min-h-screen text-black px-6 py-10 text-2xl">

      {/* Header */}
      <div className=" text-2xl flex items-center gap-3 ">
        <FaShieldAlt className="text-emerald-500 w-6 h-6 sm:w-8 sm:h-8" />
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
          Your Safety Matters
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 mb:grid-cols-2 gap-6">

        {/* Passenger Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5">
          <h2 className="text-base sm:text-lg font-semibold text-emerald-600 mb-3">
            🚗 For Passengers
          </h2>

          <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
            <li>✔ Confirm driver name, photo & vehicle number.</li>
            <li>✔ Share trip details with trusted contacts.</li>
            <li>✔ Sit in the back seat for safety.</li>
            <li>✔ Track your ride live.</li>
            <li>✔ Avoid sharing personal info.</li>
          </ul>

          <button
            onClick={callEmergency}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm sm:text-base"
          >
            <FaMobile size={16} />
            Emergency Help
          </button>
        </div>

        {/* Driver Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5">
          <h2 className="text-base sm:text-lg font-semibold text-blue-600 mb-3">
            🧑‍✈️ For Drivers
          </h2>

          <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
            <li>✔ Verify passenger before trip.</li>
            <li>✔ Follow traffic rules.</li>
            <li>✔ Maintain vehicle hygiene.</li>
            <li>✔ No phone while driving.</li>
            <li>✔ Respect passengers.</li>
          </ul>
        </div>

      </div>

      {/* Warning */}
      <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-3 sm:p-4 rounded-lg flex gap-2 sm:gap-3">
        <FaTired className="text-yellow-600 w-5 h-5 sm:w-6 sm:h-6" />
        <p className="text-xs sm:text-sm text-gray-800">
          If you feel unsafe, use the emergency button or contact authorities immediately.
        </p>
      </div>

      {/* Floating SOS Button */}
      <button
        onClick={callEmergency}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full shadow-xl text-sm sm:text-base"
      >
        🚨 SOS
      </button>

    </div>
  );
}

export default Safety;