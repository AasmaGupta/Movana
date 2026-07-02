import "./BookMetro.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import MetroMap from "../components/MetroMap";

import { loadMetroStations } from "../utils/loadMetroStations";
import { findNearestMetro } from "../utils/findNearestMetro";
import { calculateMetroRoute } from "../utils/calculateMetroRoute";

function BookMetro() {

    const navigate = useNavigate();
    const location = useLocation();

    const bookingId = location.state?.bookingId;

    const pickupLat = location.state?.pickupLatitude;
    const pickupLng = location.state?.pickupLongitude;

    const destinationLat = location.state?.destinationLatitude;
    const destinationLng = location.state?.destinationLongitude;

    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);

    const [recommendedOrigin, setRecommendedOrigin] = useState(null);
    const [recommendedDestination, setRecommendedDestination] = useState(null);

    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);

    const [metroData, setMetroData] = useState({
        originMetro: "",
        destinationMetro: "",
        metroSlot: "11 PM - 12 AM",
    });

    const [routeInfo, setRouteInfo] = useState({
        distance: "",
        time: "",
        cost: "",
    });

    useEffect(() => {

        async function initializeMetro() {

            try {

                const metroStations = await loadMetroStations();

                setStations(metroStations);

                if (
                    pickupLat &&
                    pickupLng &&
                    destinationLat &&
                    destinationLng
                ) {

                    const origin = findNearestMetro(
                        Number(pickupLat),
                        Number(pickupLng),
                        metroStations
                    );

                    const destination = findNearestMetro(
                        Number(destinationLat),
                        Number(destinationLng),
                        metroStations
                    );

                    // MOVE Recommendation

                    setRecommendedOrigin(origin);
                    setRecommendedDestination(destination);

                    // Current User Selection

                    setSelectedOrigin(origin);
                    setSelectedDestination(destination);

                    setMetroData({
                        originMetro: origin.name,
                        destinationMetro: destination.name,
                        metroSlot: "11 PM - 12 AM",
                    });

                    const route = calculateMetroRoute(
                        origin,
                        destination
                    );

                    setRouteInfo({
                        distance: `${route.distance} km`,
                        time: `${route.time} mins`,
                        cost: `₹${route.cost}`,
                    });

                }

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        }

        initializeMetro();

    }, []);

    const handleChange = (e) => {

        const updatedMetro = {
            ...metroData,
            [e.target.name]: e.target.value,
        };

        setMetroData(updatedMetro);

        const origin = stations.find(
            station => station.name === updatedMetro.originMetro
        );

        const destination = stations.find(
            station => station.name === updatedMetro.destinationMetro
        );

        if (origin && destination) {

            setSelectedOrigin(origin);
            setSelectedDestination(destination);

            const route = calculateMetroRoute(
                origin,
                destination
            );

            setRouteInfo({
                distance: `${route.distance} km`,
                time: `${route.time} mins`,
                cost: `₹${route.cost}`,
            });

        }

    };

    const handleSubmit = async () => {

        try {

            await axios.put(
                `http://localhost:8000/api/cargo/${bookingId}/metro`,
                metroData
            );

            navigate("/bookev", {
                state: {
                    bookingId,
                },
            });

        } catch (err) {

            console.log(err);
            alert("Metro Booking Failed");

        }

    };

    if (loading) {

        return (
            <div className="metro-container">
                <h2>Loading Metro...</h2>
            </div>
        );

    }

    return (
        <div className="metro-container">
    
            <div className="metro-card">
    
                <h1>Book Metro</h1>
    
                {/* MAP */}
    
                <div className="metro-map">
    
                <MetroMap
                    pickupLat={pickupLat}
                    pickupLng={pickupLng}

                    destinationLat={destinationLat}
                    destinationLng={destinationLng}

                    recommendedOrigin={recommendedOrigin}
                    recommendedDestination={recommendedDestination}

                    selectedOrigin={selectedOrigin}
                    selectedDestination={selectedDestination}
                />
    
                </div>
    
                {/* MAP LEGEND */}
    
                <div className="map-legend">

                    <span className="legend-blue">

                        🔵 Metro Route (Suggested)

                    </span>

                    <span className="legend-red">

                        🔴 Warehouse/Marketplace

                    </span>

                    {(recommendedOrigin?.name !== selectedOrigin?.name ||

                    recommendedDestination?.name !== selectedDestination?.name) && (

                        <span className="legend-green">

                            🟢 Selected Metro Station

                        </span>

                    )}

                </div>
    
                {/* BOOKING DETAILS */}
    
                <div className="metro-form">

                    <div className="input-group">

                        <label>Origin Metro</label>

                        <select
                            name="originMetro"
                            value={metroData.originMetro}
                            onChange={handleChange}
                        >

                            {stations.map((station)=>(
                                <option
                                    key={station.name}
                                    value={station.name}
                                >
                                    {station.name}
                                </option>
                            ))}

                        </select>

                    </div>

                    <div className="input-group">

                        <label>Destination Metro</label>

                        <select
                            name="destinationMetro"
                            value={metroData.destinationMetro}
                            onChange={handleChange}
                        >

                            {stations.map((station)=>(
                                <option
                                    key={station.name}
                                    value={station.name}
                                >
                                    {station.name}
                                </option>
                            ))}

                        </select>

                    </div>

                    <div className="input-group">

                        <label>Metro Slot</label>

                        <select
                            name="metroSlot"
                            value={metroData.metroSlot}
                            onChange={handleChange}
                        >

                            <option>11 PM - 12 AM</option>
                            <option>12 AM - 1 AM</option>
                            <option>1 AM - 2 AM</option>

                        </select>

                    </div>

                </div>
    
                {/* ROUTE */}
    
                <div className="route-section">
    
                    <h2>
                        Recommended Route
                    </h2>
    
                    <div className="route-item">
    
                        <span>Origin Metro</span>
    
                        <strong>
                            {metroData.originMetro}
                        </strong>
    
                    </div>
    
                    <div className="route-item">
    
                        <span>Destination Metro</span>
    
                        <strong>
                            {metroData.destinationMetro}
                        </strong>
    
                    </div>
    
                    <div className="route-item">
    
                        <span>Distance</span>
    
                        <strong>
                            {routeInfo.distance}
                        </strong>
    
                    </div>
    
                    <div className="route-item">
    
                        <span>Estimated Time</span>
    
                        <strong>
                            {routeInfo.time}
                        </strong>
    
                    </div>
    
                    <div className="route-item">
    
                        <span>Estimated Cost</span>
    
                        <strong>
                            {routeInfo.cost}
                        </strong>
    
                    </div>
    
                </div>
    
                {/* RECOMMENDATION */}
    
                <div className="recommendation">
    
                    <h3>
                        Recommendation
                    </h3>
    
                    <p>
    
                        The nearest metro stations have been selected
                        automatically based on your pickup and
                        destination addresses.
    
                    </p>
    
                    <p>
    
                        If another metro station is more convenient,
                        you can change it before continuing.
    
                    </p>
    
                </div>
    
                <button
                    onClick={handleSubmit}
                    disabled={
                        !metroData.originMetro ||
                        !metroData.destinationMetro
                    }
                >
    
                    Continue
    
                </button>
    
            </div>
    
        </div>
    );
    }
    
    export default BookMetro;