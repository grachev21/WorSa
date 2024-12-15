import { useSelector } from "react-redux";
import NavPanel from "./pageComponents/NavPanel";
import Title from "./pageComponents/Title";
import ListWords from "./pageComponents/ListWords";
import InputWord from "./pageComponents/InputWord";
import InputWriteTest from "./pageComponents/InputWriteTest";

const LearnWords = () => {
  const textSize = useSelector((state) => state.worsa.textSize);
  const errorInput = useSelector((state) => state.worsa.errorInput);
  const inputTest = useSelector((state) => state.worsa.inputTest);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <section className="w-[660px] h-[400px] text-color_four">
        <div
          className={`w-full h-full border ${!errorInput ? "border-color_four/10" : "border-color_five"} ${
            inputTest.windowCondition ? "hidden" : "block"
          } shadow-xl rounded-lg bg-color_one flex flex-col justify-between`}>
          <NavPanel />

          <Title content={"Введите слово выбрав один из вариантов"} />
          <section className={`text-${textSize.size[textSize.indexButton]} m-2`}>
            <ListWords />
          </section>
          <InputWord />
        </div>

        <div
          className={`w-full h-full 
            border border-color_four/10
            rounded-lg backdrop-blur-md bg-color_eight/30
            ${!inputTest.windowCondition ? "hidden" : "block"}
            `}>
          <InputWriteTest />
        </div>
      </section>
    </main>
  );
};
export default LearnWords;
