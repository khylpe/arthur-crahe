import React, { useEffect, useRef } from 'react';
import { useTheme } from './../contexts/themeContext';
import { withSection } from "./../contexts/sectionContext";
import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";

// imports for the flags
import frenchFlag from './../img/france_icon.png'
import UKFlag from './../img/kingdom_united_icon.png'

// imports for the logo
import logoBlack from './../img/black.png'
import logoWhite from './../img/white.png'

// imports for the header (mobile and desktop)
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = (props) => {
       const { currentSection } = props;
       const { theme, toggleTheme } = useTheme();
       const { language, toggleLanguage } = props;
       const headerRef = useRef(null);

       useEffect(() => {
              const updateHeaderHeight = () => {
                     const height1 = headerRef.current ? headerRef.current.offsetHeight : 0;
                     props.setHeaderHeight(height1);
              };

              updateHeaderHeight();
              window.addEventListener('resize', updateHeaderHeight);

              return () => {
                     window.removeEventListener('resize', updateHeaderHeight);
              };

       }, [headerRef, props]);

       const handleSectionChange = (section) => {
              props.setCurrentSection(section);
       }

       return (
              <Disclosure as="nav" ref={headerRef} className={`fixed w-full header`}>
                     {({ open }) => (
                            <>
                                   <div className="relative z-50 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                                          <Disclosure.Button className="sm:hidden relative z-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                 <span className="sr-only">Open main menu</span>
                                                 {open ? (
                                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                 ) : (
                                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                 )}
                                          </Disclosure.Button>
                                          <div className="hidden sm:ml-6 sm:block space-x-4 navItems">
                                                 <button
                                                        className={currentSection === "home" ? 'rounded-md px-3 py-2 text-sm font-medium currentSection' : 'rounded-md px-3 py-2 text-sm font-medium notCurrentSection'}
                                                        onClick={() => handleSectionChange("home")}>{translations[language].home.title}
                                                 </button>
                                                 <button
                                                        className={currentSection === "contact" ? 'rounded-md px-3 py-2 text-sm font-medium currentSection' : 'rounded-md px-3 py-2 text-sm font-medium notCurrentSection'}
                                                        onClick={() => handleSectionChange("contact")}>{translations[language].contact.title}
                                                 </button>
                                                 <button
                                                        className={currentSection === "about" ? 'rounded-md px-3 py-2 text-sm font-medium currentSection' : 'rounded-md px-3 py-2 text-sm font-medium notCurrentSection'}
                                                        onClick={() => handleSectionChange("about")}>{translations[language].about.title}
                                                 </button>
                                          </div>
                                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                 <img
                                                        draggable="false"
                                                        className="block h-8 w-auto"
                                                        src={theme === 'light' ? logoBlack : logoWhite}
                                                        alt="Arthur CRAHE logo"
                                                 />
                                          </div>
                                          <div className="hidden sm:flex absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                                 <button onClick={toggleTheme}>
                                                        <span className='material-icons text-2xl p-1'>
                                                               {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                                        </span>
                                                 </button>
                                                 <button className="ml-3">
                                                        <img
                                                               draggable="false"
                                                               onClick={toggleLanguage}
                                                               className="h-8 w-8"
                                                               src={language === 'fr' ? UKFlag : frenchFlag}
                                                               alt="Current language flag"
                                                        />
                                                 </button>
                                          </div>
                                   </div>
                                   <Disclosure.Panel className="sm:hidden">
                                          <div className="header absolute space-y-10 pb-3 pt-2 flex flex-col flex-wrap content-center justify-center h-screen w-screen top-0 flex-shrink-0 py-4 px-6 navItems z-40">
                                                 <Disclosure.Button as='button'
                                                        className={currentSection === "home" ? 'text-2xl rounded-md px-3 py-2 font-medium currentSection' : 'text-2xl rounded-md px-3 py-2 font-medium notCurrentSection'}
                                                        onClick={() => handleSectionChange("home")}>{translations[language].home.title}
                                                 </Disclosure.Button>

                                                 <Disclosure.Button as='button'
                                                        className={currentSection === "contact" ? 'text-2xl rounded-md px-3 py-2 font-medium currentSection' : 'text-2xl rounded-md px-3 py-2 font-medium notCurrentSection'}
                                                        onClick={() => handleSectionChange("contact")}>{translations[language].contact.title}
                                                 </Disclosure.Button>

                                                 <Disclosure.Button as='button'
                                                        className={currentSection === "about" ? 'text-2xl rounded-md px-3 py-2 font-medium currentSection' : 'text-2xl rounded-md px-3 py-2 font-medium notCurrentSection'}
                                                        onClick={() => handleSectionChange("about")}>{translations[language].about.title}
                                                 </Disclosure.Button>

                                                 <div className='text-center flex items-center justify-evenly'>
                                                        <button onClick={toggleTheme}>
                                                               <span className='material-icons text-4xl p-1'>
                                                                      {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                                               </span>
                                                        </button>
                                                        <button className="ml-3">
                                                               <img
                                                                      draggable="false"
                                                                      onClick={toggleLanguage}
                                                                      className="h-10 w-10"
                                                                      src={language === 'fr' ? UKFlag : frenchFlag}
                                                                      alt="Current language flag"
                                                               />
                                                        </button>
                                                 </div>
                                          </div>
                                   </Disclosure.Panel>
                            </>
                     )}
              </Disclosure>
       )
}

export default withLanguage(withSection(Header));