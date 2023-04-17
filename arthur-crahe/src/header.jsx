import React, { Component } from 'react';
import { withTheme } from "./themeContext";

class Header extends Component {
       render() {
              const { theme, toggleTheme } = this.props;
              return (
                     <div style={{ backgroundColor: theme.background, color: theme.text }}>
                            <h1>Hello, World!</h1>
                            <button onClick={toggleTheme}>Toggle Theme</button>
                     </div>
              );
       }
}

export default withTheme(Header);
