import React from "react";
import {
  FaShieldAlt,
  FaUserCheck,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaMotorcycle,
  FaCar,
  FaCheckCircle,
} from "react-icons/fa";

const Safety = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* 🔥 HERO */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Safety is Our Priority 
        </h1>

        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We ensure every ride is safe, secure and comfortable with verified drivers and real-time tracking.
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-8 mt-6 text-3xl">
          <FaMotorcycle />
          <FaCar />
        </div>
      </section>

      {/* 🛡️ SAFETY FEATURES */}
      <section className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10">

        {[
          {
            icon: <FaUserCheck />,
            title: "Verified Drivers",
            desc: "All drivers are background checked and verified for your safety.",
          },
          {
            icon: <FaMapMarkedAlt />,
            title: "Live Ride Tracking",
            desc: "Track your ride in real-time and share with your family.",
          },
          {
            icon: <FaPhoneAlt />,
            title: "Emergency Support",
            desc: "24/7 helpline support available anytime during your ride.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Secure Payments",
            desc: "Safe and encrypted payment system with no hidden charges.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex gap-4 items-start"
          >
            <div className="text-blue-500 text-2xl">{item.icon}</div>

            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}

      </section>

      {/* 📋 SAFETY TIPS */}
      <section className="px-6 md:px-16 pb-16">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Safety Tips for Riders
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Always verify driver details before starting ride",
            "Share ride details with friends or family",
            "Wear helmet or seatbelt at all times",
            "Avoid sharing personal information",
            "Use in-app chat/call for communication",
            "Report any suspicious activity immediately",
          ].map((tip, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-500" />
              <p className="text-sm">{tip}</p>
            </div>
          ))}

        </div>

      </section>

      {/* 📞 EMERGENCY */}
      <section className=" text-black py-12 text-center">
        <h2 className="text-2xl font-bold">Emergency Help</h2>
        <p className="text-gray-400 mt-2">
          Call support immediately if you feel unsafe
        </p>

        <button className="mt-5 bg-red-500 px-6 py-2 rounded-full hover:bg-red-600 transition">
          Call Support
        </button>
      </section>

    </div>
  );
};

export default Safety;
