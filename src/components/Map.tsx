import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';
import 'leaflet/dist/leaflet.css';

interface StateMapProps {
  geoJsonData: GeoJsonObject;
}

const StateMap: React.FC<StateMapProps> = ({ geoJsonData }: StateMapProps) => {
  // const [selectedState, setSelectedState] = useState<string | null>(null);

  // const handleClick = (stateName: string) => {
  //   setSelectedState(stateName);
  // };

  return (
    <div className="h-[500px] w-[90vw] mx-auto">
      <MapContainer
        className='z-0'
        center={[39.5, -98.35]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON
          data={geoJsonData}
          style={{ fillOpacity: 0.7, color: 'white', weight: 1 }}

        />
        {/* {selectedState && (
        <div className="selected-state">{selectedState}</div>
      )} */}
      </MapContainer>
    </div>
  );
};

export default StateMap;

