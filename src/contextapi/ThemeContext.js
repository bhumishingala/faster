import React, { createContext, useReducer } from 'react';
import { themeReducer } from './reducer/ThemeReducer';
import { TOGGLE_THEME } from "./ActionType";

export const themeContext = createContext();

const initval = {
    theme : 'drak'
}

function ThemeContext({children}) {
    const [state,dispatch] =  useReducer(themeReducer , initval);
    const toggle_theme = (val) => {
        let newTheme = val === 'drak' ? 'light' : 'drak';
        dispatch({type : TOGGLE_THEME, payload : newTheme});
    }
    return (
            <themeContext.Provider 
                value={{
                    ...state,
                    toggle_theme
                }}
            >
                {children}
            </themeContext.Provider>
    );
}

export default ThemeContext;