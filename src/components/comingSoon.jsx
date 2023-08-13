import { withLanguage } from "../contexts/languageContext"
import {translations} from "./../translations"
import { Alert } from 'flowbite-react';

const ComingSoon = (props) => {
       const {language} = props;
       return (
              <div className='w-fit' >
                     <Alert rounded className='alertBG'>
                            <div className='flex flex-row items-center'>
                                   <span className="font-medium" style={{ color: "#121212" }}>
                                          {translations[language].general.comingSoon}
                                   </span>
                                   <div className='px-4 dots'>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                   </div>
                            </div>
                     </Alert>
              </div>)
}

export default withLanguage(ComingSoon);