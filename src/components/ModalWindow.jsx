import ButtonSery from "./ButtonSery";
import ButtonSalad from "./ButtonSalad";
const ModelWindow = ({ active, setActive }) => {
  return (
    <div
      className={
        active
          ? "h-full w-full fixed top-0 left-0 flex items-center justify-center transition-all scale-100"
          : "h-full w-full fixed top-0 left-0 flex items-center justify-center transition-all scale-0"
      }
      onClick={() => setActive(false)}>
      <div
        className="p-5 rounded-lg backdrop-blur-md bg-color_eight/30 border border-slate-700"
        onClick={(e) => e.stopPropagation()}>
        <form className="flex justify-between flex-col w-full h-full">
          <label className="text-color_four text-2xl font-bold mb-8" htmlFor="dict">
            Вставте текст в это поле
          </label>
          <textarea
            className="rounded-lg text-color_four text-base p-5 backdrop-blur-md bg-color_four/10 
                      resize-none outline-none border-none"
            id="dict"
            cols="50"
            rows="6"
            type="text"></textarea>
          <div className="flex justify-between items-center flex-row-reverse h-16 mt-9 mb-9 rounded-lg border border-slate-700">
            <input
              className="inline-block w-5 h-5 flex-shrink-0 flex-grow-0 border-0 accent-color_eight rounded-s-lg mr-5 bg-no-repeat"
              id="cuttingWords"
              type="checkbox"
            />
            <label className="text-color_four font-semibold ml-5" htmlFor="cuttingWords">
              Не сохранять слова короче двуъ символов
            </label>
          </div>
          <div className="flex justify-end">
            <ButtonSalad title={"Отмена"} />
            <ButtonSery title={"Создать"} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModelWindow;
