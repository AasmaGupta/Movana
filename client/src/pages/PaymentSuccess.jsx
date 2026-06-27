import "./PaymentSuccess.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PaymentSuccess() {

    const { id } = useParams();

    const [booking, setBooking] = useState(null);

    useEffect(() => {

        fetchBooking();

    }, [id]);

    const fetchBooking = async () => {
        try {
    
            const response = await axios.get(
                `http://localhost:8000/api/cargo/${id}`
            );
    
            setBooking(response.data);
    
        } catch (err) {
    
            console.log(err);
    
            alert("Unable to fetch booking details.");
    
        }
    };

    if (!booking) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="success-container">

            <div className="success-card">

                <h1>✅ Booking Successful</h1>

                <p><b>Booking ID:</b> {booking._id}</p>

                <p><b>Sender:</b> {booking.senderName}</p>

                <p><b>Receiver:</b> {booking.receiverName}</p>

                <p><b>Cargo:</b> {booking.cargoType}</p>

                <p><b>Metro Slot:</b> {booking.metroSlot}</p>

                <p><b>Driver:</b> {booking.driverName}</p>

                <p><b>Vehicle:</b> {booking.vehicleNumber}</p>

                <p><b>Payment:</b> {booking.paymentStatus}</p>

                <p><b>Status:</b> {booking.status}</p>

                <p><b>ETA:</b> {booking.eta}</p>

                <p><b>Estimated Cost:</b> {booking.estimatedCost}</p>

            </div>

        </div>

    );

}

export default PaymentSuccess;