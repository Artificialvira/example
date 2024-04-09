import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

function LocationTracker() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        }, (error) => {
          console.error('Error getting geolocation:', error);
        });
      } else {
        console.error('Geolocation is not supported by this browser');
      }
    };

    fetchLocation();
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={15}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default LocationTracker;
