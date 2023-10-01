import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Socials = () => {
       return (
              <div className='flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5'>
                     <a rel="noreferrer" href="https://www.instagram.com/arthur_crahe/" target='_blank' className='flex items-center justify-center px-3 py-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <AiFillInstagram className='h-14 w-14'></AiFillInstagram>
                            <span className='w-full ml-2'>Instagram /arthur_crahe</span>
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                     </a>
                     <a rel="noreferrer" href="https://twitter.com/Arthur_crahe" target='_blank' className='flex items-center justify-center px-3 py-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <AiFillTwitterCircle className='h-14 w-14'></AiFillTwitterCircle>
                            <span className='w-full ml-2'>Twitter /Arthur_crahe</span>
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                     </a>

                     <a rel="noreferrer" href="https://www.github.com/khylpe" target='_blank' className='flex items-center justify-center px-3 py-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <AiOutlineGithub className='h-14 w-14'></AiOutlineGithub>
                            <span className='w-full ml-2'>Github /khylpe</span>
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                     </a>
                     <a rel="noreferrer" href="https://www.linkedin.com/in/arthur-c-a23135200/" target='_blank' className='flex items-center justify-center px-3 py-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <AiFillLinkedin className='h-14 w-14'></AiFillLinkedin>
                            <span className='w-full ml-2'>Linkedin /Arthur CRAHÉ</span>
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                     </a>
              </div>
       )
}

export default Socials;