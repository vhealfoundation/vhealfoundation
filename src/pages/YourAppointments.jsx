import React, { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import toast from "react-hot-toast";
import Layout from "../hoc/Layout";
import Loader from '../components/Loader';
import { motion } from "framer-motion";
import { FaCalendarCheck, FaCalendarTimes } from 'react-icons/fa';


const YourAppointments = () => {
    const { getUser } = useKindeAuth();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = getUser();
    const email = user?.email;

    useEffect(() => {
        if (email) {
            const fetchAppointments = async () => {
                try {
                    const response = await fetch(
                        `${process.env.REACT_APP_BACKEND_URL}/appointments/email/${email}`
                    );
                    const data = await response.json();
                    if (data.success) {
                        setAppointments(data.data);
                    } else {
                        toast.error("No appointments found for this email.");
                    }
                } catch (error) {
                    console.error("Error fetching appointments:", error);
                    toast.error("Failed to fetch appointments.");
                } finally {
                    setLoading(false);
                }
            };

            fetchAppointments();
        }
    }, [email]);

    if (loading) {
        return <Loader/>;
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="text-center mb-10 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex text-sm font-semibold py-1 px-3 m-2 rounded-full mb-4"
                    style={{ color: '#fd8917', backgroundColor: 'rgba(253, 137, 23, 0.15)' }}
                >
                    Your Scheduled Sessions
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl font-bold text-primary mb-3"
                >
                    Your Appointments
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-24 h-1 bg-orange-500 mx-auto mb-6"
                ></motion.div>
            </div>

            {appointments.length > 0 ? (
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {appointments.map((appointment, index) => (
                        <motion.div
                            key={appointment._id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-primary to-orange-500 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">
                                                Appointment
                                            </h3>
                                            <p className="text-white/80 text-xs">Counselling Session</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white/80 text-xs">#{index + 1}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 space-y-4">
                                {/* Date */}
                                <div className="text-center">
                                    <p className="text-lg font-bold text-primary">
                                        {new Date(appointment.date).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {new Date(appointment.date).getFullYear()}
                                    </p>
                                </div>

                                {/* Time */}
                                <div className="flex items-center justify-center space-x-2 text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-lg font-semibold text-orange-600">
                                        {appointment.time}
                                    </span>
                                </div>

                                {/* Status */}
                                <div className="flex justify-center">
                                    {appointment.completed === true ? (
                                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Completed
                                        </span>
                                    ) : (
                                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            Pending
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="bg-gray-50 px-4 py-3">
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>Appointment ID</span>
                                    <span className="font-mono">{appointment?._id?.slice(-8)}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-16 px-4 rounded-xl bg-gray-50 shadow-md"
                >
                    <div className="text-5xl mb-4">📅</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">No Appointments Yet</h3>
                    <p className="text-gray-600">You don't have any scheduled appointments. Book a session to get started!</p>
                </motion.div>
            )}
        </div>
    );
};

export default Layout(YourAppointments);