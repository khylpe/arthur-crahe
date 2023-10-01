// about.jsx
import React from 'react';
import Card from '../components/card';
import { withLanguage } from "../contexts/languageContext";
import { translations } from '../translations';
import TimelineEducation from '../components/education';
import Title from './../components/title';
import ComingSoon from './../components/comingSoon';
import GoogleMap from '../components/googleMap';

const About = (props) => {
       const { language } = props;

       return (
              <div className='min-h-screen mt-5 mb-64'>
                     <div className="container mt-12">
                            <div>
                                   <Title title={translations[language].about.overview.title}></Title>
                                   <div className="mt-12">
                                          <GoogleMap></GoogleMap>
                                   </div>
                            </div>
                            <div className="mt-20">
                                   <div id='education'>
                                          <TimelineEducation></TimelineEducation>
                                   </div>
                            </div>

                            <div id='experience' className='mt-20'>
                                   <Title title={translations[language].about.experience.title}></Title>
                                   <div className="mt-5">
                                          <ComingSoon></ComingSoon>
                                   </div>
                            </div>
                     </div>
              </div>
       )
};

export default withLanguage(About);