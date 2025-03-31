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
      <h1 id="offers" className="">
        Our Offers <hr/>
      </h1>
      <div className="">
        <div className="">
          <video src="bicycleVid.MOV" autoPlay loop muted></video>
        </div>
        <div className="">
          <div className="">
            <div>
              <Image
                alt="person biking"
                src="biker.jpeg"
                width={100}
                height={100}
                draggable="false"
              />
            </div>
            <div className="">VO2 Max</div>
            <div className="">
              A VO2max test is the gold standard for measuring cardiorespiratory
              fitness.
            </div>
            <button onClick={handleClickVo2} className="">
            Book
            </button>
          </div>
          <div className="">
            <div>
              <Image
                alt="walking people"
                src="walkingPeople.jpg"
                width={100}
                height={100}
                draggable="false"
              />
            </div>
            <div className="videoTextTitle">Exercise Progamming</div>
            <div className="nextToVideoText">
              Do you want to begin an exercise program, but you’re not sure
              where to start?
            </div>
            <button onClick={handleClickExProg}  className="">
              Book
            </button>
          </div>
          <div className="">
            <div>
              <Image
                alt="image of an rmr machien"
                src="rmr.jpg"
                width={100}
                height={100}
                draggable="false"
              />
            </div>
            <div className="">Resting Metabolic Rate</div>
            <div className="">
              Are you interested in learning about your metabolism? About
              how many calories you are actually burning in a day, or how
              many calories you need to be eating?
            </div>
            <button onClick={handleClickRMR}  className="">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
