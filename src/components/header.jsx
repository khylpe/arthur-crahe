import React, { Component, useState, useRef, useEffect } from 'react';
import './../styles/header.css';
import { useTheme, useStyles } from './../contexts/themeContext';
import { withSection } from "./../contexts/sectionContext";
import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";
import useHover from './../hooks/useHover';
import frenchFlag from './../img/france_icon.png'
import UKFlag from './../img/kingdom_united_icon.png'

const Header = (props) => {
       const { currentSection } = props;
       const { theme, toggleTheme } = useTheme();
       const { language, toggleLanguage } = props;
       const [isCollapsed, setIsCollapsed] = useState(true);
       const headerRef = useRef(null);
       const headerRefMobile = useRef(null);

       const styles = useStyles();
       const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

       useEffect(() => {
              const updateHeaderHeight = () => {
                     const height1 = headerRef.current ? headerRef.current.offsetHeight : 0;
                     const height2 = headerRefMobile.current ? headerRefMobile.current.offsetHeight : 0;
                     props.setHeaderHeight(Math.max(height1, height2));
              };

              if (headerRef.current || headerRefMobile.current) {
                     updateHeaderHeight();
                     window.addEventListener('resize', updateHeaderHeight);

                     return () => {
                            window.removeEventListener('resize', updateHeaderHeight);
                     };
              }
       }, [headerRef, props]);

       useEffect(() => {
              // Reset all hover states
              handleNavItem1MouseLeave();
              handleNavItem2MouseLeave();
              handleNavItem3MouseLeave();
              handleCurrentNavItemMouseLeave();
              handleNavButtonMouseLeave();
          }, [currentSection]);
          

       const handleSectionChange = (section) => {
              props.setCurrentSection(section);
       }

       const toggleNavbar = () => {
              if (!isCollapsed) {
                     props.setHeaderHeight(headerRef.current.offsetHeight);
              }
              setIsCollapsed(!isCollapsed);
       };

       const {
              isHovered: isNavItem1Hovered,
              handleMouseEnter: handleNavItem1MouseEnter,
              handleMouseLeave: handleNavItem1MouseLeave,
       } = useHover();

       const {
              isHovered: isNavItem2Hovered,
              handleMouseEnter: handleNavItem2MouseEnter,
              handleMouseLeave: handleNavItem2MouseLeave,
       } = useHover();

       const {
              isHovered: isNavItem3Hovered,
              handleMouseEnter: handleNavItem3MouseEnter,
              handleMouseLeave: handleNavItem3MouseLeave,
       } = useHover();

       const {
              isHovered: isCurrentNavItemHovered,
              handleMouseEnter: handleCurrentNavItemMouseEnter,
              handleMouseLeave: handleCurrentNavItemMouseLeave,
       } = useHover();

       const {
              isHovered: isNavButtonHovered,
              handleMouseEnter: handleNavButtonMouseEnter,
              handleMouseLeave: handleNavButtonMouseLeave,
       } = useHover();


       const getHoverStyles = (isHovered, elementType) => {
              return isHovered ? elementType.hover : elementType.notHover;
       };

       return (
              <div >
                     {/* display this div when media is smaller tha LG */}
                     {/* collapsible navbar */}
                     <div className="lg:hidden" >
                            <header ref={headerRefMobile} style={styles.header} className={`w-full fixed top-0 z-50 flex-shrink-0 py-4 px-6 ${isCollapsed ? "" : 'h-screen absolute w-screen'}`}>
                                   <div className="flex items-center justify-between">
                                          <div className="text-xl font-bold">
                                                 <h1 className='h1' style={styles.title}>Arthur CRAHE </h1>

                                          </div>
                                          <button className="flex focus:outline-none lg:hidden" style={getHoverStyles(isNavButtonHovered, styles.button)}
                                                 onMouseEnter={handleNavButtonMouseEnter}
                                                 onMouseLeave={handleNavButtonMouseLeave}
                                                 onClick={toggleNavbar}>

                                                 <span className="self-center material-icons material-symbols-outlined">
                                                        {isCollapsed ? 'menu' : 'close'}
                                                 </span>
                                          </button>
                                   </div>

                                   <div style={styles.header} className={`mt-36 ${isCollapsed ? 'hidden' : 'flex flex-col items-center'}`}>
                                          <nav className='flex flex-col flex-wrap content-center justify-center'>
                                                 <a className='text-center' style={currentSection === "home" ? getHoverStyles(isCurrentNavItemHovered, styles.navItems.current) : getHoverStyles(isNavItem1Hovered, styles.navItems.notCurrent)}
                                                        onMouseEnter={currentSection === "home" ? handleCurrentNavItemMouseEnter : handleNavItem1MouseEnter}
                                                        onMouseLeave={currentSection === "home" ? handleCurrentNavItemMouseLeave : handleNavItem1MouseLeave}
                                                        onClick={() => { handleSectionChange("home"); toggleNavbar() }}>{translations[language].home.title}</a>

                                                 <a className='text-center' style={currentSection === "contact" ? getHoverStyles(isCurrentNavItemHovered, styles.navItems.current) : getHoverStyles(isNavItem2Hovered, styles.navItems.notCurrent)}
                                                        onMouseEnter={currentSection === "contact" ? handleCurrentNavItemMouseEnter : handleNavItem2MouseEnter}
                                                        onMouseLeave={currentSection === "contact" ? handleCurrentNavItemMouseLeave : handleNavItem2MouseLeave}
                                                        onClick={() => { handleSectionChange("contact"); toggleNavbar() }}>{translations[language].contact.title}</a>

                                                 <a className='text-center' style={currentSection === "about" ? getHoverStyles(isCurrentNavItemHovered, styles.navItems.current) : getHoverStyles(isNavItem3Hovered, styles.navItems.notCurrent)}
                                                        onMouseEnter={currentSection === "about" ? handleCurrentNavItemMouseEnter : handleNavItem3MouseEnter}
                                                        onMouseLeave={currentSection === "about" ? handleCurrentNavItemMouseLeave : handleNavItem3MouseLeave}
                                                        onClick={() => { handleSectionChange("about"); toggleNavbar() }}>{translations[language].about.title}</a>
                                                 <div className='mt-7 flex items-center justify-around'>
                                                        <button onClick={(toggleLanguage)} className=''>{language === "en" ? <img src={frenchFlag} className='w-7 inline-block' alt="Fench flag" /> : <img className='w-7' src={UKFlag} alt="" />}
                                                        </button>

                                                        <button onClick={toggleTheme}>
                                                               <span className={theme === 'light' ? 'material-icons text-black text-2xl' : 'material-icons text-white text-2xl'}>
                                                                      {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                                               </span>
                                                        </button></div>

                                          </nav>
                                   </div>
                            </header>
                     </div>

                     {/* display this div when media is bigger tha LG */}
                     <div className='hidden lg:block'>
                            <header style={styles.header} ref={headerRef} className='fixed top-0 w-full z-50 py-2 px-36 flex items-center justify-center'>
                                   <div className='flex items-center'>

                                          <a style={currentSection === "home" ? getHoverStyles(isCurrentNavItemHovered, styles.navItems.current) : getHoverStyles(isNavItem1Hovered, styles.navItems.notCurrent)}
                                                 onMouseEnter={currentSection === "home" ? handleCurrentNavItemMouseEnter : handleNavItem1MouseEnter}
                                                 onMouseLeave={currentSection === "home" ? handleCurrentNavItemMouseLeave : handleNavItem1MouseLeave}
                                                 onClick={() => handleSectionChange("home")}>{translations[language].home.title}</a>

                                          <a style={currentSection === "contact" ? getHoverStyles(isCurrentNavItemHovered, styles.navItems.current) : getHoverStyles(isNavItem2Hovered, styles.navItems.notCurrent)}
                                                 onMouseEnter={currentSection === "contact" ? handleCurrentNavItemMouseEnter : handleNavItem2MouseEnter}
                                                 onMouseLeave={currentSection === "contact" ? handleCurrentNavItemMouseLeave : handleNavItem2MouseLeave}
                                                 onClick={() => handleSectionChange("contact")}>{translations[language].contact.title}</a>

                                          <a style={currentSection === "about" ? getHoverStyles(isCurrentNavItemHovered, styles.navItems.current) : getHoverStyles(isNavItem3Hovered, styles.navItems.notCurrent)}
                                                 onMouseEnter={currentSection === "about" ? handleCurrentNavItemMouseEnter : handleNavItem3MouseEnter}
                                                 onMouseLeave={currentSection === "about" ? handleCurrentNavItemMouseLeave : handleNavItem3MouseLeave}
                                                 onClick={() => handleSectionChange("about")}>{translations[language].about.title}</a>

                                   </div>

                                   <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                          <h1 style={styles.title}>Arthur CRAHE</h1>
                                   </div>

                                   <div className='ml-auto flex items-center' id="contexts">
                                          <button onClick={(toggleLanguage)} className=''>
                                                 {language === "en" ? <img src={frenchFlag} className='w-7' alt="Fench flag" /> : <img className='w-7' src={UKFlag} alt="" />}
                                          </button>

                                          <button className='pl-6' onClick={toggleTheme}>
                                                 <span className={theme === 'light' ? 'material-icons text-black text-2xl' : 'material-icons text-white text-2xl'}>
                                                        {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                                 </span>
                                          </button>
                                   </div>
                            </header>
                     </div>
              </div>
       );
}

export default withLanguage(withSection(Header));