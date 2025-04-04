import Image from "next/image";

export function Offers() {
  const handleClickVo2 = () => {
    window.open(
      "https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=1883066&require_offering=true&offering_id=124054&hide_package_images=false",
      "_blank"
    );
  };
  const handleClickExProg = () => {
    window.open(
      "https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=1883066&require_offering=true&offering_id=123803&hide_package_images=false",
      "_blank"
    );
  };
  const handleClickRMR = () => {
    window.open(
      "https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=1883066&require_offering=true&offering_id=124055&hide_package_images=false",
      "_blank"
    );
  };

  return (
    <>
      <h1 id="offers" className="p-5"></h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 px-4 sm:px-8 md:px-12">

        <div className="flex-1 w-full">
          <video
            src="bicycleVid.MOV"
            autoPlay
            loop
            muted
            playsInline // For iOS devices to autoplay without going full-screen
            className="w-full max-w-[500px] rounded-lg shadow-lg object-cover h-[300px] md:h-[400px]"
          />
        </div>

        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 sm:p-12 overflow-hidden rounded-lg shadow-md">
          <div className="space-y-12">
            {[
              {
                title: "VO2 Max",
                desc: "A VO2max test is the gold standard for measuring cardiorespiratory fitness.",
                img: "/biker.jpeg",
                onClick: handleClickVo2,
              },
              {
                title: "Exercise Programming",
                desc: "Do you want to begin an exercise program, but you’re not sure where to start?",
                img: "/walkingPeople.jpg",
                onClick: handleClickExProg,
              },
              {
                title: "Resting Metabolic Rate",
                desc: "Learn about your metabolism and how many calories you burn in a day.",
                img: "/rmr.jpg",
                onClick: handleClickRMR,
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Image
                  alt={offer.title}
                  src={offer.img}
                  width={120}
                  height={120}
                  draggable="false"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg"
                />
                <div className="space-y-4 text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {offer.title}
                  </h2>
                  <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {offer.desc}
                  </p>
                  <button
                    onClick={offer.onClick}
                    className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition w-full sm:w-auto"
                    style={{
                      backgroundColor: "#1D4ED8", // Ensure background is blue
                      color: "#ffffff", // Ensure text is white
                      padding: "12px", // Increase padding on mobile
                      fontSize: "16px", // Increase font size for readability
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
