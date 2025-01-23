import SettingsInformation from "./SettingsInformation";
import BlockInformation from "./BlockInformation";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Graphic from "./Graphic";

export default function Home() {
  return (
    <main>
      <Title text={"RunWord - помощник в освоении и отработки слов"} />
      <Text text={"Здесь вы сможете создать словарь из любого текста, алгоритм удалит все повторяющиеся слова и сортируит их по алфавиту"} />
      <Title text={"Информация о настройках"} />
      {/* <SettingsInformation /> */}
      <Title text={"Информация о выших достижениях"} />
      <BlockInformation />
      <Title text={"Графики"} />
      <Graphic />
    </main>
  );
}
