import React from "react";

const ContactLeft = () => {
  return (
    <div className="bg-tertiary rounded-lg space-y-8 p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Why Reach Out to Us?</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="mr-4 text-primary text-2xl">✔️</span>
          <div>
            <h3 className="text-xl font-semibold text-white">Learn About Our Mission</h3>
            <p className="text-gray-300">
              Discover how we’re making a difference and how you can be part of our mission.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-4 text-primary text-2xl">✔️</span>
          <div>
            <h3 className="text-xl font-semibold text-white">Volunteer Opportunities</h3>
            <p className="text-gray-300">
              Find out how you can lend your time and skills to support our cause.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-4 text-primary text-2xl">✔️</span>
          <div>
            <h3 className="text-xl font-semibold text-white">Make a Donation</h3>
            <p className="text-gray-300">
              Get details on how to contribute and help us achieve our goals.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-4 text-primary text-2xl">✔️</span>
          <div>
            <h3 className="text-xl font-semibold text-white">Ask About Our Events</h3>
            <p className="text-gray-300">
              Stay informed about upcoming events and ways to participate.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactLeft;
