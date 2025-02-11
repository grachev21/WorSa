import React, { useEffect, useState } from "react";
import api from "../../utils/api";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import AudioButton from "./pageComponents/AudioButton";
import Load from "./pageComponents/Load";
import Paginator from "./pageComponents/Paginator";

const ItemList = () => {
  const [items, setItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const arrayPagination = Array.from({ length: 6 }, (v, i) => i);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get request
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("http://127.0.0.1:8000/api/v1/ShowUserWordsList/", {
          params: { page: currentPage },
        });
        if (response.data && response.data.results) {
          setItems(response.data);
          setTotalPages(Math.ceil(response.data.count / 20)); // Предполагается, что PAGE_SIZE = 10
          // setListPages(Array(totalPages).fill(0).map((_, index) => index))
        } else {
          console.error("Неожиданная структура данных:", response.data);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchSettings();
  }, [currentPage]);

  console.log(totalPages, "total pages");
  console.log(currentPage, "current page");
  console.log(items, "items");

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
                  {items.results.map((item) => {
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
        </div>
      )}
      <Paginator currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </main>
  );
};

export default ItemList;
