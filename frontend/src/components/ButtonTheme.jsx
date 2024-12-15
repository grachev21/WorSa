import { useEffect, useState } from "react";
import day from "../media/icons/day-mode.png";
import night from "../media/icons/crescent-moon.png";

const ButtonTheme = () => {
  const [isTheme, setTheme] = useState("dark");

  useEffect(() => {
    if (isTheme === "dark") {
      document.querySelector("html").classList.remove("day");
      document.querySelector("html").classList.add("night");
    } else {
      document.querySelector("html").classList.remove("night");
      document.querySelector("html").classList.add("day");
    }
  });
  const switchDayNight = () => {
    setTheme((e) => {
      return e == "light" ? "dark" : "light";
    });
  };

  return (
    <div onClick={switchDayNight} className="w-fail flex justify-center mb-5">
      {isTheme === "dark" ? (
        <img className="w-7 h-7 cursor-pointer" src={day} alt=""></img>
      ) : (
        <img className="w-7 h-7 cursor-pointer" src={night} alt=""></img>
      )}
    </div>
  );
};
export default ButtonTheme;
