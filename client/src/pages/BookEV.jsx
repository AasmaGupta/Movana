import "./BookEV.css";
import { useNavigate } from "react-router-dom";

function BookEV() {
  const navigate = useNavigate();

  return (
    <div className="bookev-container">

      <div className="bookev-card">

        <h1>Book EV</h1>

        <input
          type="text"
          placeholder="Pickup Metro Station"
        />

        <input
          type="text"
          placeholder="Delivery Address"
        />

        <select>
          <option>Select EV Type</option>
          <option>Electric Bike</option>
          <option>Electric Van</option>
          <option>Electric Truck</option>
        </select>

        <input
          type="number"
          placeholder="Estimated Distance (km)"
        />

        <input
          type="number"
          placeholder="Estimated Cost (₹)"
        />

        <button onClick={() => navigate("/payment")}>
          Continue
        </button>

      </div>

    </div>
  );
}

export default BookEV;