import worsaDb from "../../../data/worsaDb";

const ListWords = () => {
  const brackets = ">>> ";
  return (
    <main className="">
      <h3 className="font-bold text-xl text-color_six animate-pulse drop-shadow-md mb-5">
        {brackets + worsaDb.rightWord.ru}
      </h3>
      <ul>
        {worsaDb.words.map((value, index) => {
          return (
            <li className="flex flex-row  justify-start" key={index}>
              <span className="opacity-30 mr-2">{value.number}.</span>
              <span className="text-color_nine">{value.word}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default ListWords;
