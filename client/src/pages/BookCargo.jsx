import "./BookCargo.css";
import { useNavigate } from "react-router-dom";

function BookCargo() {
    const navigate = useNavigate();
    
    return (
        <div className="bookcargo-container">

        <div className="bookcargo-card">

            <h1>Book Cargo</h1>

            <input type="text" placeholder="Pickup Warehouse" />

            <input type="text" placeholder="Destination" />

            <select>
            <option>Select Cargo Type</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Food</option>
            <option>Documents</option>
            </select>

            <input type="number" placeholder="Weight (kg)" />

            <input type="date" />

            <input type="time" />

            <button onClick={() => navigate("/bookmetro")}>Continue</button>

        </div>

        </div>
    );
}

export default BookCargo;