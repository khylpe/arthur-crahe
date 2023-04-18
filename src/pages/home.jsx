import React from 'react';
import { withTheme } from '../contexts/themeContext';

const Home = ({ headerHeight }) => {

       console.log(headerHeight);
       
       return (
              <div style={{ paddingTop: headerHeight }}>
                     <h1 >Welcome to the Home section!</h1>
                     {/* Your home section code goes here */}
              </div>
       )
};

export default withTheme(Home);