import { useSelector, useDispatch } from "react-redux";
import { navPanelActivate } from "../../store/worsaSlice";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

import { menu_list } from "../../data/ButtonMenuLIst";


const MenuItem = ({ isActive, img, title }) => (
  <li className="py-2 flex flex-row" >
    <div className={`bg-color_four/15 w-7 h-7 rounded-lg flex items-center justify-center mr-6 ${isActive ? 'bg-color_nine/55' : 'bg-color_four/40'}`}>
      <img className="invert w-3 h-3" src={img} alt={title} />
    </div>
    <p className={`${isActive ? "text-color_nine font-bold" : "text-color_four"}`}>{title}</p>
  </li>
);
const NavPanel = () => {
  const checkMenuActive = useSelector((state) => state.worsa.navPanelActivate)
  const dispatch = useDispatch()
  const [linkActive, setlinkActive] = useState()

  const menuActive = () => {
    if (checkMenuActive) {
      dispatch(navPanelActivate(false))
    }
  }


  const changeLink = (e) => {
    setlinkActive(e)
  }

  return (
    <main>
      <section className={`${checkMenuActive ? "block" : "hidden"} fixed left-0 right-0 backdrop-blur-md w-full h-screen`} onClick={menuActive}></section>
      <div className={`fixed w-72 h-screen transition-all bg-color_two  ${checkMenuActive ? "right-0" : "-right-80"}  top-0 z-50 p-7`}>
        <ul className="w-full flex flex-col justify-start text-left text-glow">
          {menu_list.map((item, index) => {
            return (
              <NavLink key={index} to={item.link}>

                {({ isActive }) => (
                  <>
                    <MenuItem isActive={isActive} img={item.img} title={item.title} />
                  </>
                )}
              </NavLink>
            )
          })}
        </ul>
      </div>
    </main >
  );
};
export default NavPanel;


