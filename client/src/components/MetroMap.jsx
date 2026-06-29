import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    useMap,
  } from "react-leaflet";
  
  import { useEffect } from "react";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  function FitBounds({
    pickupLat,
    pickupLng,
    destinationLat,
    destinationLng,
    originStation,
    destinationStation,
  }) {
    const map = useMap();
  
    useEffect(() => {
      const points = [];
  
      if (pickupLat && pickupLng) {
        points.push([Number(pickupLat), Number(pickupLng)]);
      }
  
      if (destinationLat && destinationLng) {
        points.push([
          Number(destinationLat),
          Number(destinationLng),
        ]);
      }
  
      if (originStation) {
        points.push([
          originStation.lat,
          originStation.lng,
        ]);
      }
  
      if (destinationStation) {
        points.push([
          destinationStation.lat,
          destinationStation.lng,
        ]);
      }
  
      if (points.length >= 2) {
        const bounds = L.latLngBounds(points);
  
        map.fitBounds(bounds, {
          padding: [60, 60],
        });
      }
    }, [
      pickupLat,
      pickupLng,
      destinationLat,
      destinationLng,
      originStation,
      destinationStation,
      map,
    ]);
  
    return null;
  }
  
  function MetroMap({
    pickupLat,
    pickupLng,
    destinationLat,
    destinationLng,
    originStation,
    destinationStation,
  }) {
    return (
      <MapContainer
        center={[28.6139, 77.209]}
        zoom={11}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        <FitBounds
          pickupLat={pickupLat}
          pickupLng={pickupLng}
          destinationLat={destinationLat}
          destinationLng={destinationLng}
          originStation={originStation}
          destinationStation={destinationStation}
        />
  
        {/* Pickup Marker */}
  
        {pickupLat && pickupLng && (
          <Marker
            position={[
              Number(pickupLat),
              Number(pickupLng),
            ]}
          >
            <Popup>📍 Pickup Address</Popup>
          </Marker>
        )}
  
        {/* Destination Marker */}
  
        {destinationLat && destinationLng && (
          <Marker
            position={[
              Number(destinationLat),
              Number(destinationLng),
            ]}
          >
            <Popup>📍 Destination Address</Popup>
          </Marker>
        )}
  
        {/* Origin Metro */}
  
        {originStation && (
          <Marker
            position={[
              originStation.lat,
              originStation.lng,
            ]}
          >
            <Popup>🚇 {originStation.name}</Popup>
          </Marker>
        )}
  
        {/* Destination Metro */}
  
        {destinationStation && (
          <Marker
            position={[
              destinationStation.lat,
              destinationStation.lng,
            ]}
          >
            <Popup>🚇 {destinationStation.name}</Popup>
          </Marker>
        )}
  
        {/* Metro Route */}
  
        {originStation && destinationStation && (
          <Polyline
            positions={[
              [
                originStation.lat,
                originStation.lng,
              ],
              [
                destinationStation.lat,
                destinationStation.lng,
              ],
            ]}
          />
        )}
      </MapContainer>
    );
  }
  
  export default MetroMap;