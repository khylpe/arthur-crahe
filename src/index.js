// index.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import { ThemeProvider } from "./contexts/themeContext";
import { LanguageProvider } from './contexts/languageContext';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Maintenance from './pages/maintenance';
import './styles/index.css';
import './index.css';
import './styles/themes.css';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainContent = ({ headerHeight }) => {
       // return <div style={{ paddingTop: headerHeight }}><Maintenance /></div>

       return (
              <div style={{ paddingTop: headerHeight }}>
                     <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/" element={<Home />} />
                     </Routes>
              </div>
       )
};

const App = () => {
       const [headerHeight, setHeaderHeight] = useState(0);
       return (
              <React.StrictMode>
                     <ThemeProvider>
                            <LanguageProvider>
                                   <Router>
                                          <Header setHeaderHeight={setHeaderHeight} />
                                          <MainContent headerHeight={headerHeight} />
                                          <Footer />
                                   </Router>
                            </LanguageProvider>
                     </ThemeProvider>
              </React.StrictMode>
       );
}

root.render(<App />);
