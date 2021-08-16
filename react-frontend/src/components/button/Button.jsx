import "./Button.css";
export default function Button({ text, modifierClass = "", type = "text" }) {
    return (
        <button type={type} className={`Button ${modifierClass}`}>
            {text}
        </button>
    );
}
