import { useTheme, useStyles } from './../contexts/themeContext';

import React from 'react';

const Home = ({ headerHeight }) => {
       const styles = useStyles();

       return (
              <div className='h-screen' style={styles.document}>
                     <div style={{ paddingTop: headerHeight }}><h1 >Welcome to the Home section!</h1></div>
              </div>
       )
};

export default (Home);