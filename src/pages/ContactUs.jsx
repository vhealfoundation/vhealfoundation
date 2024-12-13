import React from 'react';
import Layout from "../hoc/Layout";
import ContactCard from '../components/ContactCard';
import ContactLeft from '../components/ContactLeft';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // For the interactive map
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles
import L from 'leaflet';

// Custom Map Marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png', // Replace with a custom marker icon if needed
  iconSize: [32, 32],
});

const Contact = () => {
  return (
    <div className="mt-16 md:mx-44">
      <div className='flex flex-col items-center gap-4 '>

        <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
          Find Us Here
        </h2>
        <div className='w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90'></div>
      </div>

      <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>

        {/* Map Section */}
        <div className="w-full md:w-4/5 mx-auto p-4 md:p-8">

          <div className="rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={[13.0850, 80.2101]} // Replace with coordinates relevant to your location
              zoom={60}
              style={{ height: "400px", width: "100%", zIndex: 0 }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={[13.0850, 80.2101]} icon={customIcon}>
                <Popup>
                  Our Location <br /> Helping Former Inmates.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        {/* Additional CTA Section */}
        <div className=" w-full md:w-2/5 px-4 md:mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            Empowering Lives, One Step at a Time
          </h3>
          <p className="text-gray-600 mt-4">
            Join us in our mission to provide guidance and resources to individuals rebuilding their lives.
          </p>
          <button className="mt-6 bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-6 rounded-lg shadow-lg hover:from-green-600 hover:to-teal-500 transition duration-300">
            Get Involved
          </button>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="mt-8 max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="">
          <ContactLeft />
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-lg shadow-lg ">
          <ContactCard />
        </div>
      </div>


    </div>
  );
};

export default Layout(Contact);
