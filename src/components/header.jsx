import { useTheme } from './../contexts/themeContext';
import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";
import { Link, useLocation } from 'react-router-dom';

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
       const location = useLocation();
       const currentSection = location.pathname.slice(1) || "home"; // remove leading slash       

       const { theme, toggleTheme } = useTheme();
       const { language, toggleLanguage } = props;

       return (
              <Disclosure as="nav" className={`w-full header transition`}>
                     {({ open, close }) => (
                            <>
                                   {/* Default header */}

                                   <div className="hidden mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:flex h-16 items-center justify-between">
                                          <div className="ml-6 space-x-4 navItems">
                                                 <Link to="/contact"
                                                        className={currentSection === "contact" ? 'rounded-md px-3 py-2 text-sm font-medium currentSection' : 'rounded-md px-3 py-2 text-sm font-medium notCurrentSection'}
                                                 >{translations[language].contact.title}
                                                 </Link>
                                                 <Link to="/about"
                                                        className={currentSection === "about" ? 'rounded-md px-3 py-2 text-sm font-medium currentSection' : 'rounded-md px-3 py-2 text-sm font-medium notCurrentSection'}
                                                 >{translations[language].about.title}
                                                 </Link>
                                                 <Link to="/project"
                                                        className={currentSection === "project" ? 'rounded-md px-3 py-2 text-sm font-medium currentSection' : 'rounded-md px-3 py-2 text-sm font-medium notCurrentSection'}
                                                 >{translations[language].project.title}
                                                 </Link>
                                          </div>
                                          <div className="absolute left-1/2 transform -translate-x-1/2">
                                                 <Link to="/home">
                                                        <img
                                                               draggable="false"
                                                               className="block h-8 w-auto"
                                                               src={theme === 'light' ? logoBlack : logoWhite}
                                                               alt="Arthur CRAHE logo"
                                                        />
                                                 </Link>
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

                                   {/* Mobile header */}
                                   <div className="sm:hidden">
                                          <div className='flex flex-row h-16 items-center'>
                                                 <Disclosure.Button className="sm:hidden rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                        <span className="sr-only">Open main menu</span>
                                                        {open ? (
                                                               <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                               <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                        )}
                                                 </Disclosure.Button>

                                                 <div className="absolute left-1/2 transform -translate-x-1/2">
                                                        <Link to="/home">
                                                               <img
                                                                      draggable="false"
                                                                      className="block h-8 w-auto"
                                                                      src={theme === 'light' ? logoBlack : logoWhite}
                                                                      alt="Arthur CRAHE logo"
                                                               />
                                                        </Link>

                                                 </div>
                                          </div>

                                          <Disclosure.Panel className="smallHeader space-y-10 pb-3 pt-2 flex flex-col flex-wrap content-center justify-center h-screen w-screen top-0 flex-shrink-0 py-4 px-6 navItems">
                                                 <Link to="/home" onClick={close} className={currentSection === "home" ? 'text-2xl rounded-md px-3 py-2 font-medium currentSection text-center' : 'text-center text-2xl rounded-md px-3 py-2 font-medium notCurrentSection'}>
                                                        {translations[language].home.title}
                                                 </Link>

                                                 <Link to="/contact" onClick={close} className={currentSection === "contact" ? 'text-center text-2xl rounded-md px-3 py-2 font-medium currentSection' : 'text-center text-2xl rounded-md px-3 py-2 font-medium notCurrentSection'}>
                                                        {translations[language].contact.title}
                                                 </Link>

                                                 <Link to="/about" onClick={close} className={currentSection === "about" ? 'text-center text-2xl rounded-md px-3 py-2 font-medium currentSection' : 'text-center text-2xl rounded-md px-3 py-2 font-medium notCurrentSection'}
                                                 >{translations[language].about.title}
                                                 </Link>

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
                                          </Disclosure.Panel>
                                   </div>
                            </>
                     )}
              </Disclosure>
       )
}

export default withLanguage(Header);