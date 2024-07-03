import { Accordion, Tooltip } from 'flowbite-react';
import Modal from 'react-modal';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'

import { withLanguage } from "../contexts/languageContext";
import { translations } from '../translations';

import { MdOutlinePushPin } from "react-icons/md";
import { FaGithub, FaFilePdf } from "react-icons/fa";

// Logo images for tech stack
import socketIOIMG from './../img/projects/bts/socketIO.png'
import bootstrapIMG from './../img/projects/bts/bootstrap.png'
import nodejsIMG from './../img/projects/bts/nodejs.png'
import expressjsIMG from './../img/projects/bts/expressjs.png'
import phpIMG from './../img/projects/bts/php.png'
import mysqlIMG from './../img/projects/bts/mysql.png'
import javascriptIMG from './../img/projects/bts/javascript.png'
import zigbeeIMG from './../img/projects/bts/zigbee.png'
import cppIMG from './../img/projects/bts/cpp.png'
import sassIMG from './../img/projects/bts/sass.png'

// Images for equizz presentation
import createQuizzIMG from './../img/projects/bts/createQuizz.png'
import displayQuestionIMG from './../img/projects/bts/displayQuestion.png'
import resultsQuizzIMG from './../img/projects/bts/resultsQuizz.png'
import resultsStudentIMG from './../img/projects/bts/resultsStudent.png'
import waitingRoomIMG from './../img/projects/bts/waitingRoom.png'
import overviewProjectIMG from './../img/projects/bts/overviewProject.png'

const BtsProject = (props) => {
       const { language } = props;
       const [modalIsOpen, setModalIsOpen] = useState(false);
       const [currentImage, setCurrentImage] = useState('');

       const openModal = (image) => {
              setCurrentImage(image);
              setModalIsOpen(true);
       };

       const closeModal = () => {
              setModalIsOpen(false);
       };

       const customStyles = {
              content: {
                     position: 'fixed', // Utilisez 'fixed' au lieu de 'absolute'
                     top: '50%', // Centrer la modal verticalement
                     left: '50%', // Centrer la modal horizontalement
                     transform: 'translate(-50%, -50%)', // Utiliser la translation pour centrer parfaitement la modal
                     width: '80vw', // Définir la largeur à 80% de la largeur de la vue
                     height: '80vh', // Définir la hauteur à 80% de la hauteur de la vue
              },
       };

       return (
              <div>
                     <Accordion collapseAll>
                            <Accordion.Panel>
                                   <Accordion.Title>
                                          <span style={{ fontFamily: 'Rubik Mono One, sans-serif' }} className="text-cyan-500 text-4xl">E</span>
                                          <span style={{ fontFamily: 'Rubik Mono One, sans-serif' }} className="">-</span>
                                          <span style={{ fontFamily: 'Rubik Mono One, sans-serif' }} className="text-yellow-300 text-4xl">Q</span>
                                          <span style={{ fontFamily: 'Rubik Mono One, sans-serif' }} className="text-red-600 text-4xl">U</span>
                                          <span style={{ fontFamily: 'Rubik Mono One, sans-serif' }} className="text-green-600 text-4xl">I</span>
                                          <span style={{ fontFamily: 'Rubik Mono One, sans-serif' }} className="text-blue-700 text-4xl">Z</span>
                                          <span style={{ fontFamily: 'Rubik Mono One, sans-serif' }} className="text-cyan-500 text-4xl mr-3">Z</span>
                                   </Accordion.Title>
                                   <Accordion.Content>
                                          {/* Pinned content */}

                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'><MdOutlinePushPin size={"3rem"} /></h1>
                                                 <div className='flex flex-row justify-around'>
                                                        <Tooltip content="khylpe/E-Quizz">
                                                               <a href="https://github.com/khylpe/E-Quizz" target="_blank" rel="noopener noreferrer">
                                                                      <FaGithub size={"6rem"} />
                                                               </a>
                                                        </Tooltip>

                                                        <Tooltip content="Dossier technique E-Quizz - BTS SN Vauvenargues">
                                                               <a href="https://crahe-arthur.com/public_files/websites/crahe-arthur/projects/bts/equizz/Dossier%20technique%20E-Quizz%20-%20BTS%20SN%20Vauvenargues%202023%20-%20Censored_biff%C3%A9.pdf" target="_blank" rel="noopener noreferrer">
                                                                      <FaFilePdf size={"6rem"} />
                                                               </a>
                                                        </Tooltip>
                                                 </div>
                                          </div>
                                          {/* Divider */}

                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Introduction */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'>{translations[language].project.categories.bts.equizz.introduction.title}</h1>
                                                 <p className='text-justify px-3'>
                                                        {translations[language].project.categories.bts.equizz.introduction.content}
                                                 </p>
                                          </div>

                                          {/* Divider */}
                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Features */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'>{translations[language].project.categories.bts.equizz.features.title}</h1>
                                                 <div>
                                                        <ul className="list-disc list-inside px-3">
                                                               {translations[language].project.categories.bts.equizz.features.contentList.map((feature, index) => (
                                                                      <li key={index}>{feature}</li>
                                                               ))}
                                                        </ul>
                                                 </div>
                                          </div>

                                          {/* Divider */}
                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Presentation */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'> {translations[language].project.categories.bts.equizz.presentation.title}</h1>
                                                 <div className='space-y-10'>
                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bts.equizz.presentation.createQCM.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(createQuizzIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={createQuizzIMG} alt={translations[language].project.categories.bts.equizz.presentation.createQCM.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bts.equizz.presentation.createQCM.imageCaption}</figcaption>
                                                               </figure>

                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bts.equizz.presentation.waitingRoom.content}

                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(waitingRoomIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={waitingRoomIMG} alt={translations[language].project.categories.bts.equizz.presentation.waitingRoom.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic"> {translations[language].project.categories.bts.equizz.presentation.waitingRoom.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bts.equizz.presentation.displayQuestions.content}
                                                               </p>

                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(displayQuestionIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={displayQuestionIMG} alt={translations[language].project.categories.bts.equizz.presentation.displayQuestions.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bts.equizz.presentation.displayQuestions.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bts.equizz.presentation.quizzResults.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(resultsQuizzIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={resultsQuizzIMG} alt={translations[language].project.categories.bts.equizz.presentation.quizzResults.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bts.equizz.presentation.quizzResults.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bts.equizz.presentation.studentResults.content}
                                                               </p>

                                                               <figure onClick={() => openModal(resultsStudentIMG)} className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(resultsStudentIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={resultsStudentIMG} alt={translations[language].project.categories.bts.equizz.presentation.studentResults.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bts.equizz.presentation.studentResults.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>
                                                 </div>
                                          </div>

                                          {/* Divider */}
                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Tech stack */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'>Tech stack</h1>
                                                 <div className="space-y-3 sm:space-x-5 sm:space-y-0 sm:flex grid grid-cols-2 justify-items-center sm:flex-wrap sm:flex-row mt-5 justify-around px-3">
                                                        <img draggable="false" className='h-16 object-contain' src={javascriptIMG} alt="JavaScript logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={nodejsIMG} alt="nodeJS logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={expressjsIMG} alt="expressJS logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={socketIOIMG} alt="socketIO logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={sassIMG} alt="bootstrap logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={bootstrapIMG} alt="bootstrap logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={phpIMG} alt="PHP logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={mysqlIMG} alt="MySQL logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={zigbeeIMG} alt="Zigbee logo" />
                                                        <img draggable="false" className='h-16 object-contain' src={cppIMG} alt="Zigbee logo" />
                                                 </div>
                                          </div>

                                          {/* Divider */}
                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Technical details */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'>{translations[language].project.categories.bts.equizz.technicalDetails.title}</h1>
                                                 <div>
                                                        <p className='text-justify px-3'>
                                                               {translations[language].project.categories.bts.equizz.technicalDetails.content}
                                                        </p>
                                                        <div >
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(overviewProjectIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={overviewProjectIMG} alt="overview of the E-QUIZZ project" />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bts.equizz.technicalDetails.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>
                                                 </div>
                                          </div>


                                   </Accordion.Content>
                            </Accordion.Panel>
                     </Accordion>

                     <Modal
                            className="bg-black rounded-2xl relative"
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={customStyles}>

                            {/* Icône X avec position absolue */}
                            <div className='absolute top-0 right-0 p-2'>
                                   <XMarkIcon onClick={closeModal} className="h-6 w-6 cursor-pointer" aria-hidden="true" />
                            </div>

                            {/* Contenu de la modal */}
                            <div className='flex items-center justify-center h-full'>
                                   <img src={currentImage} alt="Current" className='rounded-2xl' />
                            </div>
                     </Modal>
              </div>)
};

export default withLanguage(BtsProject);