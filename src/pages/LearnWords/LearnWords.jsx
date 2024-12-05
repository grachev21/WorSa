import { useState } from "react";
import { useSelector } from "react-redux";

import NavPanel from "./pageComponents/NavPanel";
// import Title from "./pageComponents/Title"
// import ListWords from "./pageComponents/ListWords"
// import InputWord from "./pageComponents/InputWord"

const LearnWords = () => {
  const indexButton = useSelector(state => state.worsa.indexButton);
  console.log(indexButton, typeof indexButton);
  // const d = Number(indexButton[1].indexButton)

  return (
    <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <section className="w-[660px] h-[400px]">
        <div className="w-full h-full bg-color_three border border-color_four/10 shadow-xl rounded-lg">
          <NavPanel />
          <h1>
          </h1>
        </div>
      </section>
    </main>
  );
};
export default LearnWords;
