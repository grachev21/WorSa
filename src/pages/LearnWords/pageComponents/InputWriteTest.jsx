import worsaDb from "../../../data/worsaDb";
import { useState, useRef, useEffect } from "react";

const InputWriteTest = () => {
  const [isListGuessed, setListGuessed] = useState([]);
  const [redText, setredText] = useState(false);
  const [isEnter, setEnter] = useState(false);
  const words = worsaDb.rightWord.en + " - " + worsaDb.rightWord.ru;
  const enter = "Enter";
  const inputWord = useRef(null);

  useEffect(() => {
    inputWord.current.focus();
  });

  const inputChanges = (e) => {
    e.length >= words.length && e != words
      ? setredText(true)
      : setredText(false);

    e.length == words.length && e == words ? setEnter(true) : setEnter(false);
  };

  const [isLevelOpacity, setLevelOpacity] = useState(80);
  const keyDown = (element) => {
    element.key == "Enter" && isEnter && isListGuessed.length < 7
      ? (setLevelOpacity(isLevelOpacity - 12),
        setListGuessed([...isListGuessed, [words, isLevelOpacity]]))
      : null;
  };

  return (
    <main
      className={`flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <ul className="text-color_four fixed left-3 bottom-10 flex flex-col-reverse">
        {isListGuessed.map((value, index) => {
          return (
            <li
              key={index}
              className="transition-all"
              style={{ opacity: `${value[1]}%` }}>
              {value[0]} {index + 1}
            </li>
          );
        })}
      </ul>
      <input
        ref={inputWord}
        onChange={(e) => inputChanges(e.target.value)}
        onKeyDown={keyDown}
        placeholder={words}
        type="text"
        id="success"
        className={`
        center outline-none w-64 bg-color_three/60
        border border-color_nine rounded-md h-9 p-3
        ${redText ? "text-color_five" : "text-color_four"}
        `}
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
