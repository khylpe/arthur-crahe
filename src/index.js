import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './components/header';
import { ThemeProvider } from "./contexts/themeContext";
import { SectionProvider, useSection } from "./contexts/sectionContext";
import { LanguageProvider } from './contexts/languageContext';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Maintenance from './pages/maintenance';
import './styles/themes.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainContent = ({ headerHeight }) => {
       const { currentSection } = useSection();
       // return <Maintenance headerHeight={headerHeight}></Maintenance>

       switch (currentSection) {
              case "home":
                     return <Home headerHeight={headerHeight}/>;
              case "about":
                  return <About headerHeight={headerHeight}/>;
              case "contact":
                  return <Contact headerHeight={headerHeight}/>;
              default:
                     return <div style={{ paddingTop: headerHeight }}>Section not found</div>;
       }
       
};

const App = () => {
       const [headerHeight, setHeaderHeight] = useState(0);
       return (
              <React.StrictMode>
                  <ThemeProvider>
                      <LanguageProvider>
                          <SectionProvider>
                              <Header setHeaderHeight={setHeaderHeight} />
                              <MainContent headerHeight={headerHeight}/>
                          </SectionProvider>
                      </LanguageProvider>
                  </ThemeProvider>
              </React.StrictMode>
          );
}

root.render(<App />);