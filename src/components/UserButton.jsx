import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import CustomButton from "./CustomButton";
import toast from "react-hot-toast";
import { FaSignInAlt } from 'react-icons/fa';

export default function UserButton({ showInSidebar = false, mobileHeaderOnly = false }) {
    const { isAuthenticated, user, login, logout } = useKindeAuth();
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const [prevAuthState, setPrevAuthState] = useState(null);
    const dropdownRef = useRef(null); // Reference to the dropdown container

    useEffect(() => {
        // Check if authentication state is available
        if (isAuthenticated !== undefined) {
            setIsLoading(false);

            // Show toast notifications for login/logout
            if (prevAuthState !== null && prevAuthState !== isAuthenticated) {
                if (isAuthenticated && user) {
                    // User just logged in
                    toast.success(`Login successful! Welcome ${user.given_name || user.email}!`, {
                        duration: 4000,
                        icon: '👋',
                    });
                } else if (!isAuthenticated && prevAuthState === true) {
                    // User just logged out
                    toast.success('Logged out successfully!', {
                        duration: 3000,
                        icon: '👋',
                    });
                }
            }

            // Update previous auth state
            setPrevAuthState(isAuthenticated);
        }

        // Add event listener for Kinde auth state changes
        const handleAuthChange = () => {
            // Force a re-render when auth state changes in another tab/window
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 100);
        };

        window.addEventListener('storage', handleAuthChange);

        return () => {
            window.removeEventListener('storage', handleAuthChange);
        };
    }, [isAuthenticated, user, prevAuthState]); // Re-run this when `isAuthenticated` changes

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsClicked(false); // Close the dropdown if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (isLoading) {
        // Show different loading states based on context
        if (showInSidebar) {
            return (
                <div className="w-full bg-gray-200 text-gray-500 px-4 py-2 rounded-md text-sm text-center">
                    Loading...
                </div>
            );
        }
        // Show a minimal loading indicator for other contexts
        return (
            <div className="flex items-center justify-center w-10 h-10">
                <div className="w-5 h-5 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    // If in sidebar, show sign in button when not authenticated, nothing when authenticated
    if (showInSidebar) {
        if (!isAuthenticated) {
            return (
                <button
                    onClick={login}
                    className="w-full bg-primary text-white font-semibold hover:bg-primary-dark text-sm px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 0a4 4 0 01-4 4H3a2 2 0 01-2-2V7a2 2 0 012-2h4a4 4 0 014 4v1" />
                    </svg>
                    Sign In
                </button>
            );
        } else {
            // User is authenticated, don't show anything in sidebar (avatar is handled separately)
            return null;
        }
    }

    // If in mobile header and not authenticated, don't show anything
    if (mobileHeaderOnly && !isAuthenticated) {
        return null;
    }

    return (
        <div className="relative" ref={dropdownRef}>
            {isAuthenticated ? (
                <div className="relative">
                    {/* User Avatar */}
                    <div
                        className="relative"
                        onClick={() => setIsClicked(!isClicked)}
                    >
                        {user.picture ? (
                            <img
                                src={user.picture}
                                alt="User Avatar"
                                className="rounded-full w-10 h-10 cursor-pointer"
                            />
                        ) : (
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white cursor-pointer">
                                {user?.given_name?.[0]}
                                {user?.family_name?.[0]}
                            </span>
                        )}
                    </div>

                    {/* Show additional profile info on click */}
                    {isClicked && (
                        <div className="absolute right-0 top-12 mt-2 w-[300px] md:w-[350px] p-4 md:p-6 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            {/* User Info */}
                            <div className="flex flex-col items-center gap-4">
                                {/* User Avatar and Email in a Row */}
                                <div className="flex items-center gap-4">
                                    {/* User Avatar */}
                                    {user?.picture ? (
                                        <img
                                            src={user.picture}
                                            alt="User Avatar"
                                            className="rounded-full w-16 h-16 border-2 border-gray-200"
                                        />
                                    ) : (
                                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-500 text-white text-xl font-bold">
                                            {user?.given_name?.[0]}
                                            {user?.family_name?.[0]}
                                        </span>
                                    )}

                                    {/* User Email */}
                                    <div className="flex flex-col items-start">
                                        <p className="text-lg font-medium text-gray-800">
                                            {user?.given_name} {user?.family_name}
                                        </p>
                                        <p className="text-sm text-gray-600">{user?.email}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full border-t border-gray-200 my-2"></div>

                                {/* Buttons */}
                                <div className="w-full flex flex-col gap-3 ">
                                    {/* Your Donations Button */}
                                    <Link to="/your-donations">
                                        <button className="w-full rounded-md bg-primary text-white px-4 py-2 text-sm hover:bg-primary-dark">
                                            Your Donations
                                        </button>
                                    </Link>
                                    {/* Your Appointments Button */}
                                    <Link to="/your-appointments">
                                        <button className="w-full rounded-md bg-primary text-white px-4 py-2 text-sm hover:bg-primary-dark">
                                            Your Appointments
                                        </button>
                                    </Link>
                                    {/* Sign Out Button */}
                                    <Link>
                                        <button
                                            onClick={() => {
                                                logout();
                                                toast.success('Logged out successfully!', {
                                                    duration: 3000,
                                                    icon: '👋',
                                                });
                                            }}
                                            className="w-full rounded-md bg-red-500 text-white px-4 py-2 text-sm hover:bg-red-600 transition-all"
                                        >
                                            Sign Out
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <CustomButton
                    onClick={login}
                    className="md:mb-0 bg-gray-200 text-tertiary font-semibold hover:bg-gray-300 text-sm md:text-base"
                >
                    <FaSignInAlt className="h-4 w-4" /> {/* Use the imported icon here */}
                    Sign In
                </CustomButton>
            )}
        </div>
    );
}