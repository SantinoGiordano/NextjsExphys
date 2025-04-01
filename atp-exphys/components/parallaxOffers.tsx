import React from "react";

const ParallaxFooter = () => {
  return (
    <div
      className="h-[500px] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('mountainrange.jpg')" }}
    >
      <div className="bg-opacity-50 p-6 text-white text-center rounded-lg">
      </div>
    </div>
  );
};

export default ParallaxFooter;