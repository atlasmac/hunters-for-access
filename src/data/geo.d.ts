import type { GeoJsonObject } from "geojson";

declare module "./geo.json" {
  const value: GeoJsonObject;
  export default value;
}
