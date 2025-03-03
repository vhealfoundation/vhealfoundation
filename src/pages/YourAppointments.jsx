import React, { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import toast from "react-hot-toast";
import Layout from "../hoc/Layout";


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
        return <div className="text-center text-xl">Loading...</div>;
    }

    return (
        <div className="p-6">
            <h1 className="mt-12 text-3xl font-semibold mb-6 text-center text-blue-500">
                Your Appointments
            </h1>
            {appointments.length > 0 ? (
                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="min-w-full bg-white border border-gray-300 table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">S.No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Time</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <tr
                                    key={appointment._id}
                                    className="transition-all hover:bg-blue-50 cursor-pointer"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-700 border-b">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700 border-b">
                                        {new Date(appointment.date).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 border-b">
                                        {appointment.time}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 border-b">

                                        {appointment.completed === true ? "Completed" : "Pending"}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center text-xl text-gray-500">
                    No appointments found for this email.
                </div>
            )}
        </div>
    );
};

export default Layout(YourAppointments);