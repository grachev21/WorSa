import LabelInfoDot from "../../components/LabelInfoDot";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../utils/api";
import { data } from "react-router-dom";

const SettingsInformation = () => {
  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("http://127.0.0.1:8000/api/v1/Settings/");
        setSettings(response.data);
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
  // console.log(settings, "Данные о настройках");
  // console.log(typeof(settings), "<<<");
  // console.log(Object.entries(settings));
  // console.log(settings[0].user);

  if (error) {
    return <div>{error}</div>;
  }

  if (!settings) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {settings.map((value) => {
        return (
          <div className="flex flex-col justify-center items-center" key={value.id}>
            <LabelInfoDot title="Пользователь" value={value.user} />
            <LabelInfoDot title="Количество повторов при написании" value={value.amountInputText} />
            <LabelInfoDot title="Количество вариантов при угадывании" value={value.numberOptionsGuessing} />
            <LabelInfoDot title="Количество слов в день" value={value.numberWordsDay} />
            <LabelInfoDot title="Скорость озвучки" value={value.voiceoverWords ? "Медленно" : "Быстро"} />
            <LabelInfoDot title="Озвучка слов" value={value.voiceoverWords ? "Включено" : "Выключено"} />
          </div>
        );
      })}
    </main>
  );
};

export default SettingsInformation;
