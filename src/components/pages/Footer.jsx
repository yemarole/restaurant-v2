import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D3748] text-[#F7FAFC] py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-[#F7FAFC] mb-4 font-serif">
              About Us
            </h3>
            <p className="text-[#CBD5E0]">
              At mycoBrew, we craft delicious, functional beverages designed to
              fuel your mind, body, and soul. Join us in embracing nature's
              best.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-[#F7FAFC] mb-4 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold text-[#F7FAFC] mb-4 font-serif">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-[#CBD5E0] flex items-center space-x-2 hover:text-[#38A169] transition duration-300">
                <FaMapMarker className="text-[#38A169]" />
                <span>123 Mushroom Lane, London, UK</span>
              </li>
              <li className="text-[#CBD5E0] flex items-center space-x-2 hover:text-[#38A169] transition duration-300">
                <FaPhone className="text-[#38A169]" />
                <span>+44 123 456 7890</span>
              </li>
              <li className="text-[#CBD5E0] flex items-center space-x-2 hover:text-[#38A169] transition duration-300">
                <FaEnvelope className="text-[#38A169]" />
                <span>info@mycobrew.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBD5E0] hover:text-[#38A169] transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#4A5568] mt-8 pt-8 text-center">
          <p className="text-[#CBD5E0]">
            &copy; {new Date().getFullYear()} mycoBrew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
