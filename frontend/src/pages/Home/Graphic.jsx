import { useState } from "react";
import BarChartWords from "../../components/Charts/BarChartWords";
import PieChartWords from "../../components/Charts/PieChartWords";
import week from "../../data/Week";
import month from "../../data/Month";
import year from "../../data/Year";

const Graphic = () => {
  const [isItem, setItem] = useState(0);
  const ItemList = ["Неделя", "Месяц", "Год", "Всё"];
  return (
    <main className="flex flex-col mx-5 md:flex-row justify-center md:justify-between md:px-20  mt-24">
      <ul className="flex flex-col justify-between w-full md:w-1/2">
        {ItemList.map((ItemList, index) => {
          return (
            <li
              key={index}
              className={
                index === isItem
                  ? "text-color_four bg-color_eight p-3 cursor-pointer mt-5 rounded-lg border border-color_ten/20"
                  : "text-color_four/50 bg-color_eight p-3  cursor-pointer mt-5 rounded-lg border border-color_ten/30"
              }
              onClick={() => setItem(index)}>
              {ItemList}
            </li>
          );
        })}
      </ul>
      <ul className="bg-color_nine/15 min-h-[300px] transition-all w-full mt-5 rounded-lg sm:h-72">
        <li className={isItem === 0 ? "block" : "hidden"}>
          <BarChartWords data={week} />
        </li>
        <li className={isItem === 1 ? "block" : "hidden"}>
          <BarChartWords data={month} />
        </li>
        <li className={isItem === 2 ? "block" : "hidden"}>
          <BarChartWords data={year} />
        </li>
        <li className={isItem === 3 ? "block" : "hidden"}>
          <PieChartWords />
        </li>
      </ul>
    </main>
  );
};
export default Graphic;
