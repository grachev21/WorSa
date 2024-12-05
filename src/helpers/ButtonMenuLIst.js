import home from "../media/icons/home-icon-silhouette_69524.png";
import create_dict from "../media/icons/create_dict.png";
import university from "../media/icons/university.png";
import reset from "../media/icons/reset.png";
import list from "../media/icons/list.png";
import repeat from "../media/icons/repeat.png";

export const menu_list = [
  {
    title: "Главная страница",
    img: home,
    link: "",
  },
  {
    title: "Создаеть словарь",
    img: create_dict,
    link: "createdict",
  },
  {
    title: "Учить слова",
    img: university,
    link: "university",
  },
  {
    title: "Повтор",
    img: repeat,
    link: "repeat",
  },
  {
    title: "Список слов",
    img: list,
    link: "list",
  },
  {
    title: "Стереть данные",
    img: reset,
    link: "reset",
  },
];
