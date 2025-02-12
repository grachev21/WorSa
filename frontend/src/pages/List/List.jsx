import React, { useEffect, useState } from "react";
import api from "../../utils/api";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import ReactPaginate from "react-paginate";

import AudioButton from "./pageComponents/AudioButton";
import Load from "./pageComponents/Load";
import Paginator from "./pageComponents/Paginator";
import Header from "./pageComponents/Header";
import Body from "./pageComponents/Body";

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

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
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
                <Header />
                <Body items={items} />
              </table>
            </div>
          </section>
        </div>
      )}
      <ReactPaginate
        previousLabel={"Предыдущая"}
        nextLabel={"Следующая"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        // containerClassName={"pagination"}
        // activeClassName={"active"}

        containerClassName={"flex justify-center space-x-1 mt-4 text-color_four"}
        activeClassName={"bg-color_seven text-color_four"}
        pageClassName={"p-3 border border-color_four/15 rounded-lg"}
        previousClassName={"p-3 border border-color_four/15 rounded-lg text-center"}
        nextClassName={"px-3 py-1 border rounded"}
        breakClassName={"px-3 py-1 border rounded"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </main>
  );
};

export default ItemList;
