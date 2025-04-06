import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const DynamicCard = ({ id, title, subtitle, rating, image, backgroundColors, className="" }) => {
  const { top, bottom } = backgroundColors || { top: "#3949AB", bottom: "#1E88E5" };

  return (
    <Link to={`/image-gallery/${id}`}>
      <div
        className={'card flex flex-col justify-between p-6 rounded-[10%] relative text-white overflow-hidden h-[350px] md:h-[400px] w-fit z-10 hover:-translate-y-10 transition-all duration-300 ' + className}
        style={{
          background: `linear-gradient(135deg, ${top}, ${bottom})`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        {/* Top content */}
        <div className='z-10 max-w-64 md:w-52'>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold mb-0.5">{title}</h2>
            {rating && (
              <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full">
                {rating}
              </span>
            )}
          </div>
          <p className="text-xs opacity-80 mt-1">"{subtitle}"</p>
        </div>

        {/* Image */}
        <div className="relative flex justify-center items-center flex-grow">
          <img
            src={image}
            alt={title}
            className="w-52 h-52 object-cover rounded-lg drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* View more button */}
       {/*  <div className="flex justify-end mt-2 z-10">
          <span className="text-xs font-medium flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
            View Gallery <FaArrowRight size={10} />
          </span>
        </div> */}

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-10 -mb-10"></div>
      </div>
    </Link>
  );
};

export default DynamicCard;
