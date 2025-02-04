import { useState } from "react";
import CardSlider from "./CardSlider";

const InfoSlider = ({ isActive, text, img, onChange, button }) => {
  const [isSlider, setSlider] = useState(false);
  const handleChange = (event) => {
    onChange((event.target.value = true));
  };

  return button ? (
    <div className="relative flex items-center justify-center w-full h-14 bg-color_two">
      <div className="bg-color_nine/50 p-2 rounded-lg ">
        <img onMouseEnter={() => setSlider(true)} onMouseLeave={() => setSlider(false)} onClick={handleChange} className="w-5 h5 invert cursor-pointer" src={img} alt="img home"></img>
      </div>
      <div className={`absolute transition-all ${isSlider ? "left-44" : "-left-96 "} w-80 -z-10`}>
        <CardSlider content={text} />
      </div>
    </div>
  ) : (
    <div className="relative flex items-center justify-center w-full h-14 bg-color_two">

      <div className={`${isActive ? "bg-color_nine/50" : "bg-color_four/40"} p-2 rounded-lg `}>
        <img onMouseEnter={() => setSlider(true)} onMouseLeave={() => setSlider(false)} className="w-5 h5 invert cursor-pointer" src={img}></img>
      </div>
      <div
        className={`absolute ${isSlider ? "left-44" : "-left-96"} h-14 w-80 -z-10 transition-all `}>
        <CardSlider content={text} />
      </div>
    </div>
  );
};

export default InfoSlider;
