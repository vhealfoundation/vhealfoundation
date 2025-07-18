import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileUserAvatar() {
    const { isAuthenticated, user, logout } = useKindeAuth();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if authentication state is available
        if (isAuthenticated !== undefined) {
            setIsLoading(false);
        }

        // Add event listener for Kinde auth state changes
        const handleAuthChange = () => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 100);
        };

        window.addEventListener('storage', handleAuthChange);

        return () => {
            window.removeEventListener('storage', handleAuthChange);
        };
    }, [isAuthenticated]);

    if (isLoading || !isAuthenticated) {
        return null;
    }

    const expandVariants = {
        hidden: {
            height: 0,
            opacity: 0
        },
        visible: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="w-full">
            {/* User Avatar Header - Always Visible */}
            <div
                className="flex items-center cursor-pointer p-1 hover:bg-gray-700 rounded-lg transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {user.picture ? (
                    <img
                        src={user.picture}
                        alt="User Avatar"
                        className="rounded-full w-10 h-10 border-2 border-gray-600"
                    />
                ) : (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white border-2 border-gray-600 font-bold text-sm">
                        {user?.given_name?.[0]}
                        {user?.family_name?.[0]}
                    </span>
                )}

                <div className="ml-2 flex-1 min-w-0">
                    <p className="text-white font-semibold text-xs truncate">
                        {user?.given_name} {user?.family_name}
                    </p>
                    <p className="text-gray-400 text-xs truncate">{user?.email}</p>
                </div>

                {/* Expand/Collapse Arrow */}
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </div>

            {/* Expandable Menu */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden"
                    >
                        <div className="mt-1 space-y-0.5 pl-3">
                            <Link to="/your-donations">
                                <div className="flex items-center p-1.5 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Your Donations</span>
                                </div>
                            </Link>

                            <Link to="/your-appointments">
                                <div className="flex items-center p-1.5 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Your Appointments</span>
                                </div>
                            </Link>

                            <button
                                onClick={logout}
                                className="w-full flex items-center p-1.5 text-red-400 hover:text-red-300 hover:bg-gray-700 rounded transition-colors text-xs"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3v1" />
                                </svg>
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
