import LabelInfoDot from "../../components/LabelInfoDot";
import { useEffect, useState } from "react";
import axios from "axios";

const SettingsInformation = () => {

  const [items, setItems] = useState([]);

  //useEffect(() => {
  //  axios.get('http://127.0.0.1:8000/api/w1/Settings/1')
  //    .then(response => {
  //      setItems(response.data);
  //    })
  //    .catch(error => {
  //      console.error('There was an error fetching the items!', error);
  //    });
  //}, []);
  return (
    <main className="flex flex-col justify-center items-center sm:w-full px-2 sm:px-20">
      <LabelInfoDot title={"Количество слов за день"} value={items.numberWordsDay} />
      <LabelInfoDot title={"Количество повторов при написании"} value={items.amountInputText} />
      <LabelInfoDot title={"Количество вариантов при угадывании"} value={items.numberOptionsGuessing} />
      <LabelInfoDot title={"Озвучка слов"} value={items.voiceoverWords ? "Включено" : "Выключено"} />
      <LabelInfoDot title={"Транскрипция"} value={items.transcriptions ? "Включено" : "Выключено"} />
    </main>
  );
};
export default SettingsInformation;
