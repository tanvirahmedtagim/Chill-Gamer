import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`sticky mt-6 top-[100vh] ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 text-center sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          <div className="flex flex-col justify-between items-center mb-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-12">
                <img
                  src={logo}
                  alt="Chill Gamer Logo"
                  className="h-full w-full"
                />
              </div>
              <p className="text-lg mt-2">A Game Review Application</p>
              <div className="flex space-x-6  text-2xl">
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">About</h4>
            <ul className="flex flex-col gap-1 text-lg text-gray-500 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Support</h4>
            <ul className="flex flex-col gap-1 text-lg text-gray-500 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Help Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Release Updates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Platform</h4>
            <ul className="flex flex-col gap-1 text-lg text-gray-500 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Terms & Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Contact</h4>
            <ul className="flex flex-col gap-1 text-lg text-gray-500 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Send a Message
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Request a Quote
                </Link>
              </li>
              <li>+123-456-7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-sm mt-8">
          <p>
            &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
