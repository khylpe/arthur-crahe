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
              <div className='min-h-screen mt-10 mb-64'>
                     <div className='flex flex-row flex-wrap justify-center'>
                            <Card
                                   title={translations[language].about.cards.education.title}
                                   description={translations[language].about.cards.education.description}
                                   target={"#education"}
                            >
                            </Card>
                            <Card
                                   title={translations[language].about.cards.experience.title}
                                   description={translations[language].about.cards.experience.description}
                                   comingSoon="true">
                            </Card>
                            <Card
                                   title={translations[language].about.cards.skills.title}
                                   description={translations[language].about.cards.skills.description}
                                   comingSoon="true">
                            </Card>
                            <Card
                                   title={translations[language].about.cards.projects.title}
                                   description={translations[language].about.cards.projects.description}
                                   comingSoon="true">
                            </Card>
                     </div>

                     <div className="inline-flex items-center justify-center w-full mt-20">
                            <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                            <span className="absolute px-3 text-4xl -translate-x-1/2 left-1/2 textHR">{translations[language].about.transitionText}</span>
                     </div>
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

                            <div className="mt-20 space-y-10">
                                   <div id='experience'>
                                          <Title title={translations[language].about.experience.title}></Title>
                                          <div className="mt-5">
                                                 <ComingSoon></ComingSoon>
                                          </div>
                                   </div>

                                   <div id="skills">
                                          <Title title={translations[language].about.skills.title}></Title>
                                          <div className="mt-5">
                                                 <ComingSoon></ComingSoon>
                                          </div>

                                   </div>

                                   <div id="languages">
                                          <Title title={translations[language].about.projects.title}></Title>
                                          <div className="mt-5">
                                                 <ComingSoon></ComingSoon>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       )
};

export default withLanguage(About);