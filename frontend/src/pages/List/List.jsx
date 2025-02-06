import React, { useEffect, useState } from "react";
import api from "../../utils/api";

import AudioButton from "./pageComponents/AudioButton";

const ItemList = () => {

  const [isList, setList] = useState({});
  const [error, setError] = useState(null);

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
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

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
              {isList.map((item) => {
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
