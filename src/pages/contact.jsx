import React from 'react';
import ContactForm from '../components/contactForm';
import Title from '../components/title';
import Socials from '../components/socials';

const Contact = () => {
       return (
              <div className='min-h-screen mb-36'>
                     <ContactForm></ContactForm>

                     <div className='mt-10 container'>
                            <Title title='Socials'></Title>
                            <div className="mt-8">
                                   <Socials></Socials>
                            </div>
                     </div>
              </div>
       )
};

export default Contact;