import React from "react";

const ParallaxFooter = () => {
  return (
    <div
      className="h-[500px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('mountainrange.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
        
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