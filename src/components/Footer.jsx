import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"; // Make sure to import your logo

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-10 pb-6 relative overflow-hidden z-10 mt-auto">
      {/* Floating Blur Effects */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-700 opacity-30 blur-3xl rounded-full"></div>

      <div className=" mx-auto px-6 md:px-24 relative z-10">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2" >
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-[52px] md:h-[52px]" />
          <div>
            <p className="font-bold text-white text-lg md:text-xl whitespace-nowrap">V HEAL FOUNDATION</p>
            <div className="flex items-center gap-1">
              <span className="w-4 h-[1px] bg-white/80"></span>
              <p className="text-white/80 text-[8.5px] md:text-[9px] italic">Enriching, Empowering & Enduring Lives</p>
              <span className="w-4 h-[1px] bg-white/80"></span>
            </div>
          </div>
        </Link>
            <p className="text-white/80 text-sm leading-relaxed text-justify">
            V Heal Foundation is a fiduciary association of Mental Health and Social Work professionals passionate to promote mental health and wellbeing though counselling, training and coaching. The foundation also fosters to uplift the underprivileged and undeserved in prison and after their release.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                // { icon: FaFacebookF, link: "https://www.facebook.com/organization" },
                { icon: FaWhatsapp, link: "https://api.whatsapp.com/send?phone=919840050175" },
                // { icon: FaInstagram, link: "https://instagram.com/organization" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full text-white text-xl hover:bg-white/20 transition duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold bg-white/10 p-2 rounded-md inline-block mb-4">Quick Links</h5>
            <ul className="grid grid-cols-1 gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Happenings", path: "/happenings" },
                { name: "Accolades", path: "/accolades" },
                { name: "Testimonials", path: "/testimonials" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white transition duration-300 flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        {/*   <div>
            <h5 className="text-lg font-bold bg-white/10 p-2 rounded-md inline-block">Our Organization</h5>
            <div className="flex gap-4 mt-4">
              {[
                { icon: FaFacebookF, link: "https://www.facebook.com/organization" },
                {icon:  FaWhatsapp, link: "https://api.whatsapp.com/send?phone=919840050175"},
                { icon: FaInstagram, link: "https://instagram.com/organization" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full text-white text-xl hover:bg-white/20 transition duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div> */}

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold bg-white/10 p-2 rounded-md inline-block mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li>
                <p className="flex items-start gap-2">
                  <span className="text-white/60">Email:</span>
                  <a href="mailto:vhealfoundation@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    vhealfoundation@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="flex items-start gap-2">
                  <span className="text-white/60">Phone:</span>
                  <a href="tel:+919840050175" className="text-white/80 hover:text-white transition-colors">
                    +91 9840050175, 
                  </a>
                  <a href="tel:+918056041136" className="text-white/80 hover:text-white transition-colors">
                    +91 8056041136
                  </a>
                </p>
              </li>
              <li>
                <p className="flex items-start gap-2">
                  <span className="text-white/60">Address:</span>
                  <span className="text-white/80">
                    Old No: 18/A/1, New No: 6/A/1, Zackaria Colony, 2nd Street, Choolaimedu, Chennai, 600 094
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm border-t border-white/20 pt-4">
          <p>© 2025 V Heal Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}