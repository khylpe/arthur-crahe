//card.jsx
import { Card } from 'flowbite-react';
import { Alert } from 'flowbite-react';

const CardEducation = ({ props, title, description, cardColor, target, comingSoon = false }) => {
       return (
              <Card
                     className="sm:w-1/3 sm:m-3 w-full mx-4 my-2"
                     href={target}
                     style={{ borderColor: cardColor }}
              >
                     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
                            {title}
                     </h5>

                     {comingSoon ?
                            <div className='w-fit' >
                                   <Alert rounded className='alertBG'>
                                          <div className='flex flex-row items-center'>
                                                 <span className="font-medium" style={{color: "#121212"}}>
                                                        Coming soon !
                                                 </span>
                                                 <div className='px-4 dots'>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                 </div>
                                          </div>
                                   </Alert>
                            </div>
                            :
                            <p className="font-normal text-gray-700 dark:text-gray-400 break-words">{description}</p>
                     }

              </Card>
       )
}

export default CardEducation;

