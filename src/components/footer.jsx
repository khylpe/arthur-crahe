'use client';

import { Footer as FooterFlowbite } from 'flowbite-react';
import { useTheme } from './../contexts/themeContext';
import logoBlack from './../img/black.png'
import logoWhite from './../img/white.png'
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";

const Footer = (props) => {
       const { theme } = useTheme();
       const { language } = props;

       return (
              <FooterFlowbite container className='footer'>
                     <div className="w-full">
                            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                                   <div>
                                          <Link to="/home">
                                                 <FooterFlowbite.Brand
                                                        alt="Arthur CRAHE logo"
                                                        href="https://crahe-arthur.com"
                                                        name="Arthur CRAHE"
                                                        src={theme === 'light' ? logoBlack : logoWhite}
                                                 />
                                          </Link>
                                   </div>
                                   <div className="gap-8 sm:mt-4 sm:gap-6">
                                          <div >
                                                 <FooterFlowbite.LinkGroup className='flex flex-col space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 sm:flex-row'>
                                                        <Link to="/home">
                                                               {translations[language].home.title}                                                        </Link>
                                                        <Link to="/contact">
                                                               {translations[language].contact.title}
                                                        </Link>
                                                        <Link to="/about">
                                                               {translations[language].about.title}
                                                        </Link>
                                                        <Link to="/project">
                                                               {translations[language].project.title}
                                                        </Link>
                                                 </FooterFlowbite.LinkGroup>
                                          </div>
                                   </div>
                            </div>
                            <FooterFlowbite.Divider />
                            <div className="w-full sm:flex sm:items-center sm:justify-between">
                                   <Link to="/home">
                                          <FooterFlowbite.Copyright
                                                 by="Arthur CRAHE"
                                                 year={2023}
                                          />
                                   </Link>
                                   <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                          <FooterFlowbite.Icon
                                                 href="https://www.instagram.com/arthur_crahe/"
                                                 target='_blank'
                                                 icon={BsInstagram}
                                          />
                                          <FooterFlowbite.Icon
                                                 href="https://twitter.com/Arthur_crahe"
                                                 target='_blank'
                                                 icon={BsTwitter}
                                          />
                                          <FooterFlowbite.Icon
                                                 href="https://github.com/khylpe"
                                                 target='_blank'
                                                 icon={BsGithub}
                                          />
                                          <FooterFlowbite.Icon
                                                 href="https://www.linkedin.com/in/arthur-c-a23135200/"
                                                 target='_blank'
                                                 icon={BsLinkedin}
                                          />
                                   </div>
                            </div>
                     </div>
              </FooterFlowbite>
       )
}
export default withLanguage(Footer);