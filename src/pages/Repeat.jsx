import Input from "../components/Input";
import Label from "../components/Label";

export default function LearnWords() {
  return (
    <div className="LearnWords">
      <div className="ru-word">hello world</div>
      <div className="word-options">
        <Label word="hello" />
        <Label word="words" />
        <Label word="print" />
        <Label word="components" />
      </div>
      <div className="input-answer">
        <Input />
      </div>
    </div>
  );
}
