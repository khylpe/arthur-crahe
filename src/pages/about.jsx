// about.jsx
import React from 'react';
import Card from '../components/card';
import { withLanguage } from "../contexts/languageContext";
import { translations } from '../translations';

const About = (props) => {
       const { language } = props;

       return (
              <div className='min-h-screen mt-10'>
                     <div className='flex flex-row flex-wrap justify-center'>
                            <Card
                                   title={translations[language].about.cards.education.title}
                                   description={translations[language].about.cards.education.title}
                                   cardColor={"rgb(255, 165, 0)"}>
                            </Card>
                            <Card
                                   title={translations[language].about.cards.experience.title}
                                   description={translations[language].about.cards.experience.title}
                                   cardColor={"rgb(255, 140, 0)"}>
                            </Card>
                            <Card
                                   title={translations[language].about.cards.skills.title}
                                   description={translations[language].about.cards.skills.title}
                                   cardColor={"rgb(255, 127, 80)"}>
                            </Card>
                            <Card
                                   title={translations[language].about.cards.languages.title}
                                   description={translations[language].about.cards.languages.title}
                                   cardColor={"rgb(255, 99, 71)"}>
                            </Card>
                            <Card
                                   title={translations[language].about.cards.interests.title}
                                   description={translations[language].about.cards.interests.title}
                                   cardColor={"rgb(255, 69, 0)"}>
                            </Card>
                     </div>
              </div>
       )
};

export default withLanguage(About);