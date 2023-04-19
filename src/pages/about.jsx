import { useTheme, useStyles } from './../contexts/themeContext';

import React from 'react';

const About = ({ headerHeight }) => {
       const styles = useStyles();

       return (
              <div className='h-screen' style={styles.document}>
                     <div style={{ paddingTop: headerHeight }}><h1 >Welcome to the About section!</h1></div>
              </div>
       )
};

export default (About);