import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet/dist/leaflet.css';
import { useParams } from 'react-router-dom';

const MapComponent = () => {
  const [waypoints, setWaypoints] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    // Fetch waypoint from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/getreport/${id}`); // Replace 1 with the actual ID
        const data = await response.json();
        console.log(data.data.latitude)
        // Assuming the API response has latitude and longitude properties
        setWaypoints([
          L.latLng(data.data.latitude, data.data.longitude),
          L.latLng(28.3949, 84.1240),
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run useEffect only once on component mount

  useEffect(() => {
    if (waypoints.length === 0) return;

    // Create a map instance
    const map = L.map('map').setView(waypoints[0], 13);

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add Leaflet Routing Machine control
    L.Routing.control({
      waypoints,
      routeWhileDragging: true,
    }).addTo(map);

    // Cleanup function
    return () => {
      map.remove();
    };
  }, [waypoints]);

  return <div id="map" style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default MapComponent;
