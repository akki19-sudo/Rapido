import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (userType === "driver") {
      alert(`Driver Logged in\nEmail: ${email}`);
      navigate("/driver-dashboard"); 
    } else {
      alert(`User Logged in\nEmail: ${email}`);
      navigate("/"); 
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-500">
          Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* User Type */}
          <div className="flex justify-between mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="user"
                checked={userType === "user"}
                onChange={() => setUserType("user")}
              />
              User
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="driver"
                checked={userType === "driver"}
                onChange={() => setUserType("driver")}
              />
              Driver
            </label>
          </div>

          {/* Email Input */}
          <div className="flex items-center gap-3 border p-3 rounded-lg">
            <FaUser className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center gap-3 border p-3 rounded-lg">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-emerald-500 text-white py-3 rounded-lg mt-4 hover:bg-emerald-600 transition"
          >
            Login
          </button>

          <p className="text-sm text-gray-500 text-center mt-2">
            Don't have an account?{" "}
            <span className="text-emerald-500 cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;