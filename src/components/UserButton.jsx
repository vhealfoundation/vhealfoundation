import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import CustomButton from "./CustomButton";

export default function UserButton() {
    const { isAuthenticated, user, login, logout } = useKindeAuth();
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const dropdownRef = useRef(null); // Reference to the dropdown container

    useEffect(() => {
        // Check if authentication state is available
        if (isAuthenticated !== undefined) {
            setIsLoading(false);
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
    }, [isAuthenticated]); // Re-run this when `isAuthenticated` changes

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
        // Show a minimal loading indicator instead of nothing
        return (
            <div className="flex items-center justify-center w-10 h-10">
                <div className="w-5 h-5 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
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
                                            onClick={logout}
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
                    Sign In
                </CustomButton>
            )}
        </div>
    );
}