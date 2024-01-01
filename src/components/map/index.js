import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
export function Map() {
  const mapRef = useRef(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");
      const position = { lat: 29.779918670654297, lng: -95.74752807617188 };
      const mapOptions = {
        zoom: 17,
        center: position,
        mapId: "MY_MAP_ID",
      };

      const map = new Map(mapRef.current, mapOptions);
      const marker = new Marker({
        position: position,
        map: map,
      });
    };

    initMap();
  }, []);
  return <div style={{ height: "400px" }} ref={mapRef} />;
}

export default Map;
