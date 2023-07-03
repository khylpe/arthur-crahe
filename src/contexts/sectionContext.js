import React, { createContext, useContext, useState } from "react";
import { useTheme } from './../contexts/themeContext';

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
       const { theme } = useTheme();
       const [currentSection, setCurrentSection] = useState("home");

       document.querySelector("html").classList = theme;
       return (
              <SectionContext.Provider value={{ currentSection, setCurrentSection }} >
                     <div className={theme}>
                            {children}
                     </div>
              </SectionContext.Provider>
       );
};

export function useSection() {
       const context = useContext(SectionContext);

       if (!context) {
              throw new Error("useSection must be used within a SectionProvider");
       }
       return context;
}

export const withSection = (WrappedComponent) => {
       return (props) => {
              const sectionContext = useSection();
              return <WrappedComponent {...props} {...sectionContext} />;
       };
};