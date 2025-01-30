import ButtonSery from "../ButtonSery";
import ButtonSalad from "../ButtonSalad";
import { useSelector } from "react-redux";
import { modalWindowSettings } from "../../store/worsaSlice";

const ModelWindow = () => {
  const showWindow = useSelector((state) => state.worsa.modalWindowSettings);
  console.log(showWindow, "<");

  return (
    <main className={`${showWindow ? "block": "hidden"} w-screen h-screen absolute`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
        <div className="border border-color_four/10 rounded-lg bg-color_eight/30 backdrop-blur-md">
          <form className="p-4">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-5">
                  <label htmlFor="fName" className="mb-3 block text-base font-medium text-color_nine">
                    Количество повторов при написании
                  </label>
                  <input
                    type="text"
                    name="guest"
                    id="guest"
                    placeholder="8"
                    className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3">
                <div className="mb-5">
                  <label htmlFor="fName" className="mb-3 block text-base font-medium text-color_nine">
                    Количество вариантов при угадывании
                  </label>
                  <input
                    type="text"
                    name="guest"
                    id="guest"
                    placeholder="8"
                    className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3">
                <div className="mb-5">
                  <label htmlFor="fName" className="mb-3 block text-base font-medium text-color_nine">
                    Количество слов в день
                  </label>
                  <input
                    type="text"
                    name="guest"
                    id="guest"
                    placeholder="20"
                    className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-color_ten">Озвучка</label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                  <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-color_nine">
                    Включена
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                  <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-color_nine">
                    Выключена
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-color_ten">Скорость озвучки</label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                  <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-color_nine">
                    Медленно
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                  <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-color_nine">
                    Быстро
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button className="hover:shadow-form rounded-md bg-color_nine py-3 px-8 text-center text-base font-semibold text-color_four outline-none">
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default ModelWindow;
