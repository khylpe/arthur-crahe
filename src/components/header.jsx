import React, { Component, useState, useRef, useEffect } from 'react';
import './../styles/header.css';
import { useTheme, useStyles } from './../contexts/themeContext';
import { withSection } from "./../contexts/sectionContext";
import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";
import useHover from './../hooks/useHover';

const Header = (props) => {
       const { currentSection } = props;
       const { theme, toggleTheme } = useTheme();
       const { language, toggleLanguage } = props;
       const [isCollapsed, setIsCollapsed] = useState(true);

       const headerRef = useRef(null);
       const styles = useStyles();

       console.log(theme)

       const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();


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
              console.log(isHovered)
              return isHovered ? elementType.hover : elementType.notHover;
       };
       return (
              <div >
                     {/* display this div when media is smaller tha LG */}
                     {/* collapsible navbar */}
                     <div className="lg:hidden" >
                            <header ref={headerRef} style={styles.header} className='flex-shrink-0 py-4 px-6'>
                                   <div className="flex items-center justify-between">
                                          <div className="text-xl font-bold">
                                                 <h1 style={styles.title}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}>Arthur CRAHE </h1>
                                                 <span style={styles.currentSection}>/{currentSection}</span>
                                          </div>
                                          <button className="focus:outline-none lg:hidden" style={getHoverStyles(isNavButtonHovered, styles.button)}
                                                 onMouseEnter={handleNavButtonMouseEnter}
                                                 onMouseLeave={handleNavButtonMouseLeave}
                                                 onClick={toggleNavbar}>

                                                 <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                                        <path
                                                               fillRule="evenodd"
                                                               clipRule="evenodd"
                                                               d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                                        />
                                                 </svg>
                                          </button>
                                   </div>
                                   <div className={`mt-4 ${isCollapsed ? 'hidden' : ''}`}>
                                          <nav >
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
                                          </nav>

                                          <div className='ml-auto flex items-center' id="contexts">
                                                 <button onClick={(toggleLanguage)}>Language</button>
                                                 <button onClick={toggleTheme}>
                                                        <span className={theme === 'light' ? 'material-icons text-black' : 'material-icons text-white'}>
                                                               {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                                        </span>
                                                 </button>
                                          </div>

                                   </div>



                            </header>
                     </div>

                     {/* display this div when media is bigger tha LG */}
                     <div className='hidden lg:block'>
                            <header style={styles.header} ref={headerRef} className='fixed top-0 w-full z-50 py-2 px-20 flex items-center justify-center'>
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
                                          <button onClick={(toggleLanguage)}>Language</button>
                                          <button onClick={toggleTheme}>
                                                 <span className={theme === 'light' ? 'material-icons text-black' : 'material-icons text-white'}>
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