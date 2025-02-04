import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menu_list } from "../../data/ButtonMenuLIst";

import ButtonTheme from "../ButtonTheme";
import LogoImage from "../LogoImage";
import InfoSlider from "./components/InfoSlider";

const SidePanel = () => {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState(null);
  const handleChange = (value) => {
    setValue(value);
    if (value) {
      setModalActive(true);
    } else {
      setModalActive(false);
    }
  };

  return (
    <div className="hidden w-14 h-full fixed md:flex flex-col justify-between top-0 left-0 bg-color_two z-50">
      <div className="w-full h-20 flex items-center justify-center">
        <LogoImage />
      </div>
      <div className="w-full max-h-72 ">
        {menu_list.map((value, index) => {
          return (
            <NavLink key={index} to={value.link}>
              {({ isActive }) => <InfoSlider isActive={isActive} text={value.title} img={value.img} onChange={handleChange} button={false} />}
            </NavLink>
          );
        })}
      </div>
      <div>
        <div>
          <ButtonTheme />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
