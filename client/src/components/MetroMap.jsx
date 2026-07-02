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

/* -------------------------
      Custom Marker Icons
------------------------- */

const pickupIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// MOVE Recommended Metro (Blue)

const recommendedMetroIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:16px;
      height:16px;
      border-radius:50%;
      background:#2563eb;
      border:3px solid white;
      box-shadow:0 0 6px rgba(37,99,235,.45);
    "></div>
  `,
  iconSize: [16,16],
  iconAnchor: [8,8],
});

const selectedMetroIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:16px;
      height:16px;
      border-radius:50%;
      background:#16a34a;
      border:3px solid white;
      box-shadow:0 0 6px rgba(22,163,74,.45);
    "></div>
  `,
  iconSize:[16,16],
  iconAnchor:[8,8],
});

const deliveryIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

/* -------------------------
        Fit Bounds
------------------------- */

function FitBounds({
  pickupLat,
  pickupLng,
  destinationLat,
  destinationLng,
  recommendedOrigin,
  recommendedDestination,
  selectedOrigin,
  selectedDestination,
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

    if (selectedOrigin) {
      points.push([
        selectedOrigin.lat,
        selectedOrigin.lng,
      ]);
    }

    if (selectedDestination) {
      points.push([
        selectedDestination.lat,
        selectedDestination.lng,
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
    selectedOrigin,
    selectedDestination,
    map,
  ]);

  return null;
}

/* -------------------------
        Metro Map
------------------------- */

function MetroMap({
  pickupLat,
  pickupLng,
  destinationLat,
  destinationLng,
  recommendedOrigin,
  recommendedDestination,
  selectedOrigin,
  selectedDestination,
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
        recommendedOrigin={recommendedOrigin}
        recommendedDestination={recommendedDestination}
        selectedOrigin={selectedOrigin}
        selectedDestination={selectedDestination}
      />

      {/* Pickup */}

      {pickupLat && pickupLng && (
        <Marker
          icon={deliveryIcon}
          position={[
            Number(pickupLat),
            Number(pickupLng),
          ]}
        >
          <Popup>
            <strong>Pickup Address</strong>
          </Popup>
        </Marker>
      )}

      {/* Delivery */}

      {destinationLat && destinationLng && (
        <Marker
          icon={deliveryIcon}
          position={[
            Number(destinationLat),
            Number(destinationLng),
          ]}
        >
          <Popup>
            <strong>Delivery Address</strong>
          </Popup>
        </Marker>
      )}

      {/* Recommended Origin */}

        {recommendedOrigin && (
          <Marker
            icon={recommendedMetroIcon}
            position={[
              recommendedOrigin.lat,
              recommendedOrigin.lng,
            ]}
          >
            <Popup>
              <strong>Recommended Origin</strong>
              <br />
              {recommendedOrigin.name}
            </Popup>
          </Marker>
      )}

      {/* Recommended Destination */}

      {recommendedDestination && (
        <Marker
          icon={recommendedMetroIcon}
          position={[
            recommendedDestination.lat,
            recommendedDestination.lng,
          ]}
        >
          <Popup>
            <strong>Recommended Destination</strong>
            <br />
            {recommendedDestination.name}
          </Popup>
        </Marker>
      )}

      {selectedOrigin &&
      recommendedOrigin &&
      selectedOrigin.name !== recommendedOrigin.name && (

        <Marker
          icon={selectedMetroIcon}
          position={[
            selectedOrigin.lat,
            selectedOrigin.lng,
          ]}
        >
          <Popup>
            <strong>Your Selected Origin</strong>
            <br />
            {selectedOrigin.name}
          </Popup>
        </Marker>

      )}

      {selectedDestination &&
      recommendedDestination &&
      selectedDestination.name !== recommendedDestination.name && (

        <Marker
          icon={selectedMetroIcon}
          position={[
            selectedDestination.lat,
            selectedDestination.lng,
          ]}
        >
          <Popup>
            <strong>Your Selected Destination</strong>
            <br />
            {selectedDestination.name}
          </Popup>
        </Marker>

      )}

      {/* Metro Route */}

      {selectedOrigin && selectedDestination && (
        <Polyline
          positions={[
            [
              selectedOrigin.lat,
              selectedOrigin.lng,
            ],
            [
              selectedDestination.lat,
              selectedDestination.lng,
            ],
          ]}
          pathOptions={{
            color: "#2563eb",
            weight: 5,
            opacity: 0.85,
          }}
        />
      )}
    </MapContainer>
  );
}

export default MetroMap;