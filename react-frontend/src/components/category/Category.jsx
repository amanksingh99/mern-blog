export function Category({ name = "programming", color = "white" }) {
    let bgcolor =
        name === "programming"
            ? "plum"
            : name === "javascript"
            ? "yellow"
            : "tomato";
    const categoryStyle = {
        backgroundColor: bgcolor,
        padding: "0.5em 0.7em",
        borderRadius: "5px",
        fontSize: "10px",
        display: "inline-block",
        fontWeight: "bold",
        color,
    };
    return <span style={categoryStyle}>{name}</span>;
}
