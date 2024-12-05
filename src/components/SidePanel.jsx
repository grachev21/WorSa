import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menu_list } from "../helpers/ButtonMenuLIst";

import ButtonTheme from "./ButtonTheme";
import LogoImage from "./LogoImage";
import InfoSlider from "./InfoSlider";
import ModalWindow from "./ModalWindow";

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
        <NavLink to={menu_list[0].link}>
          <InfoSlider text={menu_list[0].title} img={menu_list[0].img} button={false} onChange={handleChange} />
        </NavLink>
        <InfoSlider text={menu_list[1].title} img={menu_list[1].img} button={true} onChange={handleChange} />
        <NavLink to={menu_list[2].link}>
          <InfoSlider text={menu_list[2].title} img={menu_list[2].img} button={false} onChange={handleChange} />
        </NavLink>
        <NavLink to={menu_list[3].link}>
          <InfoSlider text={menu_list[3].title} img={menu_list[3].img} button={false} onChange={handleChange} />
        </NavLink>
        <NavLink to={menu_list[4].link}>
          <InfoSlider text={menu_list[4].title} img={menu_list[4].img} button={false} onChange={handleChange} />
        </NavLink>
        <InfoSlider text={menu_list[5].title} img={menu_list[5].img} onChange={handleChange} button={true} />
      </div>
      <div >
        <div >
          <ButtonTheme />
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default SidePanel;
