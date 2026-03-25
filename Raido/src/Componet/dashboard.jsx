import React, { useState } from "react";
import { FaStar, FaCheck, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  // Sample driver data
  const [driver, setDriver] = useState({
    name: "",
    vehicle: "",
    number: "",
    mobile: " ",
    email: "",
    rating: "",
  });

  // Sample ride requests
  const [rides, setRides] = useState([
    { id: 1, type: "Bike", pickup: "Connaught Place", drop: "India Gate", fare: 50, rating: 4.9, date: "2026-03-07", status: "pending" },
    { id: 2, type: "Auto", pickup: "Rajiv Chowk", drop: "New Delhi Railway", fare: 70, rating: 4.7, date: "2026-03-07", status: "pending" },
    { id: 3, type: "Mini Car", pickup: "Airport", drop: "CP", fare: 120, rating: 4.8, date: "2026-03-07", status: "pending" },
  ]);

  // Accept/Reject handlers
  const handleAccept = (id) => {
    setRides(rides.map(r => r.id === id ? { ...r, status: "accepted" } : r));
  };
  const handleReject = (id) => {
    setRides(rides.map(r => r.id === id ? { ...r, status: "rejected" } : r));
  };

  // Income calculation
  const dailyIncome = rides.filter(r => r.status === "accepted").reduce((sum, r) => sum + r.fare, 0);
  const monthlyIncome = dailyIncome * 30; 

  return (
    <div className="min-h-screen bg-gray-100 pt-20 p-4 md:p-10">
      <h1 className=" text-2xl font-bold m-5">Driver Dashboard</h1>


      {/* Earnings Info */}
      <div className="max-w-md mx-auto mb-6 flex justify-between gap-4">
        <div className="bg-white p-4 rounded-xl shadow w-1/2 text-center">
          <p className="text-gray-500 text-sm">Daily Income</p>
          <p className="font-bold text-lg">₹{dailyIncome}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow w-1/2 text-center">
          <p className="text-gray-500 text-sm">Monthly Income</p>
          <p className="font-bold text-lg">₹{monthlyIncome}</p>
        </div>
      </div>

      {/* Ride Requests */}
      <div className="bg-white p-4 rounded-xl shadow-lg max-w-md mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Ride Requests</h3>
        <div className="space-y-3">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Ride Info */}
              <div className="flex flex-col sm:flex-1 gap-1">
                <p className="font-semibold text-gray-800">{ride.type}</p>
                <p className="text-gray-500 text-sm">📍 {ride.pickup} → {ride.drop}</p>
                <p className="text-gray-500 text-sm">💰 Fare: ₹{ride.fare} • ⭐ {ride.rating}</p>
                <p className="text-gray-400 text-xs">🗓 {ride.date}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-2 sm:mt-0">
                {ride.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAccept(ride.id)}
                      className="bg-emerald-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 text-sm"
                    >
                      <FaCheck /> Accept
                    </button>
                    <button
                      onClick={() => handleReject(ride.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 text-sm"
                    >
                      <FaTimes /> Reject
                    </button>
                  </>
                )}
                {ride.status === "accepted" && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Accepted
                  </span>
                )}
                {ride.status === "rejected" && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Rejected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;