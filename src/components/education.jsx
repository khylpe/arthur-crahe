import { Timeline } from 'flowbite-react';
import { HiCalendarDays, HiAcademicCap, HiBriefcase } from 'react-icons/hi2'
import { translations } from '../translations';
import { withLanguage } from "../contexts/languageContext";
import { Link } from 'react-router-dom';
import Title from './title';

const TimelineEducation = (props) => {
       const { language } = props;

       return (
              <div>
                     <Title title={translations[language].about.education.title} />

                     <Timeline className='mt-12 space-y-24'>
                            <Timeline.Item>
                                   <Timeline.Point icon={HiCalendarDays} />
                                   <Timeline.Content className='ml-2'>
                                          <Timeline.Title className='text-2xl'>
                                                 {translations[language].about.education.timeLine.third.diplomaTitle}
                                          </Timeline.Title>
                                          <Timeline.Time>
                                                 {translations[language].about.education.timeLine.third.timeAndPlace}
                                          </Timeline.Time>
                                          <Timeline.Body className='mt-5'>
                                                 {translations[language].about.education.timeLine.third.description}
                                          </Timeline.Body>
                                          <p className='mt-8 underline decoration-sky-500 underline-offset-4 decoration-2'>
                                                 {translations[language].about.education.timeLine.third.experience}
                                          </p>
                                   </Timeline.Content>
                            </Timeline.Item>

                            <Timeline.Item>
                                   <Timeline.Point icon={HiCalendarDays} />
                                   <Timeline.Content className='ml-2'>
                                          <Timeline.Title className='text-2xl'>
                                                 {translations[language].about.education.timeLine.second.diplomaTitle}
                                          </Timeline.Title>
                                          <Timeline.Time>
                                                 {translations[language].about.education.timeLine.second.timeAndPlace}
                                          </Timeline.Time>
                                          <Timeline.Body className='mt-5'>
                                                 {translations[language].about.education.timeLine.second.description}
                                          </Timeline.Body>

                                          <p className='mt-8 underline decoration-sky-500 underline-offset-4 decoration-2'>
                                                 {translations[language].about.education.timeLine.second.experience}
                                          </p>
                                   </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                   <div id="poutrain">
                                          <Timeline.Point icon={HiCalendarDays} />
                                          <Timeline.Content className='ml-2'>
                                                 <Timeline.Title className='text-2xl'>
                                                        {translations[language].about.education.timeLine.first.diplomaTitle}
                                                 </Timeline.Title>
                                                 <Timeline.Time>
                                                        {translations[language].about.education.timeLine.first.timeAndPlace}
                                                 </Timeline.Time>

                                                 <Timeline.Body className='mt-5'>
                                                        {translations[language].about.education.timeLine.first.description}
                                                 </Timeline.Body>

                                                 <div className='mt-8'></div>
                                                 <p className='underline decoration-sky-500 underline-offset-4 decoration-2'>
                                                        {translations[language].about.education.timeLine.first.experience}
                                                 </p>
                                                 <p className='underline decoration-pink-500 underline-offset-4 decoration-2'>
                                                        *Option B : Audovisuels, Réseaux et Équipements Domestiques
                                                 </p>
                                          </Timeline.Content>
                                   </div>
                            </Timeline.Item>

                     </Timeline>
              </div>
       )
};


export default withLanguage(TimelineEducation);