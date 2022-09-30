function Header(props) {

  

    const theme = (props.theme) === "dark" ? "dark" : "light";

    return (
        <header className={`${theme}-theme`}>
            <h2>{theme === "dark" ? "Dark" : "Light" } Theme</h2>
        </header>
    )
}

export default Header