import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "google-fonts";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const history = useNavigate();

  const navigateTo = (path) => {
    history(path);
  };

  return (
    <nav className="bg-gray-800 p-3 md:p-9">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl font-serif">
          Smart Municipality
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="bg-transparent hover:bg-gray-900 text-white font-bold py-2 px-4 border-fb923c-dark border-2 rounded-full transition-all duration-300"
            >
            Home
          </Link>
          <Link
            to="/Report"
            className="bg-transparent hover:bg-gray-900 text-white font-bold py-2 px-4 border-fb923c-dark border-2 rounded-full transition-all duration-300"
          >
            Report Problem
          </Link>
          <Link
            to="/ViewReport"
            className="bg-transparent hover:bg-gray-900 text-white font-bold py-2 px-4 border-fb923c-dark border-2 rounded-full transition-all duration-300"
          >
            View Reports
          </Link>
          <Link
            to="/help"
            className="bg-transparent hover:bg-gray-900 text-white font-bold py-2 px-4 border-fb923c-dark border-2 rounded-full transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/logout"
            className="bg-transparent hover:bg-gray-900 text-white font-bold py-2 px-4 border-fb923c-dark border-2 rounded-full transition-all duration-300"
          >
            Logout
          </Link>
        </div>
        {/* Add a responsive menu button for small screens */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="flex flex-col items-center mt-2">
              
              <Link to="/">Home</Link>
              <Link to="/Report">Report Problem</Link>
              <Link to="/ViewReport">View Your Report</Link>
              <Link to="/help">Help</Link>
              <Link to = "/logout" className="text-white hover:underline">Logout</Link>
              
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;