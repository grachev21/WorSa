import { useSelector } from "react-redux";

import NavPanel from "./pageComponents/NavPanel";
import Title from "./pageComponents/Title";
import ListWords from "./pageComponents/ListWords";
import InputWord from "./pageComponents/InputWord";

const LearnWords = () => {
  const textSize = useSelector((state) => state.worsa.textSize);
  const errorInput = useSelector((state) => state.worsa.errorInput);
  console.log(errorInput);

  return (
    <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <section className="w-[660px] h-[400px] text-color_four">
        <div
          className={`w-full h-full border 
                      ${!errorInput?"border-color_four/10":"border-color_five"} 
                        shadow-xl rounded-lg`}>
          <NavPanel />
          <section className={`relative text-${textSize.size[textSize.indexButton]} m-2`}>
            <Title content={"Введите слово выбрав один из вариантов"} />
            <ListWords />
          </section>
          <InputWord />
        </div>
      </section>
    </main>
  );
};
export default LearnWords;
