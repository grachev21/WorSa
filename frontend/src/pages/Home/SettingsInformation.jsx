import LabelInfoDot from "../../components/LabelInfoDot";
import { useEffect, useState } from "react";
import axios from "axios";

const SettingsInformation = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/w1/Settings')
      //axios.get('http://127.0.0.1:8000/api/w1/Settings/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);
  console.log(items[0].id, "<<<")
  return (
    <main className="flex flex-col justify-center items-center sm:w-full px-2 sm:px-20">
      <LabelInfoDot title={"Количество слов за день"} value={items[0].numberWordsDay} />
      <LabelInfoDot title={"Количество повторов при написании"} value={items[0].amountInputText} />
      <LabelInfoDot title={"Количество вариантов при угадывании"} value={items[0].numberOptionsGuessing} />
      <LabelInfoDot title={"Озвучка слов"} value={
        items[0].voiceoverWords ? "Включено" : "Выключено"
      } />
      <LabelInfoDot title={"Транскрипция"} value={"Включена"} />

    </main>
  );
};
export default SettingsInformation;
