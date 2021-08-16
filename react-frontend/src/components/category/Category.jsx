export function Category({ name = "programming", color = "white" }) {
    let bgcolor;
    switch (name) {
        case "C++":
            bgcolor = "#11052C";
            break;
        case "Java":
            bgcolor = "#3D087B";
            break;
        default:
            bgcolor = "tomato";
    }
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
