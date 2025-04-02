import React from "react";

const ParallaxOffers = () => {
  return (
    <div
      id="offers"
      className="relative min-h-[300px] md:h-[400px] lg:h-[500px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/sunnyjog.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/10 dark:bg-black/20 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg text-white text-center transition-transform duration-500 hover:scale-105 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold">Our Offers</h2>
        <p className="mt-2 text-lg text-gray-200">
          Discover the best deals tailored for you
        </p>
      </div>
    </div>
  );
};

export default ParallaxOffers;
