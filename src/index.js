// index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
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

// Layout
import Header from './components/header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MainContent = () => {
       // return <div><Maintenance /></div>

       return (
              <div>
                     <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/project" element={<Project />} />
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
                                          <div className='min-h-screen flex flex-col justify-between overflow-x-hidden'>
                                                 <Header />
                                                 <div className='flex flex-col justify-center h-full'>
                                                        <MainContent />
                                                 </div>
                                                 <Footer />
                                          </div>
                                   </Router>
                            </LanguageProvider>
                     </ThemeProvider>
              </React.StrictMode>
       );
}

root.render(<App />);
Modal.setAppElement('#root');

