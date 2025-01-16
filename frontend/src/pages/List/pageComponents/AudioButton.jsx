import useSound from "use-sound";
import { useState, useEffect } from "react";
import icon from "../../../media/icons/icons8-play-30.png";

const AudioButton = ({ audio_word }) => {
  const [play] = useSound(audio_button);
  return (
    <main onClick={play} className="cursor-pointer">
      <img className="w-5 h-5 invert" src={icon} alt=""></img>
    </main>
  );
};
export default AudioButton;
