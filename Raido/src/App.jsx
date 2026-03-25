import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Componet/Header";
import Home from "./Componet/Home";
import RideOptions from "./Componet/Ride-option";
import DriverDashboard from "./Componet/dashboard";
import Safety from "./Componet/Safety";
import About from "./Componet/About";
import Loader from "./Componet/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />

      {/* ✅ Responsive Layout Wrapper */}
      <div className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ride" element={<RideOptions />} />
          <Route path="/Safety" element={<Safety />} />
          <Route path="/About" element={<About />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;