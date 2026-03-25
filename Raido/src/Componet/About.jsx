import React from "react";
import { FaMotorcycle } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen text-black px-6 py-10 text-xl ">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2 text-emerald-400 text-3xl font-bold m-5">
        <FaMotorcycle />
        <span>Yatri</span>
      </div>
      <hr></hr>

      {/* Hero Section */}
      <div className="mt-5 max-w-2xl">
        <h1 className="text-xl font-bold leading-tight">
          Book your ride <span className="text-emerald-400">safe & secure</span>
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          Yatri is your trusted ride partner. We ensure fast, reliable, and affordable transportation
          with top-notch safety and comfort.
        </p>
      </div>

      {/* Card Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 ">

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg font-semibold text-emerald-400">🚀 Fast Booking</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Book your ride instantly with just a few clicks.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg font-semibold text-emerald-400">🔒 Secure Rides</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Your safety is our top priority with verified drivers.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg font-semibold text-emerald-400">💸 Affordable</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Get the best prices with no hidden charges.
          </p>
        </div>

      </div>

      {/* CTA Section */}
      
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-lg font-semibold text-emerald-400"> 😊Quiery</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Content with team of Yatri .
          </p>
        </div>

    </div>
  );
}

export default About;