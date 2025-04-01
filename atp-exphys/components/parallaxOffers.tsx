import React from "react";

const ParallaxFooter = () => {
  return (
    <div
      className="h-[500px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('sunnyjog.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-6 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold">Our Offers</h2>
      </div>
    </div>
  );
};

export default ParallaxFooter;