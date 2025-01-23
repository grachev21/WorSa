import LabelInfoDot from "../../components/LabelInfoDot";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../utils/api";

const SettingsInformation = () => {
const [settings, setSettings] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await api.get("http://127.0.0.1:8000/api/w1/Settings");
                setSettings(response.data);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError('Settings not found');
                } else {
                    setError('An error occurred while fetching the settings');
                }
                console.error('There was an error fetching the items!', error);
            }
        };

        fetchSettings();
    }, []);

    console.log(settings);
  return (
    <main className="flex flex-col justify-center items-center">
      {/* <LabelInfoDot title={"Количество слов за день"} value={items.numberWordsDay} />
      <LabelInfoDot title={"Количество повторов при написании"} value={items.amountInputText} />
      <LabelInfoDot title={"Количество вариантов при угадывании"} value={items.numberOptionsGuessing} />
      <LabelInfoDot title={"Озвучка слов"} value={items.voiceoverWords ? "Включено" : "Выключено"} />
      <LabelInfoDot title={"Транскрипция"} value={items.transcriptions ? "Включено" : "Выключено"} /> */}
    </main>
  );
};
export default SettingsInformation;
