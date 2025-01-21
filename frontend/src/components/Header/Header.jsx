import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import LogoImg from "../LogoImage";
import SettingsBox from "./SettingsBlock";
import NavPanel from "./NavPanel";

const Header = () => {
  return (
    <header className="fixed flex w-full h-16  
                      backdrop-blur-md bg-color_three/30 z-50 border-b 
                    border-y-color_four/10 left-0 top-0">
      <NavPanel />
      <div className="flex items-center justify-between mx-4 w-full transition-all sm:mx-20 lg:mx-48 xl:mx-52 2xl:mx-56">
        <section className="flex">
          <span className="hidden sm:block md:hidden">
            <NavLink to="/">
              <LogoImg />
            </NavLink>
          </span>

          <NavLink to="/">
            <Logo />
          </NavLink>
        </section>
        <SettingsBox />
      </div>
    </header>
  );
};
export default Header;
