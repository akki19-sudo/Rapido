import React, { useState, useEffect } from "react";
import {
  FaMotorcycle,
  FaCar,
  FaTaxi,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";

const RideOptions = () => {

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selectedRide, setSelectedRide] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [timer, setTimer] = useState(180);
  const [distance, setDistance] = useState(0);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const priceRates = {
    Bike: 8,
    Auto: 12,
    "Mini Car": 18
  };

  const rides = [
    {
      id: 1,
      name: "Bike",
      time: "3 min",
      driver: "Rahul",
      rating: "4.9",
      vehicle: "Hero Splendor",
      number: "DL 8S AB 2341",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      icon: <FaMotorcycle size={22} />
    },
    {
      id: 2,
      name: "Auto",
      time: "5 min",
      driver: "Amit",
      rating: "4.7",
      vehicle: "Bajaj Auto",
      number: "DL 1R 9823",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      icon: <FaTaxi size={22} />
    },
    {
      id: 3,
      name: "Mini Car",
      time: "6 min",
      driver: "Sandeep",
      rating: "4.8",
      vehicle: "WagonR",
      number: "DL 3C 8831",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
      icon: <FaCar size={22} />
    }
  ];

 
  useEffect(() => {
    if (pickup && drop) {
      const dist = (pickup.length + drop.length) % 10 + 2;
      setDistance(dist);
    }
  }, [pickup, drop]);

  const getPrice = (rideName) => {
    const rate = priceRates[rideName];
    return `₹${distance * rate}`;
  };

  const handleConfirmRide = () => {
    if (!pickup || !drop) {
      setMessage("⚠️ Enter pickup & drop location");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    if (!selectedRide) {
      setMessage("⚠️ Select a ride");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    setTimer(180);
    setShowPopup(true);
  };

  // Timer
  useEffect(() => {
    if (!showPopup) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [showPopup]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="pt-8 min-h-screen ">
            <h1 className="text-2xl text-blue-300 font-bold">Book Ride</h1>
            <p className="ml-8 font-sans">Insert your current location to pickup and dropdown to before starting ride app correctly properly  to giving fear amount to not including extra charges    </p>
        
       
           
      
      {/* Toast */}
      {showToast && (
        <div className="fixed top-30 right-5 bg-red-500 text-white px-5 py-2 rounded z-60">
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">

        {/* LEFT */}
        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            Book Your Ride
          </h2>

          {/* Pickup */}
          <div className="flex items-center gap-3 border p-3 rounded-lg mb-4">
            <FaMapMarkerAlt className="text-green-500" />
            <input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* Drop */}
          <div className="flex items-center gap-3 border p-3 rounded-lg mb-4">
            <FaMapMarkerAlt className="text-red-500" />
            <input
              type="text"
              placeholder="Drop location"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* Distance */}
          {distance > 0 && (
            <p className="text-sm text-gray-500 mb-4">
              📍 Distance: <b>{distance} km</b>
            </p>
          )}

          {/* Ride Options */}
          <div className="space-y-4">
            {rides.map((ride) => (
              <div
                key={ride.id}
                onClick={() => setSelectedRide(ride)}
                className={`p-4 border rounded-xl cursor-pointer
                ${
                  selectedRide?.id === ride.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "hover:shadow-md"
                }`}
              >
                <div className="flex justify-between items-center">

                  <div className="flex gap-4 items-center">
                    <div className="text-emerald-500">
                      {ride.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold">{ride.name}</h3>
                      <p className="text-sm text-gray-500">
                        {ride.time}
                      </p>
                    </div>
                  </div>

                  <div className="font-bold">
                    {getPrice(ride.name)}
                  </div>
                </div>

                {selectedRide?.id === ride.id && (
                  <div className="mt-4 border-t pt-4">

                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="font-semibold">{ride.driver}</p>
                        <p className="text-gray-500">{ride.vehicle}</p>
                      </div>

                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar /> {ride.rating}
                      </div>
                    </div>

                    <button
                      onClick={handleConfirmRide}
                      className="mt-4 w-full bg-black text-white py-2 rounded-lg"
                    >
                      Confirm Ride
                    </button>

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ REAL GOOGLE MAP */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden h-[300px] md:h-full">

          {pickup && drop ? (
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${pickup} to ${drop}&output=embed`}
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Enter pickup & drop to view map
            </div>
          )}

        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">

          <div className="bg-white w-[320px] rounded-xl p-6 text-center">

            <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />

            <h2 className="font-bold text-lg">
              Ride Confirmed 🎉
            </h2>

            <p className="mt-2">{selectedRide?.driver}</p>
            <p className="text-sm text-gray-500">
              {selectedRide?.vehicle}
            </p>

            <p className="mt-2 font-bold text-emerald-500">
              {getPrice(selectedRide?.name)}
            </p>

            <p className="mt-2 text-sm">
              ⏱ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full bg-black text-white py-2 rounded"
            >
              OK
            </button>
            
          </div>


          {/* find location */}

        </div>
      )}

    </div>
  );
};

export default RideOptions;
