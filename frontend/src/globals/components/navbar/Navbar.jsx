import React, { useState } from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'google-fonts';

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
    <nav className="bg-purple-600 p-3 md:p-9">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl font-serif">
  Smart Municipality
</div>
        <div className="hidden md:flex space-x-4">
          <ButtonLink to="/" label="Home" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-full transition-all duration-300"/>
          <ButtonLink to="/Report" label="Report Problem" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-full transition-all duration-300"/>
          <ButtonLink to="/ViewReport" label="View Your Report" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-full transition-all duration-300"/>
          <ButtonLink to="/help" label="Help" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-full transition-all duration-300"/>
          <ButtonLink
            to="/logout"
            label="Logout"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-full transition-all duration-300"
          />
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
              <ButtonLink to="/" label="Home" />
              <ButtonLink to="/Report" label="Report Problem" />
              <ButtonLink to="/ViewReport" label="View Your Report" />
              <ButtonLink to="/help" label="Help" />
              <ButtonLink
                to="/logout"
                label="Logout"
                className="text-white hover:underline"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const ButtonLink = ({ to, label, className }) => {
  const history = useNavigate();

  const navigateTo = (path) => {
    history(path);
  };

  return (
    <button
      onClick={() => navigateTo(to)}
      className={`text-white ${className}`}
    >
      {label}
    </button>
  );
};

export default Navbar;
