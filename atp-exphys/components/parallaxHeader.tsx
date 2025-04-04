import React from "react";

const ParallaxHeader = () => {
  return (
    <div
      id="header"
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/shadowrunner.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/10 dark:bg-black/20 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-white text-center transition-transform duration-500 hover:scale-105 max-w-[90%] sm:max-w-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Access The Potential
        </h2>
      </div>
    </div>
  );
};

export default ParallaxHeader;
