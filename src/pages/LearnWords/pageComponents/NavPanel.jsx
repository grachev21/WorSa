import { useState,  } from "react";
import ButtonLeftCheckBox from "./ButtonLeftCheckBox";

import textSizeList from "../textSizeList";

const NavPanel = () => {
  const [value, setValue] = useState(1);
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <main className="bg-color_two rounded-t-lg flex flex-row justify-between px-2 text-md">
      <h1>Размеры текста</h1>
      <div className="flex justify-between">
        {textSizeList.map((item, index) => {
          return (
            <ButtonLeftCheckBox
              key={index}
              colorDot={index === value ? "before:bg-color_five" : "before:bg-color_four"}
              content={item.name}
              indexButton={index}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </main>
  );
};
export default NavPanel;
