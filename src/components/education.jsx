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

                     <Timeline className='mt-12'>
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
                                          <div className='mt-10'>
                                                 <Link to="/project#bachelor" className="inline-flex items-center justify-center px-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <HiBriefcase className="h-14 w-14"></HiBriefcase>
                                                        <span className="w-full ml-2">Some projects</span>
                                                        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                 </Link>
                                          </div>
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

                                          <div className='mt-10'>
                                                 <Link to="/project#BTS" className="inline-flex items-center justify-center px-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <HiBriefcase className="h-14 w-14"></HiBriefcase>
                                                        <span className="w-full ml-2">Some projects</span>
                                                        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                 </Link>
                                          </div>
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

                                                 <div className="flex space-x-4 mt-10">
                                                        <a rel="noreferrer" href="https://www.lyceepoutrain.fr/"
                                                               className="inline-flex items-center justify-center px-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                                                               target='_blank'>
                                                               <HiAcademicCap className="h-14 w-14"></HiAcademicCap>
                                                               <span className="w-full ml-2">Visit Poutrain's website</span>
                                                               <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                               </svg>
                                                        </a>

                                                        <Link to="/project#baccalaureat" className="inline-flex items-center justify-center px-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                                               <HiBriefcase className="h-14 w-14"></HiBriefcase>
                                                               <span className="w-full ml-2">Some projects</span>
                                                               <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                               </svg>
                                                        </Link>
                                                 </div>
                                          </Timeline.Content>
                                   </div>
                            </Timeline.Item>

                     </Timeline>
              </div>
       )
};


export default withLanguage(TimelineEducation);