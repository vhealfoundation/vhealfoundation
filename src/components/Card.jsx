import React from "react";
import CustomButton from "./CustomButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div className="h-[500px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      
      <a href={link} className="block overflow-hidden rounded-t-lg group">
        <div className="h-[270px]">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
            src={imageSrc}
            alt={title}
          />
        </div>
      </a>

     
      <div className="flex flex-col flex-1 p-4 overflow-hidden">
   
        <a href={link}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>

    
        <p className="flex-1 mt-2 mb-4 font-normal text-gray-700 dark:text-gray-400 overflow-hidden overflow-ellipsis">
          {description}
        </p>

      
        <div className="mt-auto">
          <CustomButton className="w-[150px] bg-primary hover:bg-primary-dark flex items-center gap-2">
            Get Involved
            <AiOutlineArrowRight size={20} />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
