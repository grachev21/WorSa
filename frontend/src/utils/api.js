// С помощью этой функции выполняются запросы по токену
import axios from "axios";

// Создаем экземпляр axios с базовым URL для всех запросов
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Базовый URL для всех запросов
});

// Добавляем интерсептор для запросов
api.interceptors.request.use((config) => {
  // Получаем токен аутентификации из localStorage
  const token = localStorage.getItem("auth_token");
  if (token) {
    // Если токен существует, добавляем его в заголовок Authorization
    config.headers.Authorization = `Token ${token}`;
  }
  // Возвращаем конфигурацию запроса
  return config;
});

// Экспортируем настроенный экземпляр axios для использования в других частях приложения
export default api;
