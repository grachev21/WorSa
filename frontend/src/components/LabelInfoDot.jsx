
const LabelInfoDot = ({ title, value }) => {

  return (
    <main className="flex flex-row relative text-color_four 
                    bg-color_three rounded-lg p-3 m-2 h-16 border 
                    border-color_four/10 w-full sm:w-full">
      <div className="w-3 h-3 mr-3 mt-1 rounded-full bg-color_six z-10"></div>
      <div className="w-3 h-3 mr-3 mt-1 rounded-full bg-color_four absolute blur-sm opacity-35 "></div>
      <section className="flex flex-col items-start">
        <h1 className="text-sm font-semibold">{title}</h1>
        <strong className="text-color_four opacity-40 uppercase font-normal">{value}</strong>
      </section>
    </main>
  );
};
export default LabelInfoDot;
