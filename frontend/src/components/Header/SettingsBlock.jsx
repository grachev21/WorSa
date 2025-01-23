import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navPanelActivate } from "../../store/worsaSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { userVerification } from "../../utils/userVerification";
import { logout } from "../../utils/logout";

import iconSettig from "../../media/icons/icons8-settings-50.png";
import iconUser from "../../media/icons/icons8-user-24.png";
import iconMessage from "../../media/icons/icons8-message-50.png";
import menu from "../../media/icons/icons8-menu-50.png";

const SettingsBox = () => {
  const navigate = useNavigate();
  const [isMenu, setMenu] = useState(-180);
  const checkMenuActive = useSelector((state) => state.worsa.navPanelActivate);
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);

  const menuActive = () => {
    if (checkMenuActive) {
      dispatch(navPanelActivate(false));
    } else {
      dispatch(navPanelActivate(true));
    }
  };

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

  // Проверяет залогинен пользователь или нет
  useEffect(() => {
    const checkAuth = async () => {
      // функция userVerification возвращает true или false
      // в зависимости от тога залогинен пользователь или нет
      const authStatus = await userVerification();
      setIsAuth(authStatus);
    };
    checkAuth();
  }, []);


  // Эту функция выводит пользователя из аккаунта
  const handleLogout = async () => {
    console.log('exit')
    await logout();
    // Перенаправляет после выхода из аккаунта
    navigate("/Authentication");
    window.location.reload();
  };

  return (
    <main onClick={slide} className="h-5 md:relative md:h-10">
      <img onClick={menuActive} className="w-5 h-5 cursor-pointer invert md:hidden" src={menu} alt="" />
      <section className="hidden md:flex md:justify-between md:items-center md:flex-row" style={slideTop}>

        <div className="flex items-center cursor-pointer hover:opacity-85">
          <img className="w-5 h-5 invert bg-cover m-3" src={iconMessage} alt=""></img>
          <p className="text-color_four">Сообщить</p>
        </div>

        {!isAuth ? (
          <>
            <NavLink to={"/Authentication"}>
              <div className="flex items-center ml-3 hover:opacity-85">
                <img className="w-5 h-5 cursor-pointer invert bg-cover m-3" src={iconUser} alt=""></img>
                <p className="text-color_four">Войти</p>
              </div>
            </NavLink>
            <NavLink to={"/Registration"}>
              <p className="text-color_four ml-1 hover:opacity-85">/ Регистрация</p>
            </NavLink></>) :

          (
            <div onClick={handleLogout} className="flex items-center cursor-pointer ml-3">
              <img className="w-5 h-5 cursor-pointer invert bg-cover m-2" src={iconUser} alt=""></img>
              <p className="text-color_four">Выйти</p>
            </div>
          )}

        <div className="flex justify-center items-center bg-color_six w-7 h-7 ml-4 hover:opacity-85 origin-center rotate-45">
          <img className="absolute w-5 h-5 cursor-pointer invert" src={iconSettig} alt=""></img>
        </div>
      </section>
    </main>
  );
};
export default SettingsBox;
