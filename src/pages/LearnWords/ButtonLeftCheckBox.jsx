import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { changeSize } from "../../store/worsaSlice";

const ButtonLeftCheckBox = ({ colorDot, content, indexButton }) => {
  // const dispatch = useDispatch();
  // const changeSizeFunction = () => dispatch(changeSize("hello redux <<<"));

  return (
    <button
      className={`
            relative 
            px-4
            text-color_ten
            // ${colorDot} 
            before:content-[''] 
            before:w-2 
            before:h-2 
            before:rounded-full 
            before:absolute
            before:left-0 
            before:top-1/2 
            before:-translate-y-1/2 
            `}
    >
      {content}
    </button>
  );
};

export default ButtonLeftCheckBox;
