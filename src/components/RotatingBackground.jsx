import { useState } from "react";
import useInterval from "use-interval";

const RotatingBackground = () => {
  const [isDeg, setDeg] = useState(0);
  useInterval(() => {
    if (isDeg >= 360) {
        setDeg(0)
    } else {
      setDeg(isDeg + 1);
    }
  }, 100);
  const gradient = {
    background: `linear-gradient(${isDeg}deg, #0d041e 0%, #1c1a37 100%)`
  };
  return <main className="fixed w-full h-screen bottom-0 right-0 -z-50" style={gradient}> </main>;
};
export default RotatingBackground;
