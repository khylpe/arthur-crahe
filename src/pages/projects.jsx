import Title from './../components/title';
import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";
import centerDivIMG from './../img/centerDiv.png'
import ComingSoon from "./../components/comingSoon"
import BtsProject from '../components/btsProject';

const Project = (props) => {
       const { language } = props;
       return (
              <div className='mt-5 container'>
                     <div className="text-center">
                            <h1 className="text-5xl font-extrabold leading-none mb-4 border-b-4 inline-block bg-dark-secondary-color px-6 py-3 transform rotate-2 shadow-lg">
                                   {translations[language].project.pageTitle}
                            </h1>

                            <p className="text-xl text-justify max-w-3xl mx-auto mt-6 text-dark-accent-color italic leading-relaxed">
                                   {translations[language].project.description}
                            </p>
                     </div>

                     <div className='mt-32 text-center'>
                            <Title title={translations[language].project.preview.title}></Title>
                            <div className="inline-block mt-20 blur-2xl hover:blur-none">
                                   <img src={centerDivIMG} alt="centerDiv" className="w-2/3 mt-10 mx-auto"></img>
                                   <span className='underline text-lg decoration-sky-500 decoration-2 underline-offset-4'>{translations[language].project.preview.joke}</span>
                            </div>
                            <span className='underline decoration-pink-500 underline-offset-4 decoration-2'>{translations[language].project.preview.hover}</span>
                     </div>

                     <div className="space-y-8 mb-52">

                            <div id="personal" className="mt-52 space-y-5">
                                   <Title title={translations[language].project.categories.personal.title}></Title>
                                   <ComingSoon></ComingSoon>
                            </div>

                            <div id="bachelor" className="space-y-5">
                                   <Title title={translations[language].project.categories.bachelor.title}></Title>
                                   <ComingSoon></ComingSoon>
                            </div>

                            <div id="BTS" className="space-y-5">
                                   <Title title={translations[language].project.categories.bts.title}></Title>
                                   <BtsProject></BtsProject>
                            </div>
                     </div>
              </div>
       )
}

export default withLanguage(Project);