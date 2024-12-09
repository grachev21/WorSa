const InputWriteTest = () => {
  const inputChanges = (e) => {
    console.log(e);
  };
  const enter = () => {
    console.log("Pressed")
  }
  return (
    <main className={`flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <input
        onChange={(e) => inputChanges(e.target.value)}
        onKeyDown={enter}
        placeholder="name"
        type="text"
        id="success"
        className={`
        flex items-center justify-center outline-none w-64 bg-color_three/60
        border border-color_nine rounded-md h-9 p-2
        `}
        autoFocus
      />
    </main>
  );
};
export default InputWriteTest;
