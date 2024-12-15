import LabelInfoDot from "../../components/LabelInfoDot";
const SettingsInformation = () => {
  return (
    <main className="flex flex-col justify-center items-center sm:w-full px-2 sm:px-20">
      <LabelInfoDot title={"Количество слов за день"} value={20} />
      <LabelInfoDot title={"Количество повторов при написании"} value={23} />
      <LabelInfoDot title={"Количество вариантов при угадывании"} value={8} />
      <LabelInfoDot title={"Озвучка слов"} value={"Отключена"} />
      <LabelInfoDot title={"Транскрипция"} value={"Включена"} />
    </main>
  );
};
export default SettingsInformation;
