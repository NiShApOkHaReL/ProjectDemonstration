import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./App.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
let url, text;
 
 
function App() {
 
  const navigate = useNavigate()
  const [isNavOpen, setNavOpen] = useState(false);
  const token = localStorage.getItem("token");
  if(token){
     url = 'logout'
     text = "Log Out"
  }
  else{
     url = 'login'
    text = "Log In"
  }
 
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
 
  // Define a function to handle navigation to different routes
 
    const navigateTo = (path) => {
      if (path === "/logout") {
        // Handle logout by removing token and navigating to "/"
        localStorage.removeItem("token");
       
      } }
 
 
  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
      <Link
        to="/"
        className="p-2 mr-4 inline-flex items-center"
      >
        {/* SVG code here */}
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Smart Municipality
        </span>
      </Link>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        onClick={toggleNav}
      >
        <i className="material-icons">menu</i>
      </button>
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } lg:inline-flex lg:flex-grow lg:w-auto w-full`}
        id="navigation"
      >
        {/* Navigation links */}
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          {/* Replace the '#' with your actual link URLs */}
          {[
            { to: "/", text: "Home" },
            { to: "/Report", text: "Report Problem" },
            { to: "/ViewReport", text: "View Reports" },
            { to: "/AboutUs", text: "About Us" },
            { to: `/${url}`,  text: `${text}` },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-indigo-300"
              onClick={() => navigateTo(link.to)}
            >
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
 
 
 
export default App;