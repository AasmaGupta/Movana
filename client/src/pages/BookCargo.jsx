import "./BookCargo.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import AddressAutocomplete from "../components/AddressAutocomplete";

function BookCargo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    pickupLatitude: "",
    pickupLongitude: "",

    destinationLatitude: "",
    destinationLongitude: "",

    pickupLocation: "",
    destination: "",

    pickupDate: "",
    pickupTime: "",

    senderName: "",
    senderPhone: "",

    receiverName: "",
    receiverPhone: "",

    cargoType: "",
    packageDescription: "",

    weight: "",

    fragile: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {

    const {
      pickupLocation,
      destination,
      pickupDate,
      pickupTime,
      senderName,
      senderPhone,
      receiverName,
      receiverPhone,
      cargoType,
      packageDescription,
      weight,
    } = formData;

    if (
      !pickupLocation ||
      !destination ||
      !pickupDate ||
      !pickupTime ||
      !senderName ||
      !senderPhone ||
      !receiverName ||
      !receiverPhone ||
      !cargoType ||
      !packageDescription ||
      !weight
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:8000/api/cargo",
        formData
      );

      const bookingId = response.data.cargo._id;

      navigate("/bookmetro", {
        state: {
    
            bookingId,
    
            pickupLatitude: formData.pickupLatitude,
            pickupLongitude: formData.pickupLongitude,
    
            destinationLatitude: formData.destinationLatitude,
            destinationLongitude: formData.destinationLongitude,
    
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

        <h3>📍 Shipment Details</h3>

        <AddressAutocomplete
            placeholder="Pickup Address"
            value={formData.pickupLocation}
            onSelect={(location) =>
            setFormData({
                ...formData,
                pickupLocation: location.address,
                pickupLatitude: location.lat,
                pickupLongitude: location.lon,
                })
            }
        />

        <AddressAutocomplete
            placeholder="Delivery Address"
            value={formData.destination}
            onSelect={(location) =>
                setFormData({
                    ...formData,
                    destination: location.address,
                    destinationLatitude: location.lat,
                    destinationLongitude: location.lon,
                })
            }
        />

        <input
          type="date"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
        />

        <select
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handleChange}
        >
          <option value="">Select Pickup Time Slot</option>
          <option value="9 AM - 11 AM">9 AM - 11 AM</option>
          <option value="11 AM - 1 PM">11 AM - 1 PM</option>
          <option value="1 PM - 3 PM">1 PM - 3 PM</option>
          <option value="3 PM - 5 PM">3 PM - 5 PM</option>
        </select>

        <h3>👤 Contact Information</h3>

        <input
          type="text"
          name="senderName"
          placeholder="Sender Name"
          value={formData.senderName}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="senderPhone"
          placeholder="Sender Phone Number"
          value={formData.senderPhone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="receiverName"
          placeholder="Receiver Name"
          value={formData.receiverName}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="receiverPhone"
          placeholder="Receiver Phone Number"
          value={formData.receiverPhone}
          onChange={handleChange}
        />

        <h3>📦 Package Information</h3>

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
          <option value="Clothing">Clothing</option>
          <option value="Medicines">Medicines</option>
          <option value="Fragile Goods">Fragile Goods</option>
          <option value="Industrial Goods">Industrial Goods</option>
          <option value="Others">Others</option>
        </select>

        <textarea
          name="packageDescription"
          placeholder="Package Description"
          value={formData.packageDescription}
          onChange={handleChange}
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
        />

        <label className="fragile-checkbox">
          <input
            type="checkbox"
            name="fragile"
            checked={formData.fragile}
            onChange={handleChange}
          />
          Fragile Item
        </label>

        <button onClick={handleSubmit}>
          Continue
        </button>

      </div>

    </div>
  );
}

export default BookCargo;