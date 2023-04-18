import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
       const [headerHeight, setHeaderHeight] = useState(0);
       
       const [currentSection, setCurrentSection] = useState("home");

       return (
              <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
                     {children}
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