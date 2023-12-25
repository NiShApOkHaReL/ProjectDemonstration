import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




const handleMapClick = (e, setPinCoordinates) => {
  const { lat, lng } = e.latlng;
  setPinCoordinates({ lat, lng });
};
const Report = () => {
  const mapRef = useRef(null);
  const [pinCoordinates, setPinCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (!mapRef.current) {
      const mapInstance = L.map('map').setView([28.3949, 84.1240], 7);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstance);

      mapRef.current = mapInstance;
    }

    const map = mapRef.current;

    return () => {
      if (!map) {
        map.remove();
      }
    };
  }, []);

  const handleEmergencyChange = (event) => {
    // Your implementation for handling emergency change
  };


  return (

    <div className="w-full md:w-2/3 lg:w-1/3 xl:w-1/3 mx-auto mt-4 mb-4">
      <div className="p-6 border border-gray-600 sm:rounded-md">
        <form
          method="POST"
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
         <div>
          <label className="block mb-2 m-0" htmlFor="problemcat">Choose the category  </label>
              <select
              name="problemcat"
              id="problemcat"
              className="h-10  block
              w-full
              mt-1 rounded-md m-0 mb-2 border-gray-400 border-2"
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
               {/* Bug Description Textarea */}
          <label className="block mb-6">
            <span className="text-gray-700">Problem Description</span>
            <textarea
             id="problem"
             name="problem"
              className="
                block
                w-full
                mt-1
                rounded-md m-0 mb-2 border-gray-400 border-2
              "
              rows="3"
              placeholder="Please add as much details as possible."
            ></textarea>
          </label>

          {/* Screenshot Input */}
          <label className="block mb-6">
            <span className="text-gray-700">Problem Image</span>
            <input
              name="imageFile"
              type="file"
              className="
                block
                w-full
                mt-1
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
            />
          </label>
 {/* Emergency Status */}
          <div>
            <label htmlFor="emer" className="block mb-2 m-0">
              Emergency Status:
            </label>
            <select
              name="emer"
              id="emer"
              className="h-10 block w-full mt-1 rounded-md m-0 mb-2 border-gray-400 border-2"
              onChange={handleEmergencyChange}
            >
              <option value="notemer">Not emergency</option>
              <option value="emergency">High Emergency</option>
            </select>
          </div>

          {/* Problem Location */}
          <div>
            <span className="text-gray-700">Problem Location</span>
            <div className="flex items-center">
              <input
                name="proadd"
                type="text"
                className="h-10 block w-full mt-1 rounded-md m-0 mb-2 border-gray-400 border-2"
              />
              
            </div>
          </div>


           {/* Choose Latitude and Longitude from map */}
           <div>
            <span className="text-gray-700">
              Choose Latitude and Longitude from the map
            </span>
            {/* Map Container */}
            <div id="map" style={{ height: '300px', width: '100%' }} />
          </div>


           {/* Submit Button */}
           <div className="mb-6 mt-4">
            <button
              type="submit"
              className="
                h-10
                px-5
                text-indigo-100
                bg-gray-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:text-indigo-300 
               
              "
            >
              Submit
            </button>
          </div>

         
        </form>
      </div>
    </div>
   
  );
};

export default Report;
