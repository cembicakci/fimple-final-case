import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = (props) => {

    const themes = {
        dark: {
            color: 'white',  
            background: 'black'
        },
        light: {
            color: 'black',
            background: 'white'
        }
    }

    
    const values = {
        themes
    }

    return (
        <ThemeContext.Provider value={values}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext