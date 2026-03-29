import React from "react";
import {
  FaGasPump,
  FaCogs,
  FaBookmark,
  FaMotorcycle,
  FaFacebook,
  FaMobile,
  FaInstagram,
  FaMapMarkedAlt,
  FaCar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    
    <div className="w-full min-h-auto ">
      
      {/* 🔥 HERO SECTION */}
      <section className="text-center py-10 px-4 md:px-16">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Welcome{" "}
          <span className="px-2 rounded text-blue-300">
            Yatri
          </span>{" "}
          Vehicles Available In Exciting Destinations.
        </h1>
          <div className="flex justify-center items-center gap-6 mt-6">

            <FaMotorcycle className="text-cyan-300  text-2xl" />
         <FaCar className="text-cyan-300 text-2xl" />

        </div>
        {/* SEARCH BAR */}
        <div className="mt-8 bg-white shadow-lg rounded-4xl flex flex-col md:flex-row items-center p-3 gap-3 max-w-3xl mx-auto">
            <FaMapMarkedAlt className="text-green-500"/>
          <input
            type="text"
            placeholder="Pickup"
            className="flex-1 px-4 py-2 outline-none"
          />  <FaMapMarkedAlt className="text-red-500"/>
         
           <input
            type="text"
            placeholder="Dropdown"
            className="flex-1 px-4 py-2 outline-none"
          />
         
         

       <button  
       onClick={() => navigate("ride ")}
   className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
>
  <FaBookmark /> Book Now
</button>
        </div>

        {/* CAR IMAGE */}
        <img
          src="https://p.kindpng.com/picc/s/722-7223309_bike-taxi-png-transparent-png.png"
          alt=""
          className="mx-auto mt-10 w-70 max-w-3xl"
        />
      </section>

      {/* 💼 FEATURES */}
      <section className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-blue-500 font-medium">
            Your Trusted Travel Partner
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Helping You Every Step Of The Way
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold">Quick Service</h3>
              <p className="text-sm text-gray-500">
                Instant bookings with fast service.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold">Wide Selection</h3>
              <p className="text-sm text-gray-500">
                Choose from bikes, cars & more.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold">Transparent Pricing</h3>
              <p className="text-sm text-gray-500">
                No hidden charges.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-gray-500">
                Always here to help you.
              </p>
            </div>

          </div>
        </div>

        {/* SIDE IMAGES */}
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            className="rounded-xl w-1/2 object-cover"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763"
            className="rounded-xl w-1/2 object-cover"
            alt=""
          />
        </div>

      </section>

      {/* 🚗 CAR LIST */}
      <section className="px-6 md:px-16 py-16">
        <h1 className="text-2xl font-bold  text-blue-500">Vechile categories<hr></hr></h1>
        <h2 className="text-xl font-bold mb-10 ">
          Start riding with anyone
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              name: "Bike",
              price: "₹50",
              img: "https://pngimg.com/uploads/motorcycle/motorcycle_PNG5349.png",
            },
            {
              name: "Auto",
              price: "₹80",
              img : "https://tse2.mm.bing.net/th/id/OIP.vxnEYSPaTRkjJm_3ic6_cAHaEp?rs=1&pid=ImgDetMain&o=7&rm=3",
              
            },

            {
              name: "Car",
              price: "₹150",
              img: "https://tse4.mm.bing.net/th/id/OIP.D_o4MlnEFDlRrHiNpRzQzwHaD_?rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              name: "Truck",
              price: "₹300",
              img: "https://pngimg.com/uploads/truck/truck_PNG16257.png",
            },
          ].map((car, i) => (
            <div
              key={i}
              className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img src={car.img} alt="" className="h-24 mx-auto" />

              <h3 className="font-semibold mt-3">{car.name}</h3>
              <p className="text-blue-500">{car.price}/ride</p>

              <div className="flex justify-between text-sm mt-2 text-gray-500">
                <span><FaCogs /> Auto</span>
                <span><FaGasPump /> Petrol</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🦶 FOOTER */}
      <footer className=" bg-amber-50 text-black px-6 ">

  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* 🔹 LEFT - BRAND */}
    <div>
      <div className="flex items-center gap-2 text-2xl font-bold">
        <FaMotorcycle className="text-blue-500" />
        Yatri
      </div>

      <p className="text-gray-400 mt-3 text-sm">
        Easy and fast ride booking platform for your daily travel needs.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 mt-4 text-lg">
        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        <FaMobile className="hover:text-green-400 cursor-pointer" />
      </div>
    </div>

    {/* 🔹 CENTER - COMPANY */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Company</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Careers</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* 🔹 RIGHT - SUPPORT */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Support</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li className="hover:text-white cursor-pointer">Help Center</li>
        <li className="hover:text-white cursor-pointer">Safety Instructions</li>
        <li className="hover:text-white cursor-pointer">Contact Support</li>
        <li className="hover:text-white cursor-pointer">Accessibility</li>
        <li className="hover:text-white cursor-pointer">Cancellation</li>
      </ul>
    </div>

    {/* 🔹 EXTREME RIGHT - SUBSCRIBE */}
    <div>
      <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>

      <p className="text-gray-400 text-sm mb-3">
        Subscribe for latest updates and offers
      </p>

      <div className="flex">
        <input
          type="email"
          placeholder="Enter email"
          className="px-3 py-2 rounded-l bg-gray-800 text-white outline-none w-full"
        />

        <button className="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  {/* 🔻 BOTTOM */}
  <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
    © 2026 Yatri. All rights reserved.
  </div>

</footer>

    </div>
  );
}

export default Home;
