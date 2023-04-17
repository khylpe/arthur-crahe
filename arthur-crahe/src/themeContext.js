import { createContext, useContext, useState } from "react";
import { lightTheme, darkTheme } from "./theme";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
       const [theme, setTheme] = useState(lightTheme);

       const toggleTheme = () => {
              setTheme(theme === lightTheme ? darkTheme : lightTheme);
       };

       return (
              <ThemeContext.Provider value={{ theme, toggleTheme }}>
                     {children}
              </ThemeContext.Provider>
       );
};

export const withTheme = (Component) => {
       return (props) => {
              const { theme, toggleTheme } = useTheme();
              return <Component {...props} theme={theme} toggleTheme={toggleTheme} />;
       };
};