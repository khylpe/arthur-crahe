import { Accordion, Tooltip } from 'flowbite-react';
import Modal from 'react-modal';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'

import { withLanguage } from "../contexts/languageContext";
import { translations } from '../translations';
import { MdOutlinePushPin } from "react-icons/md";
import { FaGithub, } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

// Logo images for tech stack
import nextjsLogo from './../img/projects/bachelor/cube/nextjsLogo.png'
import laravelLogo from './../img/projects/bachelor/cube/laravelLogo.png'
import reactLogo from './../img/projects/bachelor/cube/reactLogo.png'
import typescriptLogo from './../img/projects/bachelor/cube/typescriptLogo.png'
import mariadbLogo from './../img/projects/bachelor/cube/mariadbLogo.png'
import antdLogo from './../img/projects/bachelor/cube/antdLogo.png'
import dockerLogo from './../img/projects/bachelor/cube/dockerLogo.png'
import cypressLogo from './../img/projects/bachelor/cube/cypressLogo.png'
import phpunitLogo from './../img/projects/bachelor/cube/phpunitLogo.svg'
import swaggerLogo from './../img/projects/bachelor/cube/swaggerLogo.png'
import tailwindcssLogo from './../img/projects/bachelor/cube/tailwindcssLogo.webp'
import chartjsLogo from './../img/projects/bachelor/cube/chartjsLogo.png'
import axiosLogo from './../img/projects/bachelor/cube/axiosLogo.png'
import cloudflareLogo from './../img/projects/bachelor/cube/cloudflareLogo.png'
import nginxLogo from './../img/projects/bachelor/cube/nginxLogo.svg'
import sentryLogo from './../img/projects/bachelor/cube/sentryLogo.png'
// Images for Cube project in the Bachelor
import aRessource from './../img/projects/bachelor/cube/aRessource.png'
import bookmarks from './../img/projects/bachelor/cube/bookmarks.png';
import categories from './../img/projects/bachelor/cube/categories.png';
import createRessource from './../img/projects/bachelor/cube/createRessource.png';
import dashboard from './../img/projects/bachelor/cube/dashboard.png';
import gestionUtilisateurs from './../img/projects/bachelor/cube/gestionUtilisateurs.png';
import mesFavoris from './../img/projects/bachelor/cube/mesFavoris.png';
import mesRessources from './../img/projects/bachelor/cube/mesRessources.png';
import modifyCategory from './../img/projects/bachelor/cube/modifyCategory.png';
import pendingComments from './../img/projects/bachelor/cube/pendingComments.png';
import pendingRessources from './../img/projects/bachelor/cube/pendingRessources.png';
import statsCategories from './../img/projects/bachelor/cube/statsCategories.png';
import statsRessources from './../img/projects/bachelor/cube/statsRessources.png';
import archi from './../img/projects/bachelor/cube/archi.png'

const BachelorProject = (props) => {
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
                                          <span className="text-4xl">{translations[language].project.categories.bachelor.cube.title}</span>
                                   </Accordion.Title>
                                   <Accordion.Content>
                                          {/* Pinned content */}

                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'><MdOutlinePushPin size={"3rem"} /></h1>
                                                 <div className='flex flex-row justify-around'>
                                                        <Tooltip content="CESI-GRP-4/ressources_relationnelles">
                                                               <a href="https://github.com/CESI-GRP-4/ressources_relationnelles" target="_blank" rel="noopener noreferrer">
                                                                      <FaGithub size={"6rem"} />
                                                               </a>
                                                        </Tooltip>

                                                        <Tooltip content="Website">
                                                               <a href="https://cube.aio-tools.com/" target="_blank" rel="noopener noreferrer">
                                                                      <TbWorld size={"6rem"} />
                                                               </a>
                                                        </Tooltip>

                                                        {/*<Tooltip content="Dossier technique E-Quizz - BTS SN Vauvenargues">
                                                               <a href="https://crahe-arthur.com/public_files/websites/crahe-arthur/projects/bts/equizz/Dossier%20technique%20E-Quizz%20-%20BTS%20SN%20Vauvenargues%202023%20-%20Censored_biff%C3%A9.pdf" target="_blank" rel="noopener noreferrer">
                                                                      <FaFilePdf size={"6rem"} />
                                                               </a>
                                                        </Tooltip>*/}
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
                                                        {translations[language].project.categories.bachelor.cube.introduction.content}
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
                                                               {translations[language].project.categories.bachelor.cube.features.contentList.map((feature, index) => (
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
                                                 <h1 className='text-4xl'>{translations[language].project.categories.bachelor.cube.presentation.title}</h1>
                                                 <div className='space-y-10'>
                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.aResource.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(aRessource)} draggable="false" className="cursor-pointer h-96 object-contain" src={aRessource} alt={translations[language].project.categories.bachelor.cube.presentation.aResource.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.aResource.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.mesFavoris.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(mesFavoris)} draggable="false" className="cursor-pointer h-96 object-contain" src={mesFavoris} alt={translations[language].project.categories.bachelor.cube.presentation.mesFavoris.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.mesFavoris.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.categories.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(categories)} draggable="false" className="cursor-pointer h-96 object-contain" src={categories} alt={translations[language].project.categories.bachelor.cube.presentation.categories.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.categories.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.createResource.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(createRessource)} draggable="false" className="cursor-pointer h-96 object-contain" src={createRessource} alt={translations[language].project.categories.bachelor.cube.presentation.createResource.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.createResource.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.dashboard.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(dashboard)} draggable="false" className="cursor-pointer h-96 object-contain" src={dashboard} alt={translations[language].project.categories.bachelor.cube.presentation.dashboard.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.dashboard.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.gestionUtilisateurs.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(gestionUtilisateurs)} draggable="false" className="cursor-pointer h-96 object-contain" src={gestionUtilisateurs} alt={translations[language].project.categories.bachelor.cube.presentation.gestionUtilisateurs.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.gestionUtilisateurs.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.bookmarks.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(bookmarks)} draggable="false" className="cursor-pointer h-96 object-contain" src={bookmarks} alt={translations[language].project.categories.bachelor.cube.presentation.bookmarks.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.bookmarks.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.mesRessources.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(mesRessources)} draggable="false" className="cursor-pointer h-96 object-contain" src={mesRessources} alt={translations[language].project.categories.bachelor.cube.presentation.mesRessources.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.mesRessources.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.modifyCategory.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(modifyCategory)} draggable="false" className="cursor-pointer h-96 object-contain" src={modifyCategory} alt={translations[language].project.categories.bachelor.cube.presentation.modifyCategory.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.modifyCategory.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.pendingComments.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(pendingComments)} draggable="false" className="cursor-pointer h-96 object-contain" src={pendingComments} alt={translations[language].project.categories.bachelor.cube.presentation.pendingComments.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.pendingComments.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.pendingRessources.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(pendingRessources)} draggable="false" className="cursor-pointer h-96 object-contain" src={pendingRessources} alt={translations[language].project.categories.bachelor.cube.presentation.pendingRessources.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.pendingRessources.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.statsCategories.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(statsCategories)} draggable="false" className="cursor-pointer h-96 object-contain" src={statsCategories} alt={translations[language].project.categories.bachelor.cube.presentation.statsCategories.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.statsCategories.imageCaption}</figcaption>
                                                               </figure>
                                                        </div>

                                                        <div className='space-y-5'>
                                                               <p className='p-3'>
                                                                      {translations[language].project.categories.bachelor.cube.presentation.statsRessources.content}
                                                               </p>
                                                               <figure className="flex flex-col justify-center">
                                                                      <img onClick={() => openModal(statsRessources)} draggable="false" className="cursor-pointer h-96 object-contain" src={statsRessources} alt={translations[language].project.categories.bachelor.cube.presentation.statsRessources.imageCaption} />
                                                                      <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.statsRessources.imageCaption}</figcaption>
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
                                                 <div className="space-y-3 gap-5 sm:space-y-0 sm:flex grid grid-cols-2 justify-items-center sm:flex-wrap sm:flex-row mt-5 justify-around px-3">
                                                        <Tooltip content="React">
                                                               <img draggable="false" className='h-16 object-contain' src={reactLogo} alt="react logo" />
                                                        </Tooltip>
                                                        <Tooltip content="NextJS">
                                                               <img draggable="false" className='h-16 object-contain' src={nextjsLogo} alt="nextjs logo" />
                                                        </Tooltip>


                                                        <Tooltip content="TypeScript">
                                                               <img draggable="false" className='h-16 object-contain' src={typescriptLogo} alt="typescript logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Axios">
                                                               <img draggable="false" className='h-16 object-contain' src={axiosLogo} alt="axios logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Tailwindcss">
                                                               <img draggable="false" className='h-16 object-contain' src={tailwindcssLogo} alt="tailwindcss logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Ant Design">
                                                               <img draggable="false" className='h-16 object-contain' src={antdLogo} alt="antd logo" />
                                                        </Tooltip>
                                                        <Tooltip content="ChartJS">
                                                               <img draggable="false" className='h-16 object-contain' src={chartjsLogo} alt="chartjs logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Cypress">
                                                               <img draggable="false" className='h-16 object-contain' src={cypressLogo} alt="cypress logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Laravel">
                                                               <img draggable="false" className='h-16 object-contain' src={laravelLogo} alt="laravel logo" />
                                                        </Tooltip>
                                                        <Tooltip content="PhpUnit">
                                                               <img draggable="false" className='h-16 object-contain' src={phpunitLogo} alt="phpunit logo" />
                                                        </Tooltip>
                                                        <Tooltip content="MariaDB">
                                                               <img draggable="false" className='h-16 object-contain' src={mariadbLogo} alt="mariadb logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Docker">
                                                               <img draggable="false" className='h-16 object-contain' src={dockerLogo} alt="docker logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Swagger">
                                                               <img draggable="false" className='h-16 object-contain' src={swaggerLogo} alt="swagger logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Sentry.io">
                                                               <img draggable="false" className='h-16 object-contain' src={sentryLogo} alt="sentry logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Nginx">
                                                               <img draggable="false" className='h-16 object-contain' src={nginxLogo} alt="nginx logo" />
                                                        </Tooltip>
                                                        <Tooltip content="Cloudflare">
                                                               <img draggable="false" className='h-16 object-contain' src={cloudflareLogo} alt="cloudflare logo" />
                                                        </Tooltip>



                                                 </div>
                                          </div>

                                          {/* Divider */}
                                          <div className="inline-flex items-center justify-center w-full">
                                                 <hr className="container my-8 bg-gray-200 border-0 dark:bg-gray-700 h-1"></hr>
                                          </div>

                                          {/* Technical details */}
                                          <div className='space-y-5'>
                                                 <h1 className='text-4xl'>{translations[language].project.categories.bachelor.cube.technicalDetails.title}</h1>
                                                 <div>
                                                        <p className='text-justify px-3'>
                                                               {translations[language].project.categories.bachelor.cube.technicalDetails.content}
                                                        </p>
                                                 </div>

                                                 <p className='p-3'>
                                                        {translations[language].project.categories.bachelor.cube.presentation.architecture.content}
                                                 </p>
                                                 <figure className="flex flex-col justify-center">
                                                        <img onClick={() => openModal(archi)} draggable="false" className="cursor-pointer h-96 object-contain" src={archi} alt={translations[language].project.categories.bachelor.cube.presentation.architecture.imageCaption} />
                                                        <figcaption className="text-center mt-2 text-lg text-gray-500 italic">{translations[language].project.categories.bachelor.cube.presentation.architecture.imageCaption}</figcaption>
                                                 </figure>
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
export default withLanguage(BachelorProject);