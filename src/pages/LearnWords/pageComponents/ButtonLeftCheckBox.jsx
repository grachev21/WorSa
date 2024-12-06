import { useDispatch, useSelector } from "react-redux";
import { textSize } from "../../../store/worsaSlice";

const ButtonLeftCheckBox = ({ colorDot, content, indexButton }) => {
  const dispatch = useDispatch();
  const textSizeFunction = () => dispatch(textSize(indexButton));
  const reduxData = useSelector(state => state.worsa.textSize);

  return (
    <button
      className={`
            relative 
            px-4
            text-color_ten
            ${reduxData.indexButton == indexButton ? "before:bg-blue-500" : "before:bg-blue-300"}
            before:content-[''] 
            before:w-2 
            before:h-2 
            before:rounded-full 
            before:absolute
            before:left-0 
            before:top-1/2 
            before:-translate-y-1/2 
            `}
      onClick={textSizeFunction}
    >
      {content}
    </button>
  );
};

export default ButtonLeftCheckBox;
