// about.jsx
import React from 'react';
import Card from '../components/card';
import { withLanguage } from "../contexts/languageContext";
import { translations } from '../translations';
import TimelineEducation from '../components/education';

const About = (props) => {
       const { language } = props;

       return (
              <div className='min-h-screen mt-10'>
                     <div className='flex flex-row flex-wrap justify-center'>
                            <Card
                                   title={translations[language].about.cards.education.title}
                                   description={translations[language].about.cards.education.description}
                                   cardColor={"rgb(255, 165, 0)"}
                                   target={"#education"}
                            >
                            </Card>
                            <Card
                                   title={translations[language].about.cards.experience.title}
                                   description={translations[language].about.cards.experience.description}
                                   cardColor={"rgb(255, 140, 0)"}
                                   comingSoon="true">
                            </Card>
                            <Card
                                   title={translations[language].about.cards.skills.title}
                                   description={translations[language].about.cards.skills.description}
                                   cardColor={"rgb(255, 127, 80)"}
                                   comingSoon="true">
                            </Card>
                            <Card
                                   title={translations[language].about.cards.languages.title}
                                   description={translations[language].about.cards.languages.description}
                                   cardColor={"rgb(255, 99, 71)"}
                                   comingSoon="true">
                            </Card>
                            <Card
                                   title={translations[language].about.cards.interests.title}
                                   description={translations[language].about.cards.interests.description}
                                   cardColor={"rgb(255, 69, 0)"}
                                   comingSoon="true">
                            </Card>
                     </div>

                     <div className="inline-flex items-center justify-center w-full mt-20">
                            <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                            <span className="absolute px-3 text-4xl -translate-x-1/2 left-1/2 textHR lowerIndexThanHeader">Let's dive in</span>
                     </div>

                     <div className="mt-20">
                            <div id='education'>
                                   <TimelineEducation></TimelineEducation>
                            </div>
                     </div>


              </div>
       )
};

export default withLanguage(About);