import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
       const [theme, setTheme] = useState('dark');
       // document.querySelector('html').classList = (`bg-${theme}-document text-${theme}-document`);

       const toggleTheme = () => {
              setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
       };

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

const useStyles = () => {
       const theme = useTheme().theme;

       const darkTheme = {
              navItems: {
                     current: {
                            notHover: {
                                   backgroundColor: "#333333",
                                   color: "#ffffff",
                                   padding: "10px 20px",
                                   borderRadius: "5px",
                                   textDecoration: "none",

                            },
                            hover: {
                                   backgroundColor: "#4d4d4d",
                                   padding: "10px 20px",
                                   color: "#ffffff",
                                   textDecoration: "none",
                            },
                     },
                     notCurrent: {
                            notHover: {
                                   color: "#b8b8b8",
                                   textDecoration: "none",
                                   padding: "10px 20px",
                            },
                            hover: {
                                   color: "#ffffff",
                                   textDecoration: "underline",
                                   padding: "10px 20px",
                            },
                     },
              },
              header: {
                     backgroundColor: "#333322",
              },
              title: {
                     fontSize: "28px",
                     fontWeight: "bold",
                     color: "#ffffff"
              },
              currentSection: {
                     notHover: {
                            fontWeight: "bold",
                            color: "#ffffff",
                     },
                     hover: {
                            color: "#ff8c00",
                     },
              },
              input: {
                     notHover: {
                            backgroundColor: "#444444",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px",
                     },
                     hover: {
                            backgroundColor: "#555555",
                            borderColor: "#ff8c00",
                     },
              },
              button: {
                     notHover: {
                            backgroundColor: "#ff8c00",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            cursor: "pointer",
                     },
                     hover: {
                            backgroundColor: "#ff6347",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            cursor: "pointer",
                     },
              },
              link: {
                     notHover: {
                            color: "#ff8c00",
                            textDecoration: "none",
                     },
                     hover: {
                            color: "#ff6347",
                            textDecoration: "underline",
                     },
              },
              text: {
                     notHover: {
                            color: "#ffffff",
                     },
                     hover: {
                            color: "#ff8c00",
                     },
              },
              document: {
                     backgroundColor: "#1a1a1a",
              },
       };

       const lightTheme = {
              navItems: {
                     current: {
                            notHover: {
                                   backgroundColor: "#FDFDFD",
                                   color: "#333333",
                                   padding: "10px 20px",
                                   borderRadius: "5px",
                            },
                            hover: {
                                   backgroundColor: "#F5F5F5",
                                   color: "#333333",
                            },
                     },
                     notCurrent: {
                            notHover: {
                                   color: "#666666",
                                   textDecoration: "none",
                            },
                            hover: {
                                   color: "#333333",
                                   textDecoration: "underline",
                            },
                     },
              },
              title: {
                     notHover: {
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "#333333",
                     },
                     hover: {
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "#4169E1",
                     },
              },
              currentSection: {
                     notHover: {
                            fontWeight: "bold",
                            color: "#333333",
                     },
                     hover: {
                            color: "#4169E1",
                     },
              },
              input: {
                     notHover: {
                            backgroundColor: "#FFFFFF",
                            color: "#333333",
                            border: "1px solid #D4D4D4",
                            borderRadius: "5px",
                            padding: "10px",
                     },
                     hover: {
                            backgroundColor: "#F5F5F5",
                            borderColor: "#4169E1",
                     },
              },
              button: {
                     notHover: {
                            backgroundColor: "#4169E1",
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            cursor: "pointer",
                     },
                     hover: {
                            backgroundColor: "#1E90FF",
                     },
              },
              link: {
                     notHover: {
                            color: "#4169E1",
                            textDecoration: "none",
                     },
                     hover: {
                            color: "#1E90FF",
                            textDecoration: "underline",
                     },
              },
              text: {
                     notHover: {
                            color: "#333333",
                     },
                     hover: {
                            color: "#4169E1",
                     },
              },
              document: {
                     backgroundColor: "#FFFFFF",
              },
       };

       return theme === 'dark' ? darkTheme : lightTheme;
}
export { ThemeContext, ThemeProvider, useTheme, useStyles };