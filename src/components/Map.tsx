import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import type { GeoJsonObject, Feature } from 'geojson';
import 'leaflet/dist/leaflet.css';
import type { Layer } from 'leaflet';

interface StateMapProps {
  data: GeoJsonObject;
}

const Map = ({ data }: StateMapProps) => {

  function onEachFeature(feature: Feature, layer: Layer) {
    if (feature.properties && feature.properties.NAME) {
      const NAME = feature.properties.NAME as string;
      const href = `/state/${NAME}`
      const className = 'text-blue-500 hover:text-blue-700'
      layer.bindPopup(`<a href={${href}} className={${className}}>${NAME}</a>`);
    }
  }

  return (
    <div className="w-full mx-auto">
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

export default Map;

