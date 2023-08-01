import React, { useState, useContext, useEffect } from 'react';
import useThemeDetector from './../hooks/themeDetector'

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
       const isDarkTheme = useThemeDetector();
       const [theme, setTheme] = useState(isDarkTheme ? 'dark' : 'light');
       document.querySelector("html").classList = theme;


       const toggleTheme = () => {
              document.querySelector("html").classList = theme;
              setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
       };

       useEffect(() => {
              setTheme(isDarkTheme ? 'dark' : 'light');
       }, [isDarkTheme]);

       return (
              <ThemeContext.Provider value={{ theme, toggleTheme }}>
                     {children}
              </ThemeContext.Provider>
       );
};

const useTheme = () => {
       const context = useContext(ThemeContext);

       if (!context) {
              throw new Error('useTheme must be used within a ThemeProvider');
       }
       return context;
};

export { ThemeContext, ThemeProvider, useTheme };