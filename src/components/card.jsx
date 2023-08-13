//card.jsx
import { Card } from 'flowbite-react';
import ComingSoon from "./comingSoon"

const CardEducation = ({ title, description, target, comingSoon = false }) => {
       return (
              <Card
                     className="sm:w-1/3 sm:m-3 w-full mx-4 my-2 border-white dark:border-gray-700 border-2 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                     href={target}
                     style={{ borderColor: 'white' }}
              >
                     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
                            {title}
                     </h5>

                     {comingSoon ?
                            <ComingSoon></ComingSoon>
                            :
                            <p className="font-normal text-gray-700 dark:text-gray-400 break-words">{description}</p>
                     }
              </Card>
       )
}

export default CardEducation;

