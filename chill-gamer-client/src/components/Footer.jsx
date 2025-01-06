import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={`sticky  top-[100vh] md:mt-14 mt:8 `}>
      <footer className="grid md:grid-cols-2 bg-neutral text-neutral-content ">
        <div className="w-full mx-auto bg-[#1F2937] flex flex-col justify-center items-center py-8 lg:p-24 gap-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-20">
                <img
                  src={logo}
                  alt="Chill Gamer Logo"
                  className="h-full w-full"
                />
              </div>
              <div className="font-bold text-4xl">
                <span className="text-orange-500">C</span>HILL <br /> GAMER
              </div>
            </div>
            <p className="text-2xl mt-2 text-orange-500">
              A Game Review Application
            </p>
            <div className="flex gap-8 text-2xl">
              <Link
                to="/"
                className="hover:text-orange-500 transition-all duration-300"
              >
                <FaFacebook size={45} />
              </Link>
              <Link
                to="/"
                className="hover:text-orange-500 transition-all duration-300"
              >
                <FaTwitter size={45} />
              </Link>
              <Link
                to="/"
                className="hover:text-orange-500 transition-all duration-300"
              >
                <FaInstagram size={45} />
              </Link>
              <Link
                to="/"
                className="hover:text-orange-500 transition-all duration-300"
              >
                <FaLinkedin size={45} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full p-24 bg-[#111827]">
          <h4 className="font-bold text-4xl mb-2">Home</h4>
          <ul className="flex items-center flex-col gap-3 text-lg text-gray-500 font-medium">
            <li>
              <Link
                to="/reviews"
                className="hover:text-orange-500 transition-all duration-300"
              >
                All Reviews
              </Link>
            </li>
            <li>
              <a
                href="#highestRated"
                className="hover:text-orange-500 transition-all duration-300"
              >
                Highest Rated
              </a>
            </li>
            <li>
              <a
                href="#lowestRated"
                className="hover:text-orange-500 transition-all duration-300"
              >
                Lowest Rated
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-all duration-300"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div>
        <footer className="footer footer-center bg-black text-white p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Tanvir Ahmed
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
