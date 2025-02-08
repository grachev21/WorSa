import React, { useEffect, useState } from "react";
import api from "../../utils/api";

import AudioButton from "./pageComponents/AudioButton";

const ItemList = () => {
  const [isList, setList] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("http://127.0.0.1:8000/api/v1/ShowUserWordsList/");
        setList(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Settings not found");
        } else {
          setError("An error occurred while fetching the settings");
        }
        console.error("There was an error fetching the items!", error);
      }
    };

    fetchSettings();
  }, []);

  console.log(isList, "<<<");
  console.log(isList.results, "<<<");
  console.log(isList.count, "<<<");
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <main className="flex flex-col justify-center mt-32">
      <div className="text-color_four font-bold p-6">Общее количество слов: {isList.count}</div>
      <section className="w-full">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-color_ten">
            <thead className="text-xs text-color_nine uppercase bg-color_eight">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Английский
                </th>
                <th scope="col" className="px-6 py-3">
                  Русский
                </th>
                <th scope="col" className="px-6 py-3">
                  Статус
                </th>
                <th scope="col" className="px-6 py-3">
                  Повторы
                </th>
                <th scope="col" className="px-6 py-3">
                  Озвучка
                </th>
              </tr>
            </thead>
            <tbody>
              {isList.results.map((item) => {
                return (
                  <tr key={item.id} className="bg-color_three border-b">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-color_four">
                      {item.en}
                    </th>
                    <td className="px-6 py-4">{item.ru}</td>
                    <td className={`px-6 font-bold py-4 ${item.teached ? "text-color_nine" : "text-color_six"}`}>
                      {item.teached ? "Выучил" : "Неизвестно"}
                    </td>
                    <td className={`px-6 font-bold py-4 ${item.repeated ? "text-color_nine" : "text-color_six"}`}>
                      {item.repeated ? "Повторил" : "Не повторил"}
                    </td>
                    <td className="px-6 py-4">
                      <AudioButton audio_word={item.audio} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ItemList;
