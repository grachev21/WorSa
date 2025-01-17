import React, { useEffect, useState } from "react";
import axios from "axios";

import AudioButton from "./pageComponents/AudioButton";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/w1/WordsList/?page=${currentPage}`)
      .then((response) => {
        setItems(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10)); // Предполагаем, что page_size = 10
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(items);
  return (
    <main className="flex flex-col justify-center mt-32">
      <section className="mx-4 sm:mx-20 lg:mx-48 xl:mx-52 2xl:mx-56">
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
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
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
                    <td className="px-6 py-4">{item.ru}</td>
                    <td className="px-6 py-4">{item.ru}</td>
                    <td className="px-6 py-4">
                      <AudioButton audio_word={item.audio} />
                    </td>
                    {/* <td className="px-6 py-4">{value.categories}</td> */}
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
