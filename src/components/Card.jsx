import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ imageSrc, title, description}) => {
  return (
    <Link to="/what-we-do" className="h-[500px] max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col hover:cursor-pointer">
     
      <div className="block overflow-hidden rounded-t-lg group">
        <div className="h-[270px]">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
            src={imageSrc}
            alt={title}
          />
        </div>
      </div>

     
      <div className="flex flex-col flex-1 p-4 overflow-hidden">
   
   
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
   

    
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
   
    </Link>
  );
};

export default Card;
