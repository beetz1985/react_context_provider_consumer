import React from "react";
const {Provider, Consumer} = React.createContext();

function ThemeContextProvider(props) {

    const [themeState, setThemeState] = React.useState("light");

    function handleToggle(e) {
        setThemeState((s)=>(s === "light") ? "dark" : "light")
    }

    return(
        <Provider value={{theme: themeState, toggle: handleToggle}}>
            {props.children}
        </Provider>
    )
}

export {ThemeContextProvider,  Consumer as ThemeContextConsumer}