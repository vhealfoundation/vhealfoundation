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
                    className="overflow-x-auto rounded-xl shadow-xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <table className="min-w-full bg-white border border-gray-200 table-auto">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Time</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <motion.tr
                                    key={appointment._id}
                                    className="transition-all hover:bg-orange-50 cursor-pointer border-b border-gray-200"
                                    variants={itemVariants}
                                >
                                    <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-primary">
                                        {new Date(appointment.date).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium" style={{ color: '#fd8917' }}>
                                        {appointment.time}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex items-center">
                                            {appointment.completed === true ? (
                                                <>
                                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                                        <FaCalendarCheck className="mr-1" /> Completed
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                                        <FaCalendarTimes className="mr-1" /> Pending
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
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