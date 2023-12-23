
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Smart Municipality</div>
        <div className="space-x-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/report-problem" label="Report Problem" />
          <NavLink to="/view-report" label="View Your Report" />
          <NavLink to="/help" label="Help" />
          <button className="text-white" onClick={() => console.log('Logout clicked')}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => {
  return (
    <a href={to} className="text-white hover:underline">
      {label}
    </a>
  );
};

export default Navbar;
