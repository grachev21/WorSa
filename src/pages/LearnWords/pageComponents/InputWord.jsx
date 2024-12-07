import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WordsTest from "../../../data/WordsTest";
import { errorInput, inputTest } from "../../../store/worsaSlice";

const InputWord = () => {
  const [isLength, setLength] = useState(false);
  const [isFieldChanges, setFieldChanges] = useState("");
  const dispatch = useDispatch();
  const textSize = useSelector((state) => state.worsa.textSize);
  const bracket = "Input > [+]";

  const validWord = (e) => {
    setFieldChanges(e);
    if (e.length >= WordsTest.rightWord.length && e != WordsTest.rightWord) {
      setLength(true);
      dispatch(errorInput(true));
    } else {
      if (e == WordsTest.rightWord) {
        console.log("true <<<")
        setFieldChanges("");
        dispatch(
          inputTest({
            wordTest: WordsTest.rightWord,
            windowCondition: true,
          })
        );
      } else {
        dispatch(errorInput(false));
        setLength(false);
      }
    }
  };

  return (
    <main className={`absolute bottom-2 left-2 flex items-center w-full text-${textSize.size[textSize.indexButton]}`}>
      <span className="text-color_nine mr-2">{bracket}</span>
      <input
        onChange={(e) => validWord(e.target.value)}
        value={isFieldChanges}
        type="text"
        id="success"
        className={`
          bg-color_one
          border-none  
          ${isLength ? "text-color_five" : "text-color_four"} 
          block outline-none w-1/2`}
        autoFocus
      />
    </main>
  );
};
export default InputWord;
