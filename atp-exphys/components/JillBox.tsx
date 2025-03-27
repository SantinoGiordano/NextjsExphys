import React from "react";
import Image from "next/image";
import Link from "next/link";

const JillBox = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-6 text-gray-800">
        {/* <img className="circle-image" src="jillHeadshot.jpg" draggable="false" height={150}width={150}/> */}

        <div>
          <Image
            src="/jillHeadshot.jpg" // Replace with your image path
            alt="Jill Headshot"
            width={150}
            height={150}
            draggable={false}
            className="rounded-full "
          />
          <p className="text-2xl font-semibold">Jill</p>
          <p className="text-lg font-light text-gray-600">
            Jill is an Exercise Physiologist with a passion for helping others
            achieve their potential in health and fitness. Through her
            experience as an exercise professional, an athlete herself, and a
            graduate degree in Clinical Exercise Physiology, she has found a gap
            in the fitness industry. Understanding an individual’s health,
            fitness, and metabolism should not be reserved for only world-class
            athletes and physiology laboratories. She believes in using
            science-backed, gold standard tools to drive exercise programming to
            maximize one’s efforts in fitness and health. Jill’s mission is to
            bring high-quality exercise testing and exercise physiology
            education to Western Mass through testing metabolic fitness, aerobic
            fitness, and body composition. This information will bring targeted,
            individualized exercise programs to the clients of ATP.
          </p>
          <Link href={''} className="mt-4 font-medium text-blue-600">Jill@ATP-ExPhys.com</Link>
        </div>
      </div>
    </>
  );
};

export default JillBox;
