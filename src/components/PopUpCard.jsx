import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BsCalendar2Check } from "react-icons/bs";

const PopUpCard = ({ onClose }) => {
    const navigate = useNavigate();
    const [fadeClass, setFadeClass] = useState("opacity-0 scale-90");

    // Trigger fade-in animation when the modal is rendered
    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeClass("opacity-100 scale-100");
        }, 100); 

        return () => clearTimeout(timer);
    }, []);



    return (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500">
            <div
                className={`mt-12 md:mt-6  bg-white p-4 md:p-8 rounded-lg shadow-2xl w-11/12 md:w-1/2 relative transform transition-all duration-500 ease-in-out ${fadeClass}`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <AiOutlineClose size={24} />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center text-center">
                    <BsCalendar2Check
                        size={48}
                        className="text-green-600 mb-4 animate-pulse"
                    />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                        Empowering Minds, Rebuilding Lives
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Transform your life with personalized psychological support 
                        tailored for released jailers. Let’s work together to heal and 
                        find a better path forward.
                    </p>

                    {/* Testimonial Snippet */}
                    <div className="bg-green-50 p-4 rounded-lg shadow-inner mb-6 w-full">
                        <p className="text-gray-700 italic">
                            "I never thought I could feel this free and supported. 
                            This programme gave me a new life." 
                            <br />
                            — <span className="font-semibold">Jane D., Programme Beneficiary</span>
                        </p>
                    </div>

                    {/* Call to Actions */}
                    <div className="bg-blue-50 p-4 rounded-lg shadow-inner w-full">
                        Book your appointment now and start your healing journey | Help us rebuild lives
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpCard;
