import Counter from "../../components/Counter";
import { useState } from "react";
import useInterval from "use-interval";
const listInformation = [
  { title: "Общая сумма слов", value: 436 },
  { title: "Заучено сегодня", value: 1336 },
  { title: "Повтор сегодня", value: 288 },
  { title: "Общая сумма повтора", value: 288 }
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
    <main className="w-full px-4 flex flex-row flex-wrap justify-between">
      {listInformation.map((listInformation, index) => {
        return (
          <section key={index} className="w-full h-40 my-5 relative">
            <div className="absolute w-full h-full blur-sm"
              style={gradientAnimation}></div>
            <span className="absolute w-full h-full left-0">
              <div className="flex flex-col justify-between items-center rounded-lg bg-color_three w-full h-full">
                <h1 className="font-bold text-2xl text-color_ten mt-3">
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
