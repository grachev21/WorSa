import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import LogoImg from "./LogoImage";
import SettingsBox from "./SettingsBlock";
const Header = () => {
  return (
    <main className="fixed flex justify-center w-full h-16 sm:h-20 backdrop-blur-md bg-color_three/30 z-50 border-b border-y-color_four/10">
      <div className="flex items-center justify-between mx-4 ml w-full sm:mx-20">
        <section className="flex">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <span className="sm:hidden">
            <NavLink to="/">
              <LogoImg />
            </NavLink>
          </span>
        </section>
        <SettingsBox />
      </div>
    </main>
  );
};
export default Header;
