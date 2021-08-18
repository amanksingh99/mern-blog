import "./Button.css";
export default function Button({
    text,
    modifierClass = "",
    type = "text",
    ...props
}) {
    return (
        <button {...props} type={type} className={`Button ${modifierClass}`}>
            {text}
        </button>
    );
}
