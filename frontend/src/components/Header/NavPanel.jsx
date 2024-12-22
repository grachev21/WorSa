import { menu_list } from "../../data/ButtonMenuLIst";
const NavPanel = () => {
  return (
    <main className="fixed w-72 h-screen bg-color_two right-0 top-0 z-50 p-7">
      <ul className="w-full flex flex-col justify-start text-left text-glow">
        {menu_list.map((item, index) => {
          return (
            <li className="py-2 flex flex-row" key={index}>
              <div className="bg-color_four/15 w-7 h-7 
                rounded-lg flex items-center justify-center
                mr-6">
                <img className="invert w-3 h-3" src={item.img} alt=""></img>
              </div>
              <p className="">{item.title}</p>
            </li>
          )
        })}
      </ul>
    </main>
  );

};

export default NavPanel;
