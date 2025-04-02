import React from "react";
import Image from "next/image";
import Link from "next/link";

const JillBox = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="p-10">
        <p className="text-2xl font-bold text-gray-800 mb-4">Jill Roach</p>
        <div className="relative">
          <Image
            src="/jillHeadshot.JPG"
            alt="Jill Headshot"
            width={150}
            height={150}
            draggable={false}
            className=" object-cover shadow-md float-left mr-6 mb-4 transition-transform hover:scale-105 duration-300"
          />
          <p className="text-lg font-light leading-relaxed text-gray-700 md:text-[16pt] text-justify">
            <span className="font-medium text-gray-900">Jill</span> is an Exercise
            Physiologist with a passion for helping others achieve their
            potential in health and fitness. Through her experience as an
            exercise professional, an athlete herself, and a graduate degree
            in Clinical Exercise Physiology, she has found a gap in the
            fitness industry. Understanding an individual’s health, fitness,
            and metabolism should not be reserved for only world-class
            athletes and physiology laboratories. She believes in using
            science-backed, gold standard tools to drive exercise programming
            to maximize one’s efforts in fitness and health. Jill’s mission is
            to bring high-quality exercise testing and exercise physiology
            education to Western Mass through testing metabolic fitness,
            aerobic fitness, and body composition. This information will bring
            targeted, individualized exercise programs to the clients of ATP.
          </p>
          <Link
            href={"mailto:Jill@ATP-ExPhys.com"}
            className="mt-4 inline-block font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            Jill@ATP-ExPhys.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JillBox;
