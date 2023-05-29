import { useTheme, useStyles } from '../contexts/themeContext';
import React from 'react';
import ContactForm from '../components/contactForm';

const Contact = ({ headerHeight }) => {
       const styles = useStyles();

       return (
              <div className='h-screen' style={styles.document}>
                     <div style={{ paddingTop: headerHeight }}><ContactForm></ContactForm></div>
              </div>
       )
};


export default Contact;