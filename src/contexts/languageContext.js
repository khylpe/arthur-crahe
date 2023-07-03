// LanguageContext.js
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
       const [language, setLanguage] = useState("fr");
       document.querySelector("html").setAttribute("lang", language);
       const toggleLanguage = () => {
              setLanguage(language === "fr" ? "en" : "fr");
              document.querySelector("html").setAttribute("lang", language);
       };
       return (
              <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
                     {children}
              </LanguageContext.Provider>
       );
};

export const withLanguage = (WrappedComponent) => {
       return (props) => {
              const languageContext = useContext(LanguageContext);
              return <WrappedComponent {...props} {...languageContext} />;
       };
};