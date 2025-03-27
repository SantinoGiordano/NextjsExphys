import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center pt-30">
        <Image src={"/atpLogo.png"} alt="ATP Logo" width={250} height={250} />
      </div>

      <p className=" text-center text-4xl font-bold">Access the Potential</p>
      <hr className="mx-auto w-[50%] my-4" />
      <div className="fontsize-[14pt] sm:text-[16pt] md:text-[18pt] lg:text-[20pt] font-extralight mx-auto w-[50%] my-4 text-justify">
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
      <hr className="mx-auto w-[50%] my-4" />

    </>
  );
}
