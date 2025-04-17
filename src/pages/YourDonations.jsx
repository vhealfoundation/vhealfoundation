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
            setDonations(data.data);
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
          className="overflow-x-auto rounded-xl shadow-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <table className="min-w-full bg-white border border-gray-200 table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Beneficiary</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <motion.tr
                  key={donation._id}
                  className="transition-all hover:bg-orange-50 cursor-pointer border-b border-gray-200"
                  variants={itemVariants}
                >
                  <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-orange-200">
                      <img
                        src={donation?.beneficiary?.image || "https://via.placeholder.com/40"}
                        alt="Beneficiary"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium">{donation?.beneficiary?.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: '#fd8917' }}>₹{donation?.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(donation?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`${
                        donation.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : donation.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      } px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {donation.status}
                    </span>
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
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-primary mb-2">No Donations Yet</h3>
          <p className="text-gray-600">You haven't made any donations yet. Your generosity can make a difference!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Layout(YourDonations);
