import React, { useEffect, useState } from "react";
import Layout from "../hoc/Layout";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import toast from "react-hot-toast";

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
    return <div className="text-center text-xl">Loading...</div>; // Custom loading text
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-blue-500">
        Your Donations
      </h1>
      {donations.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">S.No</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Beneficiary</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr
                  key={donation._id}
                  className="transition-all hover:bg-blue-50 cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b flex items-center">
                    <img
                      src={donation?.beneficiary?.image || "https://via.placeholder.com/40"}
                      alt="Beneficiary"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    {donation?.beneficiary?.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">{donation?.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {new Date(donation?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    <span
                      className={`${
                        donation.status === "Paid"
                          ? "bg-green-500 text-white"
                          : donation.status === "Pending"
                          ? "bg-yellow-500 text-white"
                          : "bg-red-500 text-white"
                      } px-3 py-1 rounded-full text-xs`}
                    >
                      {donation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500">No donations found for this email.</div>
      )}
    </div>
  );
};

export default Layout(YourDonations);
