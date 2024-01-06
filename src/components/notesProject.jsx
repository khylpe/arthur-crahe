import { Accordion, Tooltip } from 'flowbite-react';
import Modal from 'react-modal';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'

import { withLanguage } from "../contexts/languageContext";
import { translations } from '../translations';

import { MdOutlinePushPin } from "react-icons/md";
import { FaGithub, FaFilePdf } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

// Images presentation
import loginNotesIMG from './../img/projects/personal/notes/loginPage.png'
import mainPageNotesIMG from './../img/projects/personal/notes/mainPage.png'

// Logo images for tech stack
import viteLogo from './../img/projects/personal/notes/viteLogo.png'
import vueLogo from './../img/projects/personal/notes/vueLogo.png'
import piniaLogo from './../img/projects/personal/notes/piniaLogo.svg'
import basscssLogo from './../img/projects/personal/notes/basscssLogo.png'
import antDesignVueLogo from './../img/projects/personal/notes/antDesignVueLogo.png'
import firebaseLogo from './../img/projects/personal/notes/firebaseLogo.png'
import firestoreCloudLogo from './../img/projects/personal/notes/firestoreCloudLogo.png'
import typescriptLogo from './../img/projects/personal/notes/typescriptLogo.svg'

const PersonnalProjects = (props) => {
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
                                          <span className="text-4xl">Notes</span>
                                   </Accordion.Title>
                                   <Accordion.Content>
                                          {/* Pinned content */}

                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'><MdOutlinePushPin size={"3rem"} /></h1>
                                                 <div className='flex flex-row justify-around'>
                                                        <Tooltip content="khylpe/notes">
                                                               <a href="https://github.com/khylpe/notes" target="_blank" rel="noopener noreferrer">
                                                                      <FaGithub size={"6rem"} />
                                                               </a>
                                                        </Tooltip>

                                                        <Tooltip content="Website">
                                                               <a href="https://notes.crahe-arthur.com" target="_blank" rel="noopener noreferrer">
                                                                      <TbWorld size={"6rem"} />
                                                               </a>
                                                        </Tooltip>
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
                                                        <div>
                                                               <Tooltip content="Vite">
                                                                      <img draggable="false" className='h-16 object-contain' src={viteLogo} alt="Vite logo" />
                                                               </Tooltip>
                                                        </div>
                                                        <div>
                                                               <Tooltip content="Vue">
                                                                      <img draggable="false" className='h-16 object-contain' src={vueLogo} alt="Vue logo" />
                                                               </Tooltip>
                                                        </div>
                                                        <div>
                                                               <Tooltip content="Pinia">
                                                                      <img draggable="false" className='h-16 object-contain' src={piniaLogo} alt="Pinia logo" />
                                                               </Tooltip>
                                                        </div>
                                                        <div>
                                                               <Tooltip content="Typescript">
                                                                      <img draggable="false" className='h-16 object-contain' src={typescriptLogo} alt="Typescript logo" />
                                                               </Tooltip>
                                                        </div>
                                                        <div>
                                                               <Tooltip content="Basscss">
                                                                      <img draggable="false" className='h-16 object-contain' src={basscssLogo} alt="Bassscss logo" />
                                                               </Tooltip>
                                                        </div>
                                                        <div>
                                                               <Tooltip content="Ant Design Vue">
                                                                      <img draggable="false" className='h-16 object-contain' src={antDesignVueLogo} alt="Ant Design Vue logo" />
                                                               </Tooltip>
                                                        </div>
                                                        <div>
                                                               <Tooltip content="Firebase Auth">
                                                                      <img draggable="false" className='h-16 object-contain' src={firebaseLogo} alt="Firebase Auth logo" />
                                                               </Tooltip>
                                                        </div>
                                                        <div>
                                                               <Tooltip content="Firestore Cloud">
                                                                      <img draggable="false" className='h-16 object-contain' src={firestoreCloudLogo} alt="Firestore Cloud logo" />
                                                               </Tooltip>
                                                        </div>
                                                 </div>
                                          </div>

                                          {/* Divider */}
                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Introduction */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'>{translations[language].project.categories.personal.notes.introduction.title}</h1>
                                                 <p className='text-justify px-3'>
                                                        {translations[language].project.categories.personal.notes.introduction.content}                                                 </p>
                                          </div>

                                          {/* Divider */}
                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Features */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'>{translations[language].project.categories.personal.notes.features.title}</h1>
                                                 <div>
                                                        <ul className="list-disc list-inside px-3">
                                                               {translations[language].project.categories.personal.notes.features.contentList.map((feature, index) => (
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
                                                 <h1 className='text-4xl'>{translations[language].project.categories.personal.notes.presentation.title}</h1>
                                                 <div className='space-y-10'>
                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.personal.notes.presentation.login.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(loginNotesIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={loginNotesIMG} alt={translations[language].project.categories.personal.notes.presentation.login.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.personal.notes.presentation.login.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.personal.notes.presentation.mainPage.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(mainPageNotesIMG)} draggable="false" className="cursor-pointer h-96 object-contain" src={mainPageNotesIMG} alt={translations[language].project.categories.personal.notes.presentation.mainPage.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.personal.notes.presentation.mainPage.imageCaption}</figcaption>
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
export default withLanguage(PersonnalProjects);