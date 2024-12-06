import WordsTest from "../../../data/WordsTest";

const ListWords = () => {
  return (
    <main className="">
      <ul className="">
        {WordsTest.words.map((value, index) => {
          return (
            <li className="flex flex-row  justify-start" key={index}>
              <span className="opacity-30 mr-2">
                {value.number}. 
              </span>
              <span className="text-color_nine">
                {value.word}
              </span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default ListWords;
