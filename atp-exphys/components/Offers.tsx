import Image from "next/image";

export function Offers() {
  
  const handleClickVo2 = () => {
    window.open("https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=1883066&require_offering=true&offering_id=124054&hide_package_images=false", "_blank"); 
  };
  const handleClickExProg = () => {
    window.open("https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=1883066&require_offering=true&offering_id=123803&hide_package_images=false", "_blank"); 
  };
  const handleClickRMR = () => {
    window.open("https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=1883066&require_offering=true&offering_id=124055&hide_package_images=false", "_blank"); 
  };

  return (
    <>
      <h1 id="offers" className="text-5xl font-bold text-center my-12">
        Our Offers 
        <hr className="w-1/3 mx-auto my-6 border-gray-400"/>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 px-12">
        
        {/* Left Section: Smaller Biker Image */}
        <div className="flex-1">
          <video 
            src="bicycleVid.MOV" 
            autoPlay 
            loop 
            muted 
            className="w-full max-w-[500px] rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Offers */}
        <div className="w-full lg:w-1/2 bg-white p-12 overflow-y-auto">
          <div className="space-y-12">

            {/* Offer 1 */}
            <div className="flex items-center gap-8 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                alt="person biking"
                src="/biker.jpeg"
                width={150}
                height={150}
                draggable="false"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">VO2 Max</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A VO2max test is the gold standard for measuring cardiorespiratory fitness.
                </p>
                <button 
                  onClick={handleClickVo2} 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="flex items-center gap-8 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                alt="walking people"
                src="/walkingPeople.jpg"
                width={150}
                height={150}
                draggable="false"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Exercise Programming</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Do you want to begin an exercise program, but you’re not sure where to start?
                </p>
                <button 
                  onClick={handleClickExProg} 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="flex items-center gap-8 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                alt="RMR machine"
                src="/rmr.jpg"
                width={150}
                height={150}
                draggable="false"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Resting Metabolic Rate</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learn about your metabolism and how many calories you burn in a day.
                </p>
                <button 
                  onClick={handleClickRMR} 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
