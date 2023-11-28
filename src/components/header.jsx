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

                                   <div className="hidden mx-auto max-w-7xl md:px-3 md:flex h-16 items-center justify-between">
                                          <div className="space-x-4 navItems">
                                                 <Link to="/contact"
                                                        className={`rounded-md px-3 py-2 text-sm font-medium ${currentSection === "contact" ? 'currentSection' : 'notCurrentSection'}`}
                                                 >{translations[language].contact.title}
                                                 </Link>
                                                 <Link to="/about"
                                                        className={`rounded-md px-3 py-2 text-sm font-medium ${currentSection === "about" ? 'currentSection' : 'notCurrentSection'}`}
                                                 >{translations[language].about.title}
                                                 </Link>
                                                 <Link to="/project"
                                                        className={`rounded-md px-3 py-2 text-sm font-medium ${currentSection === "project" ? 'currentSection' : 'notCurrentSection'}`}
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
                                          <div className="hidden md:flex absolute inset-y-0 right-0  items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
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
                                   <div className='md:hidden flex flex-row h-16 items-center'>
                                          <Disclosure.Button className="md:hidden rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

                                   {/* navigation menu */}
                                   <Disclosure.Panel className="smallHeader space-y-10 flex flex-col flex-wrap content-center justify-center h-screen w-screen navItems pb-20">
                                          <Link to="/contact" onClick={close} className={`text-center rounded-md px-3 py-2 text-2xl font-medium ${currentSection === "contact" ? 'currentSection' : 'notCurrentSection'}`}>
                                                 {translations[language].contact.title}
                                          </Link>

                                          <Link to="/about" onClick={close} className={`text-center rounded-md px-3 py-2 text-2xl font-medium ${currentSection === "about" ? 'currentSection' : 'notCurrentSection'}`}>
                                                 {translations[language].about.title}
                                          </Link>

                                          <Link to="/project" onClick={close} className={`text-center rounded-md px-3 py-2 text-2xl font-medium ${currentSection === "project" ? 'currentSection' : 'notCurrentSection'}`}>
                                                 {translations[language].project.title}
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
                            </>
                     )}
              </Disclosure>
       )
}

export default withLanguage(Header);