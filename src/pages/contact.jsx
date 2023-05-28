import { useTheme, useStyles } from '../contexts/themeContext';
import React from 'react';

const Contact = ({ headerHeight }) => {
       const styles = useStyles();

       return (
              <div className='h-screen' style={styles.document}>
                     <div style={{ paddingTop: headerHeight }}></div>
              </div>
       )
};

export default Contact;