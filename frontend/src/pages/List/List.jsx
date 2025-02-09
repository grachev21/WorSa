import React, { useEffect, useState } from "react";
import api from "../../utils/api";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import AudioButton from "./pageComponents/AudioButton";
import Load from "./pageComponents/Load";

const ItemList = () => {
  const [items, setItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Get request
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("http://127.0.0.1:8000/api/v1/ShowUserWordsList/", {
          params: { page: currentPage },
        });
        if (response.data && response.data.results) {
          setItems(response.data.results);
          setTotalPages(Math.ceil(response.data.count / 10)); // Предполагается, что PAGE_SIZE = 10
        } else {
          console.error("Неожиданная структура данных:", response.data);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchSettings();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex flex-col justify-center">
      {items === null ? (
        <Load />
      ) : (
        <div>
          <div className="text-color_four font-bold p-6">Общее количество слов: {items.count}</div>
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
                  {items.map((item) => {
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

            <nav className="mb-4 flex justify-center space-x-4" aria-label="Pagination">
              <span
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border border-teal-500 px-2 py-2 text-gray-700">
                <span className="sr-only">Previous</span>
                <MdNavigateBefore size={24} color="white" />
              </span>

              <span className="rounded-lg border border-teal-500 bg-teal-500 px-4 py-2 text-white">1</span>

              <a className="rounded-lg border border-teal-500 px-4 py-2 text-gray-700" href="/page/2">
                2
              </a>

              <a className="rounded-lg border border-teal-500 px-4 py-2 text-gray-700" href="/page/3">
                3
              </a>

              <span
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`rounded-lg border border-teal-500 px-2 py-2 text-gray-700`}
                href="/page/2">
                <span className="sr-only">Next</span>
                <MdNavigateNext size={24} color="white" />
              </span>
            </nav>
          </section>
        </div>
      )}
    </main>
  );
};

export default ItemList;
