import React, { useEffect, useState } from "react";
import Layout from "../hoc/Layout";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const YourDonations = () => {
  const { getUser } = useKindeAuth();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = getUser();
  const email = user?.email;

  useEffect(() => {
    if (email) {
      const fetchDonations = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/donation/${email}`
          );
          const data = await response.json();

          if (data.success) {
            // Sort by createdAt descending (latest first)
            const sortedDonations = [...data.data].sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            setDonations(sortedDonations);
          } else {
            toast.error("No donations found for this email.");
          }
        } catch (error) {
          console.error("Error fetching donations:", error);
          toast.error("Failed to fetch donations.");
        } finally {
          setLoading(false);
        }
      };

      fetchDonations();
    }
  }, [email]);

  if (loading) {
    return <Loader />;
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
          Your Contribution History
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-primary mb-3"
        >
          Your Donations
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-orange-500 mx-auto mb-6"
        ></motion.div>
      </div>

      {donations.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {donations.map((donation, index) => (
            <motion.div
              key={donation._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-primary to-orange-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                      <img
                        src={donation?.beneficiary?.image || "https://via.placeholder.com/48"}
                        alt="Beneficiary"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        {donation?.beneficiary?.name}
                      </h3>
                      <p className="text-white/80 text-xs">Beneficiary</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-xs">Donation #{index + 1}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-4">
                {/* Amount */}
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">₹{donation?.amount}</p>
                  <p className="text-gray-500 text-sm">Donation Amount</p>
                </div>

                {/* Date */}
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">
                    {new Date(donation?.createdAt).toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* Status */}
                <div className="flex justify-center">
                  <span
                    className={`${
                      donation.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : donation.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    } px-4 py-2 rounded-full text-sm font-medium flex items-center`}
                  >
                    {donation.status === "Paid" && (
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {donation.status === "Pending" && (
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    )}
                    {donation.status !== "Paid" && donation.status !== "Pending" && (
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    {donation.status}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-gray-50 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Transaction ID</span>
                  <span className="font-mono">{donation?._id?.slice(-8)}</span>
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
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-primary mb-2">No Donations Yet</h3>
          <p className="text-gray-600">You haven't made any donations yet. Your generosity can make a difference!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Layout(YourDonations);