import React from "react"; 
import Image from "next/image";
import Link from "next/link";

const HeatherBox = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="p-10">
        <p className="text-2xl font-bold text-gray-800 mb-4">Heather Giordano</p>
        <div className="relative">
          <Image
            src="/heatherHeadshot.jpg"
            alt="Heather Headshot"
            width={150}
            height={150}
            draggable={false}
            className="rounded-none object-cover shadow-md float-left mr-6 mb-4 transition-transform hover:scale-105 duration-300"
          />
          <p className="text-lg font-light leading-relaxed text-gray-700 md:text-[16pt] text-justify">
            <span className="font-medium text-gray-900">Heather</span> is a Master&apos;s
            Level Exercise Physiologist with a desire to help others reach
            their health and fitness goals. She works to educate her clients
            by bridging science and practical application. She enjoys leading
            her clients to that &quot;Aha!&quot; moment. This is the moment when a
            client understands their own fitness and body composition and how
            individualized this is for all of us. Heather&apos;s goal is to make
            this testing and information more accessible to the general public
            at ATP. Good aerobic fitness and a healthy body composition are
            associated with longevity and improved quality of life. Having
            this information serves as a basis for individualized goal setting
            for the clients of ATP.
          </p>
          <Link
            href={"mailto:Heather@ATP-EXPhys.com"}
            className="mt-4 inline-block font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            Heather@ATP-EXPhys.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeatherBox;