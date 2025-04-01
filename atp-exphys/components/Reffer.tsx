import Image from "next/image";

export function Referrals() {
  const handleChangeJosh = () => {
    window.open("https://www.joshlipkacycling.com/coaching", "_blank");
  };
  const handleChangeMotion = () => {
    window.open("http://energyinmotionpilates.com/", "_blank");
  };
  const handleChange413 = () => {
    window.open("https://413cycling.com/lander", "_blank");
  };
  const handleChangeLee = () => {
    window.open("https://leebodyworks.com/", "_blank");
  };
  const handleChangeRecovery = () => {
    window.open("https://www.therecoveryroom.biz/", "_blank");
  };

  return (
    <>
      <div id="Referrals">
        <h1 className="title">Our Trusted Referrals</h1>
        <hr />
        <Image
          src="Refferals/josh.png"
          className=""
          onClick={handleChangeJosh}
          alt={""}
        />
        <p>Josh Lipka Cycling</p>
        <Image
          src="Refferals/in motion.png"
          className=""
          onClick={handleChangeMotion}
          alt={""}
        />
        <p>Energy In Motion</p>
        <Image
          src="Refferals/413Cycling.jpg"
          className=""
          onClick={handleChange413}
          alt={""}
        />
        <p>413 Cycling</p>
        <Image
          src="Refferals/leeBodyWorks.jpg"
          className=""
          onClick={handleChangeLee}
          alt={""}
        />
        <p>Lee Body Works</p>
        <Image
          src="Refferals/recoveryRoomLogo.jpg"
          className=""
          onClick={handleChangeRecovery}
          alt={""}
        />
        <p>Recovery Room</p>
      </div>
    </>
  );
}
