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
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ul className="flex flex-col justify-between w-full md:w-full">
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
      <ul className="bg-color_eight min-h-[300px] transition-all w-full mt-5 rounded-lg sm:h-72">
        <BarChartWords stateVisible={isItem === 0 ? true : false} data={week} />
        <BarChartWords stateVisible={isItem === 1 ? true : false} data={month} />
        <BarChartWords stateVisible={isItem === 2 ? true : false} data={year} />
        <PieChartWords stateVisible={isItem === 3 ? true : false} />
      </ul>
    </main>
  );
};
export default Graphic;
