import iconSettig from "../media/icons/icons8-settings-50.png";
import iconUser from "../media/icons/icons8-user-24.png";
import iconMessage from "../media/icons/icons8-message-50.png";
import menu from "../media/icons/icons8-menu-50.png";
import { useEffect, useState } from "react";

const SettingsBox = () => {
  const [isMenu, setMenu] = useState(-180);
  const [isWindowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {}, [isWindowWidth, setWindowWidth]);

  const slide = () => {
    if (isMenu === -180) {
      setMenu(70);
    } else {
      setMenu(-180);
    }
  };
  const slideTop = {
    top: `${isMenu}px`,
    opacity: "isOpasity",
  };
  return (
    <main onClick={slide} className="w-5 h-5 md:relative md:h-10 md:w-28">
      <img className="w-5 h-5 cursor-pointer invert md:hidden" src={menu} alt="" />
      <section className="hidden md:flex md:justify-between md:items-center md:flex-row" style={slideTop}>
        <img className="w-5 h-5 cursor-pointer invert" src={iconMessage} alt=""></img>
        <img className="w-5 h-5 cursor-pointer invert" src={iconUser} alt=""></img>
        <div className="flex justify-center items-center bg-color_six rounded-full w-10 h-10">
          <img className="absolute w-5 h-5 cursor-pointer" src={iconSettig} alt=""></img>
        </div>
      </section>
    </main>
  );
};
export default SettingsBox;
