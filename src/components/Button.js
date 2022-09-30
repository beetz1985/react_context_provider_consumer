
function Button(props) {

    const theme = (props.theme) === "dark" ? "dark" : "light";

    return (
        <button onClick={props.toggle} className={`${theme}-theme`}>Switch Theme</button>
    )
}

export default Button