import Counter from "../../components/Counter";
import { useState } from "react";
import useInterval from "use-interval";
const listInformation = [
  { title: "Выучить слова", value: 436 },
  { title: "Заучено сегодня", value: 1336 },
  { title: "Повтор сегодня", value: 288 },
  { title: "Повтор сегодня", value: 288 }
];

const BlockInformation = () => {
  const [isDeg, setDeg] = useState(0);

  useInterval(() => {
    if (isDeg >= 360) {
      setDeg(0);
    } else {
      setDeg(isDeg + 1);
    }
  }, 100);
  const gradientAnimation = {
    backgroundImage: `conic-gradient(from ${isDeg}deg, #9f2398, #29d5a4, #ffffff, #9f2398`
  };
  return (
    <main className="w-full p-4 sm:px-20 flex flex-row flex-wrap justify-between">

      {listInformation.map((listInformation, index) => {
        return (
          <section key={index} className="w-full h-56 my-5 box-border relative md:w-72">
            <div className="rounded-lg w-full h-full absolute blur-sm" style={gradientAnimation}></div>
            <span className="absolute w-full h-full p-1">
              <div className="rounded-lg bg-color_three w-full h-full flex ">
                <h1 className="flex items-center pt-4 flex-col text-center font-bold text-3xl text-color_nine">
                  {listInformation.title}
                </h1>
                <Counter number={listInformation.value} />
              </div>
            </span>
          </section>
        );
      })}

    </main>
  );
};

export default BlockInformation;
