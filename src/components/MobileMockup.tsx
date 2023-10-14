import MobileScreen from "./MobileScreen";

const MobileMockup = () => {
  return (
    <div className="container">
      <div className="phone">
        <div className="camera"></div>
        <div className="speaker"></div>
        <div className="sleep-button"></div>
        <div className="silent-switch"></div>
        <div className="volume up"></div>
        <div className="volume down"></div>
        <MobileScreen/>
        <div className="home-button"></div>
      </div>
    </div>
  );
};

export default MobileMockup;
