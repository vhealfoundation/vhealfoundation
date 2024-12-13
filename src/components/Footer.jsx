import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between mb-8">
          {/* Navigation Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul>
              <li>
                <Link to="/" className="hover:text-primary block mb-2">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary block mb-2">About</Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-primary block mb-2">Stories</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-primary block mb-2">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary block mb-2">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Contact Us</h5>
            <ul>
              <li className="mb-2">
                <p>Email: <a href="mailto:info@example.com" className="hover:text-primary">info@example.com</a></p>
              </li>
              <li className="mb-2">
                <p>Phone: <a href="tel:+1234567890" className="hover:text-primary">+123 456 7890</a></p>
              </li>
              <li className="mb-2">
                <p>Address: 1234 Charity St, City, Country</p>
              </li>
            </ul>
          </div>

          {/* Organization Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Our Organization</h5>
            <ul>
              <li>
                <a href="https://www.organization-website.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary block mb-2">
                  Organization Website
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/organization" target="_blank" rel="noopener noreferrer" className="hover:text-primary block mb-2">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/organization" target="_blank" rel="noopener noreferrer" className="hover:text-primary block mb-2">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/organization" target="_blank" rel="noopener noreferrer" className="hover:text-primary block mb-2">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Section (optional) */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold text-lg mb-4">Newsletter</h5>
            <p className="text-sm mb-4">Subscribe to our newsletter to stay updated on our latest activities and news.</p>
            <form action="#" method="POST" className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-black p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="p-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:ring-2 focus:ring-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm">
          <p>© 2024 My Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
