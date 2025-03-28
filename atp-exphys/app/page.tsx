import HeatherBox from "@/components/HeatherBox";
import JillBox from "@/components/JillBox";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen text-black">
        <Nav />

        {/* Logo Section */}
        <div className="flex justify-center items-center pt-30">
          <Image src={"/atpLogo.png"} alt="ATP Logo" width={250} height={250} />
        </div>

        {/* Title */}
        <p className="text-center text-4xl font-bold">Access the Potential</p>
        <hr className="mx-auto w-[50%] my-4 border-black" />

        {/* Description */}
        <div className="text-[14pt] sm:text-[16pt] md:text-[18pt] lg:text-[20pt] font-extralight mx-auto w-[50%] my-4 text-justify">
          Do you remember high school biology? Do you remember when the teacher
          said, &quot;the mitochondria is the powerhouse of the cell&quot;? Did
          you just memorize some facts, or did you truly learn and understand what
          goes on within your body? If you understand the science of how your body
          works metabolically then you can Access The Potential within yourself.
          You can make improvements in your fitness. You can improve your health.
          You just need to understand the science first! At ATP we are experienced
          Exercise Physiologists who love breaking down the science and making it
          practical for everyone. We can evaluate your Resting Metabolic Rate, Vo2
          Max and Body Composition. Using the results of the testing we can help
          you craft a plan going forward to achieve your personal goals. You can
          share your results with your personal physician, nutritionist or trainer
          to support the work you are already doing.
        </div>

        <hr className="mx-auto w-[50%] my-4 border-black" />

        {/* JillBox and HeatherBox aligned */}
        <div className=" flex justify-center items-center space-x-8">
          <JillBox /><img src="https://placehold.co/600x400"/>
        </div>
        <div className=" flex justify-center items-center space-x-8">
        <img src="https://placehold.co/600x400"/><HeatherBox />
        </div>
          
      </div>
    </>
  );
}
