import { useState } from "react";

const InfoSlider = ({ text, img, onChange, button }) => {
  const [isSlider, setSlider] = useState("-left-52");
  const handleChange = (event) => {
    onChange((event.target.value = true));
  };
  const show = () => {
    setSlider("left-20");
  };
  const hide = () => {
    setSlider("-left-52");
  };

  return button ? (
    <div className="relative flex items-center justify-center w-full h-14 bg-color_two">
      <img onMouseEnter={show} onMouseLeave={hide} onClick={handleChange} className="w-5 h5 invert cursor-pointer" src={img}></img>
      <div className={`absolute ${isSlider} h-14 w-48 -z-10 transition-all`} onMouseLeave={hide}>
        <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 -z-50"></div>
        <h1 className="w-full h-full flex justify-center rounded-md items-center  text-color_four text-xl font-light bg-color_eight">
          {text}
        </h1>
      </div>
    </div>
  ) : (
    <div className="relative flex items-center justify-center w-full h-14 bg-color_two">
      <img onMouseEnter={show} onMouseLeave={hide} className="w-5 h5 invert cursor-pointer" src={img}></img>
      <div className={`absolute ${isSlider} h-14 w-48 -z-10 transition-all `} onMouseLeave={hide}>
        <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 -z-50"></div>
        <h1 className="w-full h-full flex justify-center rounded-md items-center  text-color_four text-xl font-light bg-color_eight">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default InfoSlider;
