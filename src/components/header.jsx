import React, { Component, useState, useRef, useEffect } from 'react';
import './../styles/header.css';
import { withTheme } from "./../contexts/themeContext";
import { withSection } from "./../contexts/sectionContext";
import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";
import { useAllHoverStyles } from "./../hooks/stylesAndHover";

const Header = (props) => {

       const { currentSection } = props;
       const { theme, toggleTheme } = props;
       const { language, toggleLanguage } = props;
       const [isCollapsed, setIsCollapsed] = useState(true);

       const headerRef = useRef(null);

       const hoverStyles = useAllHoverStyles(theme);
       const [windowWidth, setWindowWidth] = useState(window.innerWidth);

       useEffect(() => {
              if (headerRef.current) {
                     const currentHeader = headerRef.current.classList.contains("lg:hidden") ? headerRef.current.children[0] : headerRef.current;
                     props.setHeaderHeight(currentHeader.offsetHeight);
                     window.addEventListener('resize', () => {
                            props.setHeaderHeight(currentHeader.offsetHeight);
                     });
                     return () => {
                            window.removeEventListener('resize', () => {
                                   props.setHeaderHeight(currentHeader.offsetHeight);
                            });
                     }
              }
       }, [headerRef, props]);

       const handleSectionChange = (section) => {
              props.setCurrentSection(section);
       }

       const toggleNavbar = () => {
              if (!isCollapsed) {
                     props.setHeaderHeight(headerRef.current.offsetHeight);
              }
              setIsCollapsed(!isCollapsed);
       };
       console.log({...hoverStyles.navItemCurrent.style})

       return (
              <div >
                     {/* display this div when media is smaller tha LG */}
                     {/* collapsible navbar */}
                     <div className="lg:hidden" >
                            <header ref={headerRef} className="flex flex-col">
                                   <div className="flex-shrink-0 py-4 px-6">
                                          <div className="flex items-center justify-between">
                                                 <div className="text-xl font-bold"
                                                 >
                                                        <span {...hoverStyles.title}>Arthur CRAHE </span>
                                                        <span className="">/{currentSection}</span>
                                                 </div>
                                                 <button className="focus:outline-none lg:hidden" onClick={toggleNavbar} {...hoverStyles.button}>
                                                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                                               <path
                                                                      fillRule="evenodd"
                                                                      clipRule="evenodd"
                                                                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                                               />
                                                        </svg>
                                                 </button>
                                          </div>
                                          <nav className={`mt-4 ${isCollapsed ? 'hidden' : ''}`}>
                                                 <a {...hoverStyles.link} className="block py-2 px-4 text-sm" href="#" >Dashboard</a>
                                                 <a {...hoverStyles.link} className="block py-2 px-4 text-sm" href="#" >Projects</a>
                                                 <a {...hoverStyles.link} className="block py-2 px-4 text-sm" href="#" >Tasks</a>
                                          </nav>
                                   </div>
                            </header>
                     </div>

                     {/* display this div when media is bigger tha LG */}
                     <div className='hidden lg:block'>
                            <header ref={headerRef} className='fixed top-0 w-full z-50 py-2 px-20 flex items-center justify-center' style={theme.document}>
                                   <div className='flex items-center'>
                                          <a {...hoverStyles.button} style={currentSection === "home" ? {...hoverStyles.navItemCurrent.style} : {...hoverStyles.navItems.style}} onClick={() => handleSectionChange("home")}>{translations[language].home.title}</a>
                                          <a {...hoverStyles.button} style={currentSection === "about" ? {...hoverStyles.navItemCurrent.style} : {...hoverStyles.navItems.style}} onClick={() => handleSectionChange("about")}>{translations[language].about.title}</a>
                                          <a {...hoverStyles.button} style={currentSection === "contact" ? {...hoverStyles.navItemCurrent.style} : {...hoverStyles.navItems.style}} onClick={() => handleSectionChange("contact")}>Contact</a>
                                   </div>

                                   <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                          <h1 {...hoverStyles.title}>Arthur CRAHE</h1>
                                   </div>

                                   <div className='ml-auto flex items-center' id="contexts">
                                          <button {...hoverStyles.button} onClick={(toggleLanguage)}>Language</button>
                                          <button {...hoverStyles.button} onClick={toggleTheme}>Theme</button>
                                   </div>
                            </header>
                     </div>
              </div>
       );
}

export default withTheme(withLanguage(withSection(Header)));

