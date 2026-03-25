import React, { useState, useRef } from "react";
import { FaCar, FaMotorcycle, FaTaxi } from "react-icons/fa";

const Home = () => {
  const [rideType, setRideType] = useState("");
  const [showRides, setShowRides] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // ✅ NEW STATES
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const rideRef = useRef(null);

  const rides = [
    {
      id: 1,
      type: "Bike",
      price: "₹50",
      driver: "Rahul",
      vehicle: "Hero Splendor",
      number: "DL 8S AB 2341",
      rating: "4.9",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      type: "Auto",
      price: "₹80",
      driver: "Amit",
      vehicle: "Bajaj Auto",
      number: "DL 1R 9823",
      rating: "4.7",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      type: "Car",
      price: "₹140",
      driver: "Sandeep",
      vehicle: "WagonR",
      number: "DL 3C 8831",
      rating: "4.8",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  // ✅ FIND RIDE LOGIC
  const handleFindRide = () => {
    if (!pickup || !drop) {
      setMessage("⚠️ Please enter pickup & drop location");
      setShowToast(true);

      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    setShowRides(true);

    // scroll to vehicle list
    setTimeout(() => {
      rideRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const confirmRide = (ride) => {
    setSelectedRide(ride);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-10">

      {/* Toast */}
      {showToast && (
        <div className="fixed top-20 right-5 bg-red-500 text-white px-4 py-2 rounded-lg z-50">
          {message}
        </div>
      )}

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold px-4 sm:px-10 mb-4">
        Welcome to <span className="text-emerald-500">Yatri</span>
      </h1>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10">

        {/* LEFT */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Book Your Ride
          </h2>

          <input
            type="text"
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full border p-2 sm:p-3 rounded-lg mb-3"
          />

          <input
            type="text"
            placeholder="Drop location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="w-full border p-2 sm:p-3 rounded-lg mb-4"
          />

          {/* Ride Type */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm sm:text-base">
            <label className="flex items-center gap-2">
              <FaMotorcycle />
              <input
                type="radio"
                checked={rideType === "bike"}
                onChange={() => setRideType("bike")}
              />
              Bike
            </label>

            <label className="flex items-center gap-2">
              <FaTaxi />
              <input
                type="radio"
                checked={rideType === "auto"}
                onChange={() => setRideType("auto")}
              />
              Auto
            </label>

            <label className="flex items-center gap-2">
              <FaCar />
              <input
                type="radio"
                checked={rideType === "car"}
                onChange={() => setRideType("car")}
              />
              Car
            </label>
          </div>

          {/* Button */}
          <button
            onClick={handleFindRide}
            disabled={!pickup || !drop}
            className={`w-full py-2 sm:py-3 rounded-lg transition 
              ${
                pickup && drop
                  ? "bg-black text-white hover:text-emerald-400"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Find Ride
          </button>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3">Available Rides</h3>

            <div className="space-y-2 text-sm sm:text-base">
              <div className="flex justify-between">
                <span className="font-bold">Bike</span>
                <span>₹40 - ₹70</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Auto</span>
                <span>₹60 - ₹120</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Car</span>
                <span>₹120 - ₹200</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-500 text-white p-4 sm:p-6 rounded-xl shadow-lg">
            🎁 20% OFF First Ride (YATRI20)
          </div>

          <div className="bg-orange-500 text-white p-4 sm:p-6 rounded-xl shadow-lg">
            🎁 10% OFF Car Ride (YATRI08)
          </div>
        </div>
      </div>

      {/* Vehicle List */}
      {showRides && (
        <div ref={rideRef} className="max-w-xl mx-auto mt-6 px-4 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Vehicle List
          </h2>

          {rides.map((ride) => (
            <div
              key={ride.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={ride.photo}
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{ride.type}</h3>
                  <p className="text-xs text-gray-500">
                    {ride.driver} ⭐ {ride.rating}
                  </p>
                </div>
              </div>

              <button
                onClick={() => confirmRide(ride)}
                className="bg-emerald-500 text-white px-3 py-1 rounded"
              >
                {ride.price}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm text-center">
            <h2 className="text-lg font-bold mb-4">
              🎉 Ride Confirmed
            </h2>

            <p className="font-semibold">{selectedRide?.driver}</p>
            <p>{selectedRide?.vehicle}</p>
            <p>{selectedRide?.number}</p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-black text-white py-2 mt-4 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;