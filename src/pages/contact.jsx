import React from 'react';
import ContactForm from '../components/contactForm';

const Contact = ({ headerHeight }) => {
       return (
              <div className='h-screen'>
                     <div style={{ paddingTop: headerHeight }}><ContactForm></ContactForm></div>
              </div>
       )
};


export default Contact;