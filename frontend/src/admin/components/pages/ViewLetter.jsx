import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../globals/Navbar';
import Footer from '../globals/Footer';

const ViewLetter = () => {
  const { id } = useParams();
  const [letterData, setLetterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/getreport/${id}`);
        const result = await response.json();

        const data = result.data;
        console.log(data);
        setLetterData(data);
      } catch (error) {
        console.error('Error fetching letter data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!letterData) {
    // Loading state or error handling
    return <p>Loading...</p>;
  }

  const {
    userId: { userEmail, userName, userPhoneNumber, citizenshipNumber, userAddress },
    emergencyStatus,
    problemCategory,
    problemAddress,
    createdAt,
    problemDescription,
  } = letterData;

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col justify-center">
      <Navbar />

      <div className="container mx-auto p-4">
        {/* Your letter template with dynamically populated values */}
        <div className="my-4">
          <strong>{userName}</strong>
          <p>{userAddress}</p>
          <p>{userEmail}</p>
          <p>{userPhoneNumber}</p>
          <p>{createdAt}</p>
        </div>

        <h1 className="text-2xl font-bold mb-4">
          Subject: Urgent Attention Required - {problemCategory} at {problemAddress}
        </h1>

       

        <p className="mb-4">
          Dear Sir/Madam,
        </p>

        <p className="mb-4">
          I hope this letter finds you well. My name is {userName}, and I am a resident of {userAddress}. I am writing to bring to your attention a matter of great concern that requires immediate action.
        </p>

        <p className="mb-4">
          Problem Category: {problemCategory}
        </p>

        <p className="mb-4">
          Problem Description: {problemDescription}
        </p>

        <p className="mb-4">
          Address of the Problem: {problemAddress}
        </p>

        <p className="mb-4">
          I understand the challenges that managing municipal affairs may present, and I appreciate the hard work and dedication of the Municipality in ensuring the well-being of its residents. I trust that you will treat this matter with the urgency it deserves and take prompt action to resolve the issue.
        </p>

        <p className="mb-4">
          If you require any further information or clarification, please feel free to contact me at {userPhoneNumber} or {userEmail}.
        </p>

        <p className="mb-4">
          Thank you for your attention to this matter.
        </p>

        <p className="mb-4">
          Sincerely,
        </p>
{userName}
        <Footer />
      </div>
    </div>
  );
};

export default ViewLetter;
