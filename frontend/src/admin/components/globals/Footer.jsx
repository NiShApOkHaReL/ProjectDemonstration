import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-indigo-300 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <Link className="hover:text-indigo-300" to="/admin">
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link className="hover:text-indigo-300" to="/admin/ViewUsers">
                View Users
              </Link>
            </li>
            <li className="my-2">
              <Link className="hover:text-indigo-300" to="/admin/adminviewreport">
                View Reports
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-indigo-300 mb-4">Componentity</h3>
          <p className="text-indigo-300 text-sm mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-indigo-300 font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-300" href="#">
                XXX XXXX, Bharatpur Metropolitan City, Nepal
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-300" href="#">
                smartmunicipality@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-5 text-center">© Copyright 2023. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
