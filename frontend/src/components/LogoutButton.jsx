import React from "react";
import { logout } from "../utils/logout";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    // Перенаправьте пользователя на страницу входа или выполните другие действия
    navigate("/Authentication");
  };

  return <button onClick={handleLogout}>Выйти</button>;
};

export default LogoutButton;
