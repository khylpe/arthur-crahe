import React, { useState, useContext, useEffect } from 'react';
import useThemeDetector from './../hooks/themeDetector'

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
       const isDarkTheme = useThemeDetector();
       const [theme, setTheme] = useState(isDarkTheme ? 'dark' : 'light');
       // document.querySelector('html').classList = (`bg-${theme}-document text-${theme}-document`);

       const toggleTheme = () => {
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

const useStyles = () => {
       const theme = useTheme().theme;

       const darkTheme = {
              navItems: {
                current: {
                  notHover: {
                    backgroundColor: "#2b2b2b",
                    color: "#c0c0c0",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                  },
                  hover: {
                    backgroundColor: "#3c3c3c",
                    padding: "10px 20px",
                    color: "#c0c0c0",
                    textDecoration: "none",
                  },
                },
                notCurrent: {
                  notHover: {
                    color: "#808080",
                    textDecoration: "none",
                    padding: "10px 20px",
                  },
                  hover: {
                    color: "#c0c0c0",
                    textDecoration: "underline",
                    padding: "10px 20px",
                  },
                },
              },
              header: {
                backgroundColor: "#222222",
              },
              title: {
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#c0c0c0",
              },
              currentSection: {
                notHover: {
                  fontWeight: "bold",
                  color: "#c0c0c0",
                },
                hover: {
                  color: "#5db5ff",
                },
              },
              input: {
                notHover: {
                  backgroundColor: "#3c3c3c",
                  color: "#c0c0c0",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px",
                },
                hover: {
                  backgroundColor: "#4d4d4d",
                  borderColor: "#5db5ff",
                },
              },
              button: {
                notHover: {
                  backgroundColor: "#3c3c3c",
                  color: "#c0c0c0",
                  border: "2px solid #5db5ff",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                },
                hover: {
                  backgroundColor: "#4d4d4d",
                  color: "#c0c0c0",
                  border: "2px solid #6ec6ff",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                },
              },
              link: {
                notHover: {
                  color: "#5db5ff",
                  textDecoration: "none",
                },
                hover: {
                  color: "#6ec6ff",
                  textDecoration: "underline",
                },
              },
              text: {
                notHover: {
                  color: "#c0c0c0",
                },
                hover: {
                  color: "#5db5ff",
                },
              },
              document: {
                backgroundColor: "#121212",
              },
            };

       const lightTheme = {
              navItems: {
                     current: {
                            notHover: {
                                   backgroundColor: "#e0e0e0",
                                   color: "#333333",
                                   padding: "10px 20px",
                                   borderRadius: "5px",
                                   textDecoration: "none",
                            },
                            hover: {
                                   backgroundColor: "#d0d0d0",
                                   padding: "10px 20px",
                                   color: "#333333",
                                   textDecoration: "none",
                            },
                     },
                     notCurrent: {
                            notHover: {
                                   color: "#707070",
                                   textDecoration: "none",
                                   padding: "10px 20px",
                            },
                            hover: {
                                   color: "#333333",
                                   textDecoration: "underline",
                                   padding: "10px 20px",
                            },
                     },
              },
              header: {
                     backgroundColor: "#f0f0f0",
              },
              title: {
                     fontSize: "28px",
                     fontWeight: "bold",
                     color: "#333333",
              },
              currentSection: {
                     notHover: {
                            fontWeight: "bold",
                            color: "#333333",
                     },
                     hover: {
                            color: "#0077cc",
                     },
              },
              input: {
                     notHover: {
                            backgroundColor: "#ffffff",
                            color: "#333333",
                            border: "1px solid #cccccc",
                            borderRadius: "5px",
                            padding: "10px",
                     },
                     hover: {
                            backgroundColor: "#f8f8f8",
                            borderColor: "#0077cc",
                     },
              },
              button: {
                     notHover: {
                            backgroundColor: "#0077cc",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            cursor: "pointer",
                     },
                     hover: {
                            backgroundColor: "#0088dd",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            cursor: "pointer",
                     },
              },
              link: {
                     notHover: {
                            color: "#0077cc",
                            textDecoration: "none",
                     },
                     hover: {
                            color: "#0088dd",
                            textDecoration: "underline",
                     },
              },
              text: {
                     notHover: {
                            color: "#333333",
                     },
                     hover: {
                            color: "#0077cc",
                     },
              },
              document: {
                     backgroundColor: "#ffffff",
              },
       };
       return theme === 'dark' ? darkTheme : lightTheme;
}
export { ThemeContext, ThemeProvider, useTheme, useStyles };