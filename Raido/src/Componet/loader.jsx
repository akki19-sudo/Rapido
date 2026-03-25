import React from "react";
import { FaMotorcycle } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-white overflow-hidden relative">
      
      {/* Bike + Shadow Effect */}
      <div className="relative">
        <div className="absolute text-6xl opacity-30 blur-sm translate-x-2">
          <FaMotorcycle  className="animate-spin-slow"/>
        </div>

        <div className="text-6xl animate-bike">
          <FaMotorcycle className="animate-bounce" />
      
        </div>
      </div>

      {/* Loading Text */}
      <h1 className="text-emerald-400 text-2xl font-bold">Yatri</h1>
      <h2 className="mt-6 text-lg tracking-wide animate-pulse">
        Starting your ride...
      </h2>

    </div>
  );
};

export default Loader;