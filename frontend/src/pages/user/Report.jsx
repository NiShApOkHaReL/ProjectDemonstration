

// Report.js
import React, { useState } from 'react';
import { Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Report.css'; // Import your CSS file for styling

const ReportPart1 = () => {
  const [category, setCategory] = useState('education');
  const [problem, setProblem] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [emergencyStatus, setEmergencyStatus] = useState('notemer');
  const navigate = useNavigate();
  return (
    <div className="max-w-lg mx-auto p-4 border border-gray-300 rounded">
      <h2 className="text-2xl mb-4">Report Part 1</h2>
      <div className="mb-4">
        <label htmlFor="problemcat" className="block text-xl mb-2">
          Choose the category
        </label>
        <select
          name="problemcat"
          id="problemcat"
          className="h-14 w-80 rounded-md m-3 border-gray-400 border-2"
        >
          <option value="education">Education</option>
          <option value="infrastructures">Infrastructures</option>
          <option value="electricity">Electricity</option>
          <option value="agriculture">Agriculture </option>
          <option value="land use">Land Use</option>
          <option value="health">Health</option>
          <option value="water supply">Water Supply</option>
          <option value="drainage">Drainage</option>
          <option value="culture and religion">Culture and Religion</option>
          <option value="Security">Security</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className="flex justify-center items-center">
        <textarea
          id="problem"
          name="problem"
          placeholder="Explain your problem here"
          className="h-20 w-11/12  rounded-md m-3 border-gray-400 border-2"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label className="text-xl m-3" htmlFor="imageFile">
          Insert Image
        </label>{' '}
        <br />
        <input
          type="file"
          name="imageFile"
          id="imageFile"
          className="text-xl m-3"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </div>
      <div>
        
        <label htmlFor="emer" className="text-xl m-3">
          Emergency Status:
        </label>
        <select
          name="emer"
          id="emer"
          className="h-14 w-80 rounded-md m-3 border-gray-400 border-2"
        >
          <option value="notemer">Not emergency</option>
          <option value="emergency">High Emergency</option>
          onChange={(e) => setEmergencyStatus(e.target.value)}
        </select>
      </div>
      <Link to="part2" className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </Link>
    </div>
  );
};

const ReportPart2 = () => {
  // ... (existing JSX for ReportPart2)

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('problem', problem);
      formData.append('imageFile', imageFile);
      formData.append('emergencyStatus', emergencyStatus);

      const response = await fetch('http://localhost:4000/api/report', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Report submitted successfully!');
        navigate('/success'); // Redirect to a success page or another route
      } else {
        const errorData = await response.json();
        console.error('Report submission failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during report submission:', error.message);
    }
  };

  const mapRef = React.useRef(null);
  const [pinCoordinates, setPinCoordinates] = useState({ lat: 0, lng: 0 });

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPinCoordinates({ lat, lng });
  };

  React.useEffect(() => {
    // Initialize the map only if it doesn't exist
    if (!mapRef.current) {
      const mapInstance = L.map('map').setView([28.3949, 84.1240], 7);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstance);

      mapRef.current = mapInstance;
    }

    const map = mapRef.current;

    // Cleanup function to remove the map when the component unmounts
    return () => {
      if (!map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 border border-gray-300 rounded">
      <h2 className="text-2xl mb-4">Report Part 2</h2>
      <div className="mb-4">
        <p className="text-xl mb-2">Pinpoint your location on the map:</p>
        <div
          id="map"
          className="h-64 w-full rounded-md border-gray-400 border-2 mb-4"
          onClick={handleMapClick}
        ></div>
        {pinCoordinates.lat !== 0 && pinCoordinates.lng !== 0 && (
          <p className="text-xl mb-2">
            Latitude: {pinCoordinates.lat}, Longitude: {pinCoordinates.lng}
          </p>
        )}
      </div>
      <Link to="/Report" className="bg-blue-500 text-white px-4 py-2 rounded">
        Back to Part 1
      </Link>

      <Link to="/success"
        onClick={handleFormSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </Link>
    </div>
  );
};



const Report = () => {
  

 
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Report Page</h1>
      <Routes>
        <Route path="/" element={<ReportPart1 />} />
        <Route path="/part2" element={<ReportPart2 />} />
      </Routes>
     
    </div>
  );
};

export default Report;
