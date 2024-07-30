import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './LocationMap.module.css'; 

// Corrige o problema do ícone padrão não aparecendo
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LocationMap = () => {
  const latitude = -5.654222;
  const longitude = -36.615306;
  const position = [latitude, longitude];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <MapContainer center={position} zoom={18} style={{ flex: '0 0 40%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            Bloco de professores II
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
