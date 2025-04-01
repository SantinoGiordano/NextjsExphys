import React from "react";

const ParallaxOffers = () => {
  return (
    <div
      className="relative h-[500px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/sunnyjog.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      {/* Glassmorphism-style Content Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg text-white text-center transition-transform duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold tracking-wide">Our Offers</h2>
        <p className="mt-2 text-lg text-gray-200">Discover the best deals tailored for you</p>
      </div>
    </div>
  );
};

export default ParallaxOffers;
