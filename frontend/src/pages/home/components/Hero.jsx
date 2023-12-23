// Hero.js

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Hero = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          if (!mapRef.current) {
            // Initialize the map
            const map = L.map('map').setView([latitude, longitude], 13);

            // Add a tile layer (you can choose a different provider if needed)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Add a marker for your current location
            const marker = L.marker([latitude, longitude]).addTo(map);

            // Add a popup to the marker
            marker.bindPopup('Your Current Location').openPopup();

            // Store the map instance in the ref to avoid reinitialization
            mapRef.current = map;
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div id="map" className="w-full h-96"></div>
    </div>
  );
};

export default Hero;
