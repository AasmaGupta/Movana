import "./Dashboard.css";

import { useNavigate } from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard">

            <h1>Welcome to MOVE</h1>

            <p>Select a service to continue.</p>

            <div className="dashboard-grid">

                <div className="cardp" onClick={() => navigate("/bookcargo")}> <h3>Book Cargo</h3> </div>

                <div className="cardp" onClick={() => navigate('/bookmetro')}><h3>Book Metro</h3></div>

                <div className="card" onClick={() => navigate('/bookev')}>🚚<h3>Book EV</h3></div>

                <div className="card" onClick={() => navigate('/tracking')}>📍<h3>Live Tracking</h3></div>

                <div className="card" onClick={() => navigate('/bookinghistory')}>📜<h3>Booking History</h3></div>

                <div className="card" onClick={() => navigate('/paymenthistory')}>💳<h3>Payment History</h3></div>

                <div className="card" onClick={() => navigate('/chatbot')}>🤖<h3>AI Assistant</h3></div>

            </div>

        </div>
    );
}

export default Dashboard;