import Image from "next/image";

export function Referrals() {
  const referrals = [
    { 
      id: 1, 
      name: "Josh Lipka Cycling", 
      img: "/Refferals/josh.png", 
      url: "https://www.joshlipkacycling.com/coaching" 
    },
    { 
      id: 2, 
      name: "Energy In Motion", 
      img: "/Refferals/in motion.png", 
      url: "http://energyinmotionpilates.com/" 
    },
    { 
      id: 3, 
      name: "413 Cycling", 
      img: "/Refferals/413Cycling.jpg", 
      url: "https://413cycling.com/lander" 
    },
    { 
      id: 4, 
      name: "Lee Body Works", 
      img: "/Refferals/leeBodyWorks.jpg", 
      url: "https://leebodyworks.com/" 
    },
    { 
      id: 5, 
      name: "Recovery Room", 
      img: "/Refferals/recoveryRoomLogo.jpg", 
      url: "https://www.therecoveryroom.biz/" 
    },
  ];

  const handleClick = (url: string | URL | undefined) => {
    window.open(url, "_blank");
  };

  return (
    <div id="Referrals" className="py-16 bg-gray-100 dark:bg-gray-900 text-center transition-colors duration-300">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">Our Trusted Referrals</h1>
      <hr className="w-1/4 mx-auto mb-12 border-gray-400 dark:border-gray-600" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
        {referrals.map((referral) => (
          <div
            key={referral.id}
            onClick={() => handleClick(referral.url)}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="flex justify-center">
              <Image
                src={referral.img}
                alt={referral.name}
                width={200}
                height={200}
                className="w-48 h-48 object-cover rounded-full border-4 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{referral.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}