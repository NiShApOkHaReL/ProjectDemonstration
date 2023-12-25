import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
const ViewReport = () => {
  const [problems, setProblems] = useState([])
 
  const fetchProblems = async() =>{
    const response = await axios.get("http://localhost:4000/api/getReports")
    if(response.status == 200){
      setProblems(response.data.data)
    }
  }
  useEffect(()=>{
    fetchProblems()
  },[])


  return (
    <>
   
<section className="container mx-auto p-6 font-mono">
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Problem Category</th>
            <th className="px-4 py-3">Problem Description</th>            
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Address</th>
          </tr>
        </thead>
        <tbody className="bg-white">
     
{

          problems.map((problem)=>{
            return ( <>
              <tr className="text-gray-700">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  
                  <div>
                    <p className="font-semibold text-black">{problem.problemCategory}</p>
                    <p className="text-xs text-gray-600">{problem.emergencyStatus}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-md font-semibold border">{problem.problemDescription}</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> {problem.status} </span>
              </td>
              <td className="px-4 py-3 text-sm border">{problem.problemAddress}</td>
            </tr>
            
            </>
            )
          })
          
          
          }
          




         





    
        </tbody>
      </table>
    </div>
  </div>
</section>
</>
  )
}

export default ViewReport