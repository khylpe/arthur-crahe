import { withLanguage } from "./../contexts/languageContext";
import { translations } from "./../translations";
import { useTheme } from './../contexts/themeContext';
import whiteLogo from './../img/white.png';
import blackLogo from './../img/black.png';


const Maintenance = (props) => {
       const { theme } = useTheme();
       const { language } = props;

       return (
              <div className='flex flex-col items-center justify-center py-8 sm:py-0'>
                     <div className='flex flex-col items-center justify-center space-y-4 mx-10'>
                            <img
                                   draggable="false"
                                   className="w-auto h-36"
                                   src={theme === 'light' ? blackLogo : whiteLogo}
                                   alt="Arthur CRAHE logo"
                            />
                            {/* <h1 className='text-5xl font-bold text-center mt-10'>Arthur CRAHE</h1>
                            <h2 className='text-2xl font-bold text-center mt-5'>CESI | {translations[language].home.alternance} | {translations[language].home.job}</h2> */}

                            <h1 className="text-6xl text-center">{translations[language].maintenance.title}</h1>
                            <p className="font-light text-gray-500 text-2xl dark:text-gray-400 text-center">{translations[language].maintenance.description}</p>
                     </div>
              </div>

       )
};
export default withLanguage(Maintenance);