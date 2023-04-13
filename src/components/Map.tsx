import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

interface StateMapProps {
  data: GeoJsonObject
}

const StateMap: React.FC<StateMapProps> = ({ data }: StateMapProps) => {

  function onEachFeature(feature: any, layer: any) {
    if (feature.properties && feature.properties.NAME) {
      const { NAME } = feature.properties;
      const href = `/state/${NAME}`
      layer.bindPopup(`<a href={${href}}>${NAME}</a>`);
    }
  }

  return (
    <div className="w-[90vw] mx-auto">
      <MapContainer
        className='z-0'
        center={[39.5, -98.35]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ height: '90vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON
          data={data}
          style={{ fillOpacity: 0.7, color: 'blue', weight: 1, }}
          onEachFeature={onEachFeature}
        />

      </MapContainer>
    </div>
  );
};

export default StateMap;

