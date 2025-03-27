import React from "react";
import Image from "next/image";

const JillBox = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-6 text-gray-800">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={""}
          alt={""}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h2 className="text-2xl font-semibold">Jill</h2>
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
          <p className="mt-4 font-medium text-blue-600">Jill@ATP-ExPhys.com</p>
        </div>
      </div>
    </div>
  );
};

export default JillBox;
