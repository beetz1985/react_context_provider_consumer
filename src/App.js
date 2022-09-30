import React from "react";

import Header from './components/Header';
import Button from './components/Button';
import {ThemeContextConsumer} from './themeContext'

function App(props) {

    console.log(props)
   
    return (
        <div>
            <ThemeContextConsumer>
                {({theme, toggle})=> <Header theme={theme} toggle={toggle}/>}
            </ThemeContextConsumer>
            
            <ThemeContextConsumer>
                {({theme, toggle})=> <Button theme={theme} toggle={toggle}/>}
            </ThemeContextConsumer>

            <Button theme="monkey"/>
            <br/>
        </div>
    )
}

export default App