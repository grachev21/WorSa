import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { errorInput, inputTest } from "../../../store/worsaSlice";
import worsaDb from "../../../data/worsaDb";

const InputWord = () => {
  const [isRedLetters, setRedLetters] = useState(false);
  const [isEnter, setEnter] = useState(false);
  const dispatch = useDispatch();
  const textSize = useSelector((state) => state.worsa.textSize);

  const bracket = "Input > [+]";
  const enter = "Enter <-";

  const validWord = (e) => {
    e.length >= worsaDb.rightWord.en.length && e != worsaDb.rightWord.en
      ? (setRedLetters(true), dispatch(errorInput(true)))
      : (dispatch(errorInput(false)), setRedLetters(false));
    e == worsaDb.rightWord.en ? setEnter(true) : setEnter(false);
  };

  const keyDown = (e) => {
    if (e.key == "Enter" && isEnter) {
      dispatch(inputTest({ windowCondition: true }));
    }
  };
  return (
    <main
      className={`
        relative flex items-center w-full text-${
          textSize.size[textSize.indexButton]
        }
        m-2 mt-12
    `}>
      <span className="text-color_nine mr-2">{bracket}</span>
      <input
        onChange={(e) => validWord(e.target.value)}
        onKeyDown={keyDown}
        type="text"
        className={`
          bg-color_one
          border-none  
          ${isRedLetters ? "text-color_five" : "text-color_four"} 
          block outline-none w-1/2`}
        autoFocus
      />
      <div
        className={`
        ${isEnter ? "opacity-100 -top-12 animate-pulse" : "-top-14 opacity-0"}
        absolute transition-all left-0 text-color_five 
        border border-color_five px-2 
        `}>
        {enter}
      </div>
    </main>
  );
};
export default InputWord;
