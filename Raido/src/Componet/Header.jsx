import React, { useState } from "react";
import {
  FaMotorcycle,
  FaBars,
  FaTimes,
  FaUser,
  FaLock,
  FaMailBulk,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("user");

  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Ride", path: "/ride" },
    { name: "Safety", path: "/safety" },
    { name: "About", path: "/about" },
  ];

  
  const handleSubmit = (e) => {
    e.preventDefault();

    let msg = "";

    if (userType === "driver") {
      msg = isLogin
        ? "Driver Logged in ✅"
        : "Driver Registered 🎉";

      navigate("/driver-dashboard");
    } else {
      msg = isLogin
        ? "User Logged in ✅"
        : "User Registered 🎉";
      navigate("/");
    }

    setIsAuthenticated(true);
    setMessage(msg);
    setShowToast(true);
    setShowModal(false);

    setTimeout(() => setShowToast(false), 3000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser("");
    setEmail("");
    setPassword("");

    setMessage("Logged out successfully 👋");
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);

    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <nav className=" max-h-screen fixed w-full top-0 left-0 z-50 bg-black bg-opacity-70 backdrop-blur-lg text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-emerald-400 text-xl font-bold"
          >
            <FaMotorcycle />
            <span>Yatri</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="hover:text-emerald-400">
                {link.name}
              </Link>
            ))}

            {/* ✅ Login / Logout Toggle */}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 font-semibold">
                  👋 {username}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="bg-emerald-400 text-black px-4 py-2 rounded-full"
                onClick={() => setShowModal(true)}
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black flex flex-col items-center gap-6 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* ✅ Mobile Login/Logout */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-6 py-2 rounded-full"
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-emerald-400 text-black px-6 py-2 rounded-full"
                onClick={() => {
                  setMenuOpen(false);
                  setShowModal(true);
                }}
              >
                Login
              </button>
            )}
          </div>
        )}
      </nav>

      {/* ✅ Toast */}
      {showToast && (
        <div className="fixed top-20 right-5 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-center text-emerald-500 mb-4">
              {isLogin ? "Login" : "Register"}
            </h2>

            {/* User Type */}
            <div className="flex justify-between mb-4">
              <label>
                <input
                  type="radio"
                  checked={userType === "user"}
                  onChange={() => setUserType("user")}
                />{" "}
                User
              </label>
              <label>
                <input
                  type="radio"
                  checked={userType === "driver"}
                  onChange={() => setUserType("driver")}
                />{" "}
                Driver
              </label>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <FaUser />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                  className="w-full outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <FaMailBulk />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <FaLock />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none"
                  required
                />
              </div>

              <button className="bg-emerald-500 text-white py-3 rounded-lg">
                {isLogin ? "Login" : "Register"}
              </button>

              <p className="text-center text-sm">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <span
                  className="text-emerald-500 cursor-pointer ml-2"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign Up" : "Login"}
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;