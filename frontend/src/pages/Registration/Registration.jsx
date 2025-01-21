import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/auth/users/", {
        email: email,
        password: password,
      });
      // setResponse(res.data);
      console.log("User created successfully", res.data);
      navigate("/");
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  };

  return (
    <main className="">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Создать новый аккаунт</p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Ваше имя</label>
                <input
                  placeholder="John"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
              </div>
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
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Повторить пароль</label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}></input>
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                type="submit">
                Создать аккаунт
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Registration;
