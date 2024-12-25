import { useState } from "react";
import useInterval from "use-interval";
const Counter = ({ number }) => {
  const [isNumber, setNumber] = useState(0);
  useInterval(() => {
    if (isNumber >= number) {
      clearInterval();
    } else {
      setNumber(isNumber + 1);
    }
  }, 20);
  return <main className="text-3xl font-bold  text-color_four/60">{isNumber}</main>;
};
export default Counter;
