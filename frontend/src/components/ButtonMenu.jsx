import style from "./styles.module.css";
import { useRef } from "react";

const ButtonMenu = ({ title }) => {
  const enter = () => {
    btn.current.classList.add("enter");
  };
  const lave = () => {
    btn.current.classList.remove("enter");
  };
  const btn = useRef(null);
  return (
    <button className={style.Button} ref={btn} onMouseEnter={enter} onMouseLeave={lave}>
      <div className={style.Cub}></div>
      <div className={style.Line}></div>
      <div className={style.Title}>{title}</div>
    </button>
  );
};
export default ButtonMenu;
