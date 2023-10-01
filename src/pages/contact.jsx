import React from 'react';
import ContactForm from '../components/contactForm';
import Title from '../components/title';
import Socials from '../components/socials';
import { withLanguage } from '../contexts/languageContext';
import { translations } from '../translations';

const Contact = (props) => {
       const {language} = props;
       return (
              <div className='min-h-screen mb-36'>
                     <ContactForm></ContactForm>
                     <div className='mt-10 container'>
                            <Title title={translations[language].contact.socials.title}></Title>
                            <div className="mt-8">
                                   <Socials></Socials>
                            </div>
                     </div>
              </div>
       )
};

export default withLanguage(Contact);