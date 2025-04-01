"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeatherBox from "@/components/HeatherBox";
import JillBox from "@/components/JillBox";
import Nav from "@/components/Nav";
import { Offers } from "@/components/Offers";
import { Referrals } from "@/components/Referrals";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      <Nav />
      <div
        className="relative w-full h-[900px] bg-cover bg-center"
        style={{
          backgroundImage: "url(shadowrunner.jpg)",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-0 left-0 w-full bg-black opacity-30"></div>{" "}
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
  Access the Potential
</p>

      </div>
      <p className="pt-20" />
      <div className="bg-white min-h-screen text-black p-4">
        <div className="flex justify-center items-center pt-10"></div>
       
        <div className="">
          <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extralight mx-auto w-full md:w-[85%] lg:w-[65%] my-4 text-justify leading-relaxed">
            Do you remember high school biology? Do you remember when the
            teacher said, &quot;the mitochondria is the powerhouse of the
            cell&quot;? Did you just memorize some facts, or did you truly learn
            and understand what goes on within your body? If you understand the
            science of how your body works metabolically then you can Access The
            Potential within yourself. You can make improvements in your
            fitness. You can improve your health. You just need to understand
            the science first! At ATP we are experienced Exercise Physiologists
            who love breaking down the science and making it practical for
            everyone. We can evaluate your Resting Metabolic Rate, Vo2 Max, and
            Body Composition. Using the results of the testing we can help you
            craft a plan going forward to achieve your personal goals. You can
            share your results with your personal physician, nutritionist, or
            trainer to support the work you are already doing.
          </div>
        </div>
        <hr
          id="AboutUs"
          className="mx-auto w-[90%] sm:w-[80%] md:w-[50%] my-4 border-black"
        />

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 flex justify-center">
            <JillBox />
          </div>

          <div className="hidden sm:flex w-full md:w-1/2 justify-center">
            <Image
              src="/jillwithmask.jpg"
              alt="Jill putting on O2 mask"
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0 mt-8">
          <div className="hidden sm:flex w-full md:w-1/2 justify-center">
            <Image
              src="/heatherwithpad.jpg"
              alt="Heather looking at an iPad"
              height={500}
              width={500}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <HeatherBox />
          </div>
        </div>
      </div>
      <Offers/>
      <Referrals/>
  </>
  );
};

export default Home;
