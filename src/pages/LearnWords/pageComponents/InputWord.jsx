import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WordsTest from "../../../data/WordsTest";
import { errorInput, inputTest } from "../../../store/worsaSlice";

const InputWord = () => {
  const [isRedLetters, setRedLetters] = useState(false);
  const [isEnter, setEnter] = useState(false);
  const dispatch = useDispatch();
  const textSize = useSelector((state) => state.worsa.textSize);

  const bracket = "Input > [+]";
  const enter = "Enter <-";

  const validWord = (e) => {
    e.length >= WordsTest.rightWord.en.length && e != WordsTest.rightWord.en
      ? (setRedLetters(true), dispatch(errorInput(true)))
      : (dispatch(errorInput(false)), setRedLetters(false));
    e == WordsTest.rightWord.en ? setEnter(true) : setEnter(false);
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
        ${isEnter ? "opacity-100 -top-12" : "-top-14 opacity-0"}
        absolute transition-all left-0 text-color_five 
        border border-color_five px-2 
        `}>
        {enter}
      </div>
    </main>
  );
};
export default InputWord;
