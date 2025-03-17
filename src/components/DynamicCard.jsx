import React from 'react'

const DynamicCard = ({ title, subtitle, rating, backgroundColors, className="", image }) => {
    const { top, bottom } = backgroundColors;
  
    return (
      <div
        className={'card flex flex-col justify-center p-5 rounded-[10%] relative text-white overflow-hidden h-[350px] md:h-[400px] w-fit z-10 hover:-translate-y-10 transition-all duration-300' + className}
        style={{
          background: `linear-gradient(to bottom, ${top}, ${bottom})`,
        }}
      >
      
      
          <div className='z-10 max-w-64 md:w-52 '>
            <h2 className="text-xl md:text-2xl font-bold mb-0.5">{title}</h2>
            <p className="text-xs opacity-70">{subtitle}</p>
          </div>
         
       
        <img
          src={image}
          alt={title}
          className="w-52 h-52 object-cover mt-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] mx-5 mb-7"
        />
      </div>
    );
  };
export default DynamicCard