import React from 'react'
import Navbar from '../globals/Navbar'
import Footer from '../globals/Footer'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from 'react-router-dom';



const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:4000/api/users");
    if (response.status === 200) {
      setUsers(response.data.data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  

  return (
    <>
      <Navbar />
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3">Citizenship Number</th>
                  <th className="px-4 py-3">Phone Number</th>
                  <th className="px-4 py-3">Role</th>
                  
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map((users) => (
                  <tr className="text-gray-700" key={users._id}>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-black">{users.userName}</p>
                          <p className="text-xs text-gray-600">{users.Role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">{users.userEmail}</td>
                   
                    <td className="px-4 py-3 text-sm border">{users.userAddress}</td>
                    <td className="px-4 py-3 text-sm border">{users.citizenshipNumber}</td>
                    <td className="px-4 py-3 text-sm border">{users.userPhoneNumber}</td>
                    <td className="px-4 py-3 text-sm border">{users.Role}</td>


                    
                     
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ViewUsers;