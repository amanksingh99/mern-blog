import "./Button.css";
export default function Button({ text, modifierClass = "" }) {
    return <button className={`Button ${modifierClass}`}>{text}</button>;
}
