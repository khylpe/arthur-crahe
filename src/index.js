// index.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from "./contexts/themeContext";
import { LanguageProvider } from './contexts/languageContext';

import './styles/index.css';
import './index.css';
import './styles/themes.css';

// pages
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Maintenance from './pages/maintenance';
import Project from './pages/projects'

import Header from './components/header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainContent = () => {
       // return <div><Maintenance /></div>

       return (
              <div>
                                   <Routes>
                                          <Route path="/about" element={<About />} />
                                          <Route path="/contact" element={<Contact />} />
                                          <Route path="/project" element={<Project />} />
                                          <Route path="/home" element={<Home />} />
                                          <Route path="/" element={<Home />} />
                                          <Route path="*" element={<Home />} />
                                   </Routes>
              </div>
       )
};

const App = () => {
       return (
              <React.StrictMode>
                     <ThemeProvider>
                            <LanguageProvider>
                                   <Router>
                                   <Header  />
                                   <MainContent />
                                   <Footer />
                                   </Router>
                            </LanguageProvider>
                     </ThemeProvider>
              </React.StrictMode>
       );
}

root.render(<App />);
