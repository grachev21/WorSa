import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WordsTest from "../../../data/WordsTest";
import { errorInput, inputTest } from "../../../store/worsaSlice";

const InputWord = () => {
  const [isLength, setLength] = useState(false);
  const [isEnter, setEnter] = useState(false);
  const [isPressInput, setPressInput] = useState(false);
  const dispatch = useDispatch();
  const textSize = useSelector((state) => state.worsa.textSize);

  const bracket = "Input > [+]";
  const enter = "Enter <-";

  const keyDown = (e) => {
    switch (e.key) {
      case "Enter":
        setPressInput(true)
        break;
      default:
        break;
    }
    // if (e.key == "Enter" && setEnter) {
    // }
  };
  const validWord = (e) => {
    if (e.length >= WordsTest.rightWord.en.length && e != WordsTest.rightWord.en) {
      setLength(true);
      dispatch(errorInput(true));
    } else if (e == WordsTest.rightWord.en) {
      setEnter(true);
      if (isPressInput && isEnter) {
        dispatch(inputTest({ windowCondition: true }));
      }
    } else {
      dispatch(errorInput(false));
      setLength(false);
      setEnter(false);
    }
  };
  return (
    <main
      className={`
        relative flex items-center w-full text-${textSize.size[textSize.indexButton]}
        m-2 mt-12
    `}>
      <span className="text-color_nine mr-2">{bracket}</span>
      <input
        onChange={(e) => validWord(e.target.value)}
        onKeyDown={isEnter ? keyDown : null}
        type="text"
        className={`
          bg-color_one
          border-none  
          ${isLength ? "text-color_five" : "text-color_four"} 
          
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
