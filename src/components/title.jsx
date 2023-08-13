const Title = ({title}) => {
       return (
              <div className='-ml-3 flex flex-row text-4xl font-bold tracking-tight text-gray-900 dark:text-white break-words p-0'>
                     <span className='italic fadeInAndOut'>#</span>
                     <h1 className='ml-1 italic'>{title}</h1>
              </div>)
};

export default Title;