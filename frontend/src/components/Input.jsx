export default function Input({title, label}) {
    return (
        <div className="input">
            <label>{label}</label>
            <input placeholder={title} type="text" name="name" />
        </div>
    )

}