import { Timeline } from 'flowbite-react';
import { CalendarDaysIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { translations } from '../translations';
import { withLanguage } from "../contexts/languageContext";


const TimelineEducation = (props) => {
       const { language } = props;

       return (
              <div className='container'>
                     <div className='-ml-3 flex flex-row text-4xl font-bold tracking-tight text-gray-900 dark:text-white break-words p-0'>
                            <span className='fadeInAndOut'>#</span>
                            <h1 className='ml-1'>{translations[language].about.education.title}</h1>
                     </div>
                     <Timeline className='lowerIndexThanHeader relative mt-12'>
                            <Timeline.Item>
                                   <Timeline.Point icon={CalendarDaysIcon} />
                                   <Timeline.Content className='ml-2'>
                                          <Timeline.Title>
                                                 {translations[language].about.education.timeLine.first.diplomaTitle}
                                          </Timeline.Title>
                                          <Timeline.Time>
                                                 {translations[language].about.education.timeLine.first.timeAndPlace}
                                          </Timeline.Time>

                                          <Timeline.Body className='mt-5'>
                                                 {translations[language].about.education.timeLine.first.description}
                                          </Timeline.Body>

                                          <span className='mt-7'>Nombre d'expériences profesionnelles : ?
</span>

                                          <div className="flex space-x-4 mt-10">
                                                 <a href="https://crahe-arthur.com" className="inline-flex items-center justify-center px-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <AcademicCapIcon className="h-14 w-14"></AcademicCapIcon>
                                                        <span className="w-full ml-2">Visit Poutrain's website</span>
                                                        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                 </a>

                                                 <a href="https://crahe-arthur.com" className="inline-flex items-center justify-center px-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <BriefcaseIcon className="h-14 w-14"></BriefcaseIcon>
                                                        <span className="w-full ml-2">Some projects</span>
                                                        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                 </a></div>
                                   </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                   <Timeline.Point icon={CalendarDaysIcon} />
                                   <Timeline.Content className='ml-2'>
                                          <Timeline.Title>
                                          {translations[language].about.education.timeLine.second.diplomaTitle}
                                          </Timeline.Title>
                                          <Timeline.Time>
                                          {translations[language].about.education.timeLine.second.timeAndPlace}
                                          </Timeline.Time>
                                          <Timeline.Body className='mt-5'>
                                          {translations[language].about.education.timeLine.second.description}
                                          </Timeline.Body>
                                   </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                   <Timeline.Point icon={CalendarDaysIcon} />
                                   <Timeline.Content className='ml-2'>
                                          <Timeline.Title>
                                          {translations[language].about.education.timeLine.third.diplomaTitle}
                                          </Timeline.Title>
                                          <Timeline.Time>
                                          {translations[language].about.education.timeLine.third.timeAndPlace}
                                          </Timeline.Time>
                                          <Timeline.Body className='mt-5'>
fzfzefzefz                                          </Timeline.Body>
                                   </Timeline.Content>
                            </Timeline.Item>
                            </Timeline>
                            </div>
       )
};


export default withLanguage(TimelineEducation);