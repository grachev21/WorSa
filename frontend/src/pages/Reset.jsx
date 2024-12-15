import Input from "../components/Input";
import ButtonInput from "../components/ButtonInput";

export default function Reset() {
  return (
    <div className="Reset">
      <form>
        <Input title="---:---" label="Напишите 'yes' для сброса" />
        <ButtonInput title="НАЧАТЬ ЗАНОВО" />
      </form>
    </div>
  );
}
