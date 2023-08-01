//card.jsx
import { Card } from 'flowbite-react';

const CardEducation = ({ props, title, description, cardColor }) => {
       return (
              <Card
                     className="sm:w-1/3 sm:m-1 w-full mx-4 my-1"
                     href="#"
                     style={{ borderColor: cardColor }}
              >
                     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
                            {title}
                     </h5>
                     <p className="font-normal text-gray-700 dark:text-gray-400 break-words">
                            {description}
                     </p>
              </Card>
       )
}

export default CardEducation;

