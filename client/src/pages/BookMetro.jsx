import "./BookMetro.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function BookMetro() {

  const navigate = useNavigate();
  const location = useLocation();
    
  const bookingId = location.state?.bookingId;

  console.log("Booking ID:", bookingId);

  const [metroData, setMetroData] = useState({
    originMetro: "",
    destinationMetro: "",
    metroSlot: "",
  });

  const handleChange = (e) => {
    setMetroData({
      ...metroData,
      [e.target.name]: e.target.value,
    });
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

  return (
    <div className="metro-container">
      <div className="metro-card">

        <h1>Book Metro Slot</h1>

        <select name="originMetro" value={metroData.originMetro} onChange={handleChange}>
          <option value="">Select Origin Metro</option>
          <option>Okhla</option>
          <option>Mayapuri</option>
          <option>Bawana</option>
        </select>

        <select name="destinationMetro" value={metroData.destinationMetro} onChange={handleChange}>
          <option value="">Select Destination Metro</option>
          <option>Rajiv Chowk</option>
          <option>Dwarka</option>
          <option>Kashmere Gate</option>
        </select>

        <select name="metroSlot" value={metroData.metroSlot} onChange={handleChange}>
          <option value="">Select Time Slot</option>
          <option>11 PM - 12 AM</option>
          <option>12 AM - 1 AM</option>
          <option>1 AM - 2 AM</option>
        </select>

        <button onClick={handleSubmit}>Continue</button>

      </div>
    </div>
  );
}

export default BookMetro;