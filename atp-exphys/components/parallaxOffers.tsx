import React from "react";

const ParallaxFooter = () => {
  return (
    <div
      id="ReachUs"
      className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[400px] lg:h-[500px] bg-scroll md:bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/mountainrange.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/10 dark:bg-black/20 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-white text-center max-w-[90%] sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>

        <div className="space-y-4">
          <a
            href="mailto:Info@ATP-EXphys.com"
            className="block px-6 py-3 bg-blue-500 bg-opacity-70 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 text-center font-medium"
          >
            Email: Info@ATP-EXphys.com
          </a>

          <a
            href="https://www.instagram.com/move_atp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-70 text-white rounded-md hover:from-pink-600 hover:to-purple-700 transition-colors duration-300 text-center font-medium"
          >
            Instagram: @move_atp
          </a>
        </div>

        <p className="mt-6 text-gray-300">
          Reach out to us for more information about our services!
        </p>
      </div>
    </div>
  );
};

export default ParallaxFooter;
