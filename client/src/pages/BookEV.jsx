import "./BookEV.css";

import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function BookEV() {
  const navigate = useNavigate();

  const location = useLocation();

  const bookingId = location.state?.bookingId;

  const [evData, setEvData] = useState({

    evType: "",
    driverName: "",
    vehicleNumber: "",
    eta: "",
    estimatedCost: "",
  
  });

  const handleChange = (e) => {

    const selectedType = e.target.value;
  
    let driver = "";
    let vehicle = "";
    let eta = "";
    let cost = "";
  
    if (selectedType === "Electric Bike") {
      driver = "Aman Verma";
      vehicle = "DL1EA1023";
      eta = "5 mins";
      cost = "₹80";
    }
  
    else if (selectedType === "Electric Van") {
      driver = "Rahul Sharma";
      vehicle = "DL1VB4587";
      eta = "8 mins";
      cost = "₹150";
    }
  
    else if (selectedType === "Electric Truck") {
      driver = "Mohit Singh";
      vehicle = "DL1TC7788";
      eta = "12 mins";
      cost = "₹250";
    }
  
    setEvData({
  
      evType: selectedType,
      driverName: driver,
      vehicleNumber: vehicle,
      eta: eta,
      estimatedCost: cost,
  
    });
  
  };


  const handleSubmit = async () => {

    try {

        await axios.put(

            `http://localhost:8000/api/cargo/${bookingId}/ev`,

            evData

        );

        navigate("/payment", {

            state: {

                bookingId,

            },

        });

    }

    catch(err){

        console.log(err);

        alert("EV Booking Failed");

    }

  }; 

  return (
    <div className="bookev-container">

      <div className="bookev-card">

        <h1>Book EV</h1>

        <select
          name="evType"
          value={evData.evType}
          onChange={handleChange}
        >
            <option value="">Select EV Type</option>
            <option value="Electric Bike">Electric Bike</option>
            <option value="Electric Van">Electric Van</option>
            <option value="Electric Truck">Electric Truck</option>
        </select>

        {evData.driverName && (

            <div className="ev-details">

                <h3>Assigned EV Details</h3>

                <p><strong>Driver:</strong> {evData.driverName}</p>

                <p><strong>Vehicle:</strong> {evData.vehicleNumber}</p>

                <p><strong>ETA:</strong> {evData.eta}</p>

                <p><strong>Estimated Cost:</strong> {evData.estimatedCost}</p>

            </div>

        )}

        <button onClick={handleSubmit} disabled={!evData.evType} >
          Continue
        </button>

      </div>

    </div>
  );
}

export default BookEV;