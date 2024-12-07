import { useSelector } from "react-redux";
import NavPanel from "./pageComponents/NavPanel";
import Title from "./pageComponents/Title";
import ListWords from "./pageComponents/ListWords";
import InputWord from "./pageComponents/InputWord";

const LearnWords = () => {
  const textSize = useSelector((state) => state.worsa.textSize);
  const errorInput = useSelector((state) => state.worsa.errorInput);
  const inputTest = useSelector((state) => state.worsa.inputTest);

  return (
    <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <section className="w-[660px] h-[400px] text-color_four">
        <div
          className={`w-full h-full border ${!errorInput ? "border-color_four/10" : "border-color_five"} ${
            inputTest.windowCondition ? "hidden" : "block"
          } shadow-xl rounded-lg bg-color_one`}>
          <NavPanel />
          <section className={`relative text-${textSize.size[textSize.indexButton]} m-2`}>
            <Title content={"Введите слово выбрав один из вариантов"} />
            <ListWords />
          </section>
          <InputWord />
        </div>
        <div
          className={`w-full h-full border border-color_four/10 shadow-xl rounded-lg bg-color_one ${
            !inputTest.windowCondition ? "hidden" : "block"
          }`}>
          {/* <div className="w-1/3 h-1/3"></div> */}
          <NavPanel />
        </div>
      </section>
    </main>
  );
};
export default LearnWords;
