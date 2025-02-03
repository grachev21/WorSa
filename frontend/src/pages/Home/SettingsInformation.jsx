import LabelInfoDot from "../../components/LabelInfoDot";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../utils/api";
import { data } from "react-router-dom";

const SettingsInformation = () => {
  const [settings, setSettings] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("http://127.0.0.1:8000/api/v1/Settings/");
        setSettings(response.data[0]);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Settings not found");
        } else {
          setError("An error occurred while fetching the settings");
        }
        console.error("There was an error fetching the items!", error);
      }
    };

    fetchSettings();
  }, []);

  console.log(settings, "Данные о настройках");

  return (
    <main>
          <div className="flex flex-col justify-center items-center" key={settings.id}>
            <LabelInfoDot title="Пользователь" value={settings.user} />
            <LabelInfoDot title="Количество повторов при написании" value={settings.amountInputText} />
            <LabelInfoDot title="Количество вариантов при угадывании" value={settings.numberOptionsGuessing} />
            <LabelInfoDot title="Количество слов в день" value={settings.numberWordsDay} />
            <LabelInfoDot title="Скорость озвучки" value={settings.voiceoverWords ? "Медленно" : "Быстро"} />
            <LabelInfoDot title="Озвучка слов" value={settings.voiceoverWords ? "Включено" : "Выключено"} />
          </div>
    </main>
  );
};

export default SettingsInformation;
