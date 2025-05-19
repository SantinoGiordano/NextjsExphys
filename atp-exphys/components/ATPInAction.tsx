// import React from "react";
// import Image from "next/image";
// const ATPinAction = () => {




//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//       {images.map((src, index) => (
//         <Image
//           key={index}
//           src={src}
//           width={200}
//           height={200}
//           alt={`Gallery ${index + 1}`}
//           className="w-full h-auto rounded shadow"
//         />
//       ))}
//     </div>
//   );
// };

// export default ATPinAction;

import { useState } from "react";
import Image from "next/image";

type Art = {
  url: string;
  name: string;
};

export default function Collection() {
  const [selectedArt, setSelectedArt] = useState<Art | null>(null);

  const images: Art[] = [
    { url: "/convo-Heather.JPG", name: "Convo with Heather" },
    { url: "/group-Talking.JPG", name: "Group Talking" },
    { url: "/jillexplaining.jpg", name: "Image 3" },
    { url: "/JillheatherCristtalking.jpg", name: "Image 4" },
    { url: "/jillHelpingmask.jpg", name: "Image 5" },
    { url: "/fingersSue.jpg", name: "Image 6" },
    { url: "heatherstraps.jpg", name: "Image 7" },
    { url: "heatherSueTalking.JPG", name: "Image 8" },
    { url: "public/Jilllaughing.jpg", name: "Image 9" },
    // { url: "/heatherExplaining.jpg", name: "Image 10" },
  ];

  return (
  <>
      <div className="bg-black text-white min-h-screen pt-30 py-12 px-6 relative">
        <h1 className="pb-10 text-4xl font-bold tracking-wide uppercase text-white underline decoration-red-500 underline-offset-8">
    Gallery
  </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {images.map((item, index) => (
            <div
            key={index}
            className="bg-gray-900 rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg cursor-pointer"
            onClick={() => setSelectedArt(item)}
            >
            <Image
              src={item.url}
              alt={item.name}
              width={300}
              height={300}
              className="rounded-xl w-full h-auto object-cover"
              />
            <p className="text-center mt-4 text-lg font-semibold">
              {/* {item.name} */}
            </p>
          </div>
        ))}
      </div>

      {selectedArt && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedArt.url}
              alt={selectedArt.name}
              width={900}
              height={900}
              className="rounded-xl w-full h-auto object-contain"
              />
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:bg-red-600 hover:text-white transition"
              aria-label="Close"
              >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
      </>
  );
}
