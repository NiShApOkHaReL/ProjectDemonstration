import React from 'react'
import Navbar from '../globals/Navbar'
import Footer from '../globals/Footer'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from 'react-router-dom';



const AdminViewReport = () => {
  const [problems, setProblems] = useState([]);


  const fetchProblems = async () => {
    const response = await axios.get("http://localhost:4000/api/getReports");
    if (response.status === 200) {
      setProblems(response.data.data);
    }
  };

  useEffect(() => {
    fetchProblems();
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
                <th className="px-4 py-3">Reported By</th>
                  <th className="px-4 py-3">Problem Description</th>
                  <th className="px-4 py-3">Problem Category</th>

                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3">Latitude</th>
                  <th className="px-4 py-3">Longitude</th>
                  <th className="px-4 py-3">View on Map</th>
                  <th className="px-4 py-3">View Letter</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {problems.map((problem) => (
                  <tr className="text-gray-700" key={problem._id}>
                  <td className="px-4 py-3 text-md font-semibold border">{problem.userId.userName}</td>

                  <td className="px-4 py-3 text-md font-semibold border">{problem.problemDescription}</td>

                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-black">{problem.problemCategory}</p>
                          <p className="text-xs text-gray-600">{problem.emergencyStatus}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                        {problem.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">{problem.problemAddress}</td>
                    <td className="px-4 py-3 text-sm border">{problem.latitude}</td>
                    <td className="px-4 py-3 text-sm border">{problem.longitude}</td>
                    <td className="px-4 py-3 text-sm border">
                      <Link
                        to={{
                          pathname: `/admin/viewonmap/${problem._id}`,
                          
                        }}
                        className="text-blue-500"
                      >
                        View On Map
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      <Link
                        to={{
                          pathname: `/admin/viewletter/${problem._id}`,
                          
                        }}
                        className="text-blue-500"
                      >
                        View Letter
                      </Link>
                    </td>

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

export default AdminViewReport;