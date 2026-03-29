import React from "react";
import {
  FaMotorcycle,
  FaCar,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* 🔥 HERO */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Yatri 
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Yatri is your trusted ride partner designed to make travel easy,
          safe, and affordable for everyone.
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-8 mt-6 text-3xl">
          <FaMotorcycle />
          <FaCar />
        </div>
      </section>

      {/* 💡 ABOUT CONTENT */}
      <section className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4">
            Yatri is a smart ride booking platform that connects users with
            reliable drivers in seconds. Whether you need a bike, auto, or car,
            we provide fast and affordable travel options.
          </p>

          <p className="text-gray-600">
            Our mission is to simplify transportation with technology,
            ensuring safety, transparency, and comfort for every user.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.ToCh-eglylp4nKeWuHBq4gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            className="rounded-xl shadow-md"
          />
        </div>

      </section>

      {/* 🚀 FEATURES / VALUES */}
      <section className="px-6 md:px-16 pb-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Yatri?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: <FaRocket />,
              title: "Fast Booking",
              desc: "Book your ride instantly with just one click.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Safe Rides",
              desc: "Verified drivers and secure ride experience.",
            },
            {
              icon: <FaMapMarkedAlt />,
              title: "Real-Time Tracking",
              desc: "Track your ride live with accurate GPS.",
            },
            {
              icon: <FaUsers />,
              title: "Trusted by Users",
              desc: "Thousands of happy customers trust Yatri daily.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-blue-500 text-3xl mb-3 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* 📊 STATS */}
      <section className=" text-black py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">

          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p className="text-gray-400">Rides Completed</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">5K+</h2>
            <p className="text-gray-400">Happy Users</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-400">Drivers</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">4.8★</h2>
            <p className="text-gray-400">Rating</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
