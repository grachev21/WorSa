import { useState } from "react";
// import {useSelector} from "react-redux"

import NavPanel from "./NavPanel";

const LearnWords = () => {
  // const runwords = useSelector(state => state.runwords.runwords);


  const [isCheckInput, setCheckInput] = useState("");

  return (
    <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <section className="w-[660px] h-[400px]">
        <div className="w-full h-full bg-color_three border border-color_four/10 shadow-xl rounded-lg">
          <section className={`h-full p-2`}>
            <div className="flex flex-row">
              <h1 className="text-color_nine font-bold mr-2">
                Выберите вариант ответа из
              </h1>
              <ul className="flex flex-row text-color_four opacity-30">
              </ul>
            </div>
            <div>
            </div>

            <ul className="flex-col">
            </ul>

            <input
              value={isCheckInput}
              onChange={(e) => {
                setCheckInput(e.target.value);
              }}
              autoFocus
              type="text"
              className="bg-color_three w-full text-color_five border-none outline-none"
            />
          </section>
        </div>
      </section>
    </main>
  );
};
export default LearnWords;
