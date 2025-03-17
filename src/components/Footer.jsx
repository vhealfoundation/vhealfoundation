import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white pt-10 pb-6 relative overflow-hidden">
      {/* Floating Blur Effects */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-700 opacity-30 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold bg-white/10 p-2 rounded-md inline-block">Quick Links</h5>
            <ul className="mt-4">
              {["Home", "About", "Stories", "Gallery"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block mb-2 text-white/80 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold bg-white/10 p-2 rounded-md inline-block">Contact Us</h5>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Email: <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a></p>
              </li>
              <li className="mb-2">
                <p>Phone: <a href="tel:+1234567890" className="hover:text-white">+123 456 7890</a></p>
              </li>
              <li className="mb-2">
                <p>Address: Old No: 18/A/1, New No: 6/A/1, Zackaria Colony, 2nd Street, Choolaimedu, Chennai, 600 094, </p>
              </li>
            </ul>
          </div>

          {/* Organization Links */}
          <div>
            <h5 className="text-lg font-bold bg-white/10 p-2 rounded-md inline-block">Our Organization</h5>
            <div className="flex gap-4 mt-4">
              {[
                { icon: FaFacebookF, link: "https://www.facebook.com/organization" },
                { icon: FaTwitter, link: "https://twitter.com/organization" },
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
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-lg font-bold bg-white/10 p-2 rounded-md inline-block">Newsletter</h5>
            <p className="text-sm mt-4">Subscribe to our newsletter for updates.</p>
            <form onSubmit={handleSubmit} className="flex mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-l-md text-black p-2 w-full focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="p-2 bg-blue-400 text-white rounded-r-md hover:bg-blue-500 focus:ring-2 focus:ring-white/40"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm border-t border-white/20 pt-4">
          <p>© 2025 VHeal Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
