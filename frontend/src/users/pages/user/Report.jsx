import React, { useState, useRef, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './Report.css';
import Navbar from "../../globals/components/navbar/Navbar"
import Footer from '../../globals/components/footer/Footer';


 
const center = {
  lat: 28.3949,
  lng: 84.1240,
};
 
 
 
function DraggableMarker({ updateLatLng }) {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
 
  const markerRef = useRef(null);
 
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          console.log(marker.getLatLng());
          var latlng = marker.getLatLng();
          var latitude = latlng.lat
          var longitude = latlng.lng
           
          // Update the latitude and longitude using the prop function
          updateLatLng(latitude, longitude);
         
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
 
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);
 
 
 
  return (
 
   
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  );
}
 
const Report = () => {
  const navigate = useNavigate()
 
  // Update latitude and longitude when marker is dragged
  const updateLatLng = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
  };
 
 
const [image, setImage] = useState("")
 
const imageInputHandler = (e)=>{
     setImage(e.target.files[0])
}
console.log(image)
 
  // Add state for latitude and longitude
  const [latitude, setLatitude] = useState(center.lat);
  const [longitude, setLongitude] = useState(center.lng);
 
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
 
    // Extract values from the form
    const problemDescription = event.target.elements.problem.value;
    const problemCategory = event.target.elements.problemcat.value;
    const emergencyStatus = event.target.elements.emer.value;
    const problemLocation = event.target.elements.proadd.value;
   
 
   
    // Create FormData and add form values
    const formData = new FormData();
    formData.append('problemDescription', problemDescription);
    formData.append('problemCategory', problemCategory);
    formData.append('emergencyStatus', emergencyStatus);
    formData.append('problemAddress', problemLocation);
    formData.append('image',image);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
 
 
   
 
    try {
      const response = await fetch('http://localhost:4000/api/report', {
        method: 'POST',
        body: formData,
        headers: {
         
          "Authorization":  `Bearer ${localStorage.getItem('token')}`
        }
      });
 
      if (response.status == 200) {
        // Handle successful submission, e.g., show a success message
        console.log('Report submitted successfully!');
        alert("Report submitted successfully")
 
      }
   
 
       else {
        // Handle errors, e.g., show an error message
        console.error('Error submitting report:', response.statusText);
       
      }
    } catch (error) {
     
      alert("You must log in first")
      navigate("/login")
      console.error('Error submitting report:', error.message);
    }
  };
 
 
 
 
  return (
    <div>
      <Navbar/>
    <div className="w-full md:w-2/3 lg:w-1/3 xl:w-1/3 mx-auto mt-4 mb-4">
      <div className="p-6 border border-gray-600 sm:rounded-md">
        <form
          method="POST"
          onSubmit={handleSubmit}
         
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
              onChange={imageInputHandler}
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
             
            >
              <option value="not emergency">Not emergency</option>
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
 
 
          {/* Choose Latitude and Longitude from the map */}
          <div>
            <span className="text-gray-700">
              Choose Latitude and Longitude from the map
            </span>
            {/* Map Container */}
            <div id="map" className="map-container">
              <MapContainer
                center={center}
                zoom={13}
                className="map"
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© OpenStreetMap contributors'
                />
                <DraggableMarker updateLatLng={updateLatLng}/>
              </MapContainer>
            </div>
          </div>
 
          {/* Display Latitude and Longitude */}
          <div className="mb-2 mt-2">
          <input
              type="text"
              placeholder="Latitude"
              readOnly
              value={latitude}  // Use the state value here
              className="h-10 block w-full rounded-md border-gray-400 border-2"
            />
          </div>
          <div className="mb-6">
          <input
              type="text"
              placeholder="Longitude"
              readOnly
              value={longitude}  // Use the state value here
              className="h-10 block w-full rounded-md border-gray-400 border-2"
            />
          </div>
 
       
 
          {/* Submit Button */}
          <div className="mb-6 mt-4">
            <button
              type="submit"
              className="h-10 px-5 text-indigo-100 bg-gray-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:text-indigo-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};
 
export default Report;