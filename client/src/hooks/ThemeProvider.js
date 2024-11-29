import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const ThemeContext = createContext();

const useTheme = () => {
    return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
    const [lightTheme, setLightTheme] = useState(false);
    const [cookies, setCookie] = useCookies(["lightTheme"]);

    useEffect(() => {
        setLightTheme(cookies.lightTheme);
    }, []);

    useEffect(() => {
        if (lightTheme) {
            document.body.setAttribute("lightTheme", "");
        } else {
            document.body.removeAttribute("lightTheme");
        }
        setCookie("lightTheme", lightTheme)
    }, [lightTheme])

    const value = {
        lightTheme,
        setLightTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export {
    useTheme,
    ThemeProvider
};
