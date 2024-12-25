import { useDispatch, useSelector } from "react-redux";
import { textSize } from "../../../store/worsaSlice";
import { useState } from "react";

const ButtonLeftCheckBox = ({ content, indexButton }) => {
  const dispatch = useDispatch();
  const textSizeFunction = () => dispatch(textSize(indexButton));
  const reduxData = useSelector(state => state.worsa.textSize);
  const [isChecked, setIsChecked] = useState(true);
  console.log(reduxData)

  return (
    <div className="mx-4">
      <label className="inline-flex items-center" htmlFor="redCheckBox">
        <input
          id="redCheckBox"
          type="checkbox"
          className="w-4 h-4 accent-red-600"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="ml-2">{content}</span>
      </label>
    </div>
  );
};
export default ButtonLeftCheckBox;
