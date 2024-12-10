import { list } from "postcss";
import WordsTest from "../../../data/WordsTest";
import { useState } from "react";

const InputWriteTest = () => {
  const [redText, setredText] = useState(false);
  const [isEnter, setEnter] = useState(false);
  const words = WordsTest.rightWord.en + " - " + WordsTest.rightWord.ru;
  const listGuessed = [];
  const enter = "Enter";

  const inputChanges = (e) => {
    e.length >= words.length && e != words
      ? setredText(true)
      : setredText(false);
    e.length == words.length && e == words ? setEnter(true) : setEnter(false);
  };

  // const keyDown = (e) => {
  //   // e.key == "Enter" && isEnter ? listGuessed.push(words) : "";
  // };
  return (
    <main
      className={`flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <input
        onChange={(e) => inputChanges(e.target.value)}
        // onKeyDown={keyDown}
        placeholder={words}
        type="text"
        id="success"
        className={`
        flex items-center justify-center outline-none w-64 bg-color_three/60
        border border-color_nine rounded-md h-9 p-3
        ${redText ? "text-color_five" : "text-color_four"}
        `}
        autoFocus
      />

      <div
        className={`
        ${isEnter ? "opacity-100 top-0" : "-top-14"}
        absolute opacity-0 transition-all -right-16 text-color_nine p-1 h-9
        border border-color_nine px-2 rounded-md
        `}>
        {enter}
      </div>
    </main>
  );
};
export default InputWriteTest;
