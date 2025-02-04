import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Определяем функциональный компонент Authentication
const Authentication = () => {
  // Создаем состояния для email, password и error с помощью хука useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', {
        email, 
        password, 
      });
      console.log(response.data.auth_token, "<<<");
      localStorage.setItem('auth_token', response.data.auth_token);

      setError('');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <main className="">
      <main className="">
        {/* Отображаем сообщение об ошибке, если оно существует */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/* Форма для ввода email и password */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/* Заголовок формы */}
                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Вход в аккаунт</p>
                {/* Поле для ввода email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Ваша почта</label>
                  <input
                    placeholder="Denis@mail.ru"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    id="email"
                    type="email" // Используем type="email" для поля email
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                {/* Поле для ввода password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Пароль</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="••••••••"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                {/* Кнопка отправки формы */}
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                  type="submit">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* Отображаем токен, если он существует (закомментировано) */}
        {/* {token && <p>Token: {token}</p>} */}
      </main>
    </main>
  );
};

// Экспортируем компонент Authentication по умолчанию
export default Authentication;
