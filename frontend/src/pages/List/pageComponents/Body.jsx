import AudioButton from "./AudioButton";

const Body = ({ items }) => {
  return (
    <tbody>
      {items.results.map((item) => {
        return (
          <tr key={item.id} className="bg-color_three border-b">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-color_four">
              {item.en}
            </th>
            <td className="px-6 py-4">{item.ru}</td>
            <td className={`px-6 font-bold py-4 ${item.teached ? "text-color_nine" : "text-color_six"}`}>
              {item.teached ? "Выучил" : "Неизвестно"}
            </td>
            <td className={`px-6 font-bold py-4 ${item.repeated ? "text-color_nine" : "text-color_six"}`}>
              {item.repeated ? "Повторил" : "Не повторил"}
            </td>
            <td className="px-6 py-4">
              <AudioButton audio_word={item.audio} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Body;
