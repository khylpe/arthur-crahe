import React from 'react';
import { useTheme } from './../contexts/themeContext';
import { withLanguage } from "../contexts/languageContext";
import { translations } from '../translations';
import whiteLogo from './../img/white.png';
import blackLogo from './../img/black.png';
import Socials from '../components/socials';

const Home = (props) => {
       const { theme } = useTheme();
       const { language } = props;

       return (
              <div className='min-h-screen mb-12 sm:mb-0'>
                     <div className='flex flex-col items-center justify-center sm:mt-32 mt-20'>
                            <div className='flex flex-col items-center justify-center'>
                                   <img
                                          draggable="false"
                                          className="block h-32 w-auto"
                                          src={theme === 'light' ? blackLogo : whiteLogo}
                                          alt="Arthur CRAHE logo"
                                   />
                                   <h1 className='text-5xl font-bold text-center mt-10'>Arthur CRAHE</h1>
                                   <h2 className='text-2xl font-bold text-center mt-5'>CESI | {translations[language].home.alternance} | {translations[language].home.job}</h2>
                                   <div className="mt-8">
                                          <Socials></Socials>
                                   </div>
                            </div>
                     </div>
              </div>
       )
};

export default withLanguage(Home);