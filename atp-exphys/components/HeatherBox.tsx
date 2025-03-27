import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeatherBox = () => {
  return (
    <>
 <div className=" max-w-3xl h-[600px]">
        <div className="p-10">
          <p className="text-2xl font-semibold mb-4">Heather Giordano</p>
          <div className="relative">
            <Image
              src="/heatherHeadshot.jpg"
              alt="Heather Headshot"
              width={150}
              height={150}
              draggable={false}
              className="rounded-full object-cover shadow-lg float-left mr-4 mb-2"
            />
            <p className="text-lg font-light leading-relaxed max-w-3xl">
              <span className="font-medium">Heather</span> is a Master&apos;s
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
            <Link href={""} className="mt-4 font-medium text-blue-600">
            Heather@ATP-EXPhys.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeatherBox;
