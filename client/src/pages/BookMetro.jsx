import "./BookMetro.css";
import { useNavigate } from "react-router-dom";

function BookMetro() {
  const navigate = useNavigate();

  return (
    <div className="metro-container">
      <div className="metro-card">

        <h1>Book Metro Slot</h1>

        <select>
          <option>Select Origin Metro</option>
          <option>Okhla</option>
          <option>Mayapuri</option>
          <option>Bawana</option>
        </select>

        <select>
          <option>Select Destination Metro</option>
          <option>Rajiv Chowk</option>
          <option>Dwarka</option>
          <option>Kashmere Gate</option>
        </select>

        <select>
          <option>Select Time Slot</option>
          <option>11 PM - 12 AM</option>
          <option>12 AM - 1 AM</option>
          <option>1 AM - 2 AM</option>
        </select>

        <button onClick={() => navigate("/bookev")}>
          Continue
        </button>

      </div>
    </div>
  );
}

export default BookMetro;