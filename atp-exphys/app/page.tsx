"use client";
import Image from "next/image";
import HeatherBox from "@/components/HeatherBox";
import JillBox from "@/components/JillBox";
import Nav from "@/components/Nav";
import { Offers } from "@/components/Offers";
// import { Referrals } from "@/components/Referrals";
import ParallaxOffers from "@/components/parallax";
import ParallaxFooter from "@/components/parallaxOffers";
import ParallaxHeader from "@/components/parallaxHeader";

const Home = () => {
  return (
    <>
      <Nav />
      <ParallaxHeader />
      <p className="pt-20" />
      <div className="bg-white min-h-screen text-black p-4">
        <div className="flex justify-center items-center pt-10"></div>
        <div>
          <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light mx-auto w-full md:w-[85%] lg:w-[65%] my-6 text-justify leading-[2] tracking-wide">
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

        <div className="flex justify-center mt-8">
          <a
            href="https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=1883066&require_offering=true&offering_id=124055&hide_package_images=false"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Schedule Your Metabolic Test
            </button>
          </a>
        </div>

        <hr
          id="AboutUs"
          className="mx-auto w-[90%] sm:w-[80%] md:w-[50%] my-8 border-black"
        />

        <h2 className="text-xl md:text-2xl font-semibold text-center mt-8 mb-4">
          About us
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="transition duration-700 ease-in-out transform hover:scale-[1.02]">
              <JillBox />
            </div>
          </div>

          <div className="w-full flex justify-center sm:hidden">
            <Image
              src="/jillwithmask.JPG"
              alt="Jill putting on O2 mask"
              width={300}
              height={300}
              className="rounded-lg shadow-md object-cover max-w-[250px]"
            />
          </div>

          <div className="hidden sm:flex w-full md:w-1/2 justify-center">
            <Image
              src="/jillwithmask.JPG"
              alt="Jill putting on O2 mask"
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-center mt-16 mb-4"></h2>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0 mt-8">
          <div className="w-full flex justify-center sm:hidden">
            <Image
              src="/heatherwithpad.JPG"
              alt="Heather looking at an iPad"
              height={300}
              width={300}
              className="rounded-lg shadow-md object-cover max-w-[250px]"
            />
          </div>

          <div className="hidden sm:flex w-full md:w-1/2 justify-center">
            <Image
              src="/heatherwithpad.JPG"
              alt="Heather looking at an iPad"
              height={500}
              width={500}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="transition duration-700 ease-in-out transform hover:scale-[1.02]">
              <HeatherBox />
            </div>
          </div>
        </div>
      </div>

      <ParallaxOffers />
      <Offers />
      {/* <Referrals /> */}
      <ParallaxFooter />
    </>
  );
};

export default Home;
