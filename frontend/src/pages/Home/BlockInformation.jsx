import Counter from "../../components/Counter";
import { useState } from "react";
import useInterval from "use-interval";
import img_1 from "./images/learned_today.jpg";
import img_2 from "./images/total_amount_repetitions.jpg";
import img_3 from "./images/total_word_count.jpg";
import img_4 from "./images/repeat_today.jpg";
const listInformation = [
  { title: "Общая сумма слов", value: 436, img: img_1 },
  { title: "Заучено сегодня", value: 1336, img: img_2 },
  { title: "Повтор сегодня", value: 288, img: img_3 },
  { title: "Все повторы", value: 288, img: img_4 }
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
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {listInformation.map((listInformation, index) => {
        return (
          <section key={index} className="w-full">
            <div className="absolute w-full blur-sm" style={gradientAnimation}></div>
            <span className="w-full left-0">

              <div className="border border-color_four/10 rounded-lg shadow bg-color_three">
                <img className="rounded-t-lg" src={listInformation.img} alt="" />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-color_four">{listInformation.title}</h5>
                  </a>
                  <p className="mb-3 font-normal text-color_four/60">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                  <Counter number={listInformation.value} />
                </div>
              </div>

            </span>
          </section>
        );
      })}

    </main>
  );
};

export default BlockInformation;

//
//<div className="flex flex-col justify-between items-center rounded-lg bg-red-900 w-full h-full">
//  <h1 className="font-bold text-2xl text-color_ten mt-3">
//    {listInformation.title}
//  </h1>
//  <Counter number={listInformation.value} />
//</div>
//j
