import "./BookCargo.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

function BookCargo() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        senderName: "",
        receiverName: "",
        pickupLocation: "",
        destination: "",
        cargoType: "",
        weight: ""
      });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/cargo",
                formData
              );
              
              const bookingId = response.data.cargo._id;
              
              console.log(bookingId);
              
              navigate("/bookmetro", {
                state: {
                  bookingId,
                },
            });
        } catch (error) {
          console.log(error);
          alert("Booking Failed");
        }
    };
    
    return (
        <div className="bookcargo-container">

        <div className="bookcargo-card">

            <h1>Book Cargo</h1>

            <input
                type="text"
                name="pickupLocation"
                placeholder="Pickup Warehouse"
                value={formData.pickupLocation}
                onChange={handleChange}
            />

            <input
                type="text"
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
            />

            <input
              type="text"
              name="senderName"
              placeholder="Sender Name"
              value={formData.senderName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="receiverName"
              placeholder="Receiver Name"
              value={formData.receiverName}
              onChange={handleChange}
            />

            <select
              name="cargoType"
              value={formData.cargoType}
              onChange={handleChange}
            >
                <option value="">Select Cargo Type</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Food">Food</option>
                <option value="Documents">Documents</option>
            </select>

            <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                value={formData.weight}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Continue</button>

        </div>

        </div>
    );
}

export default BookCargo;