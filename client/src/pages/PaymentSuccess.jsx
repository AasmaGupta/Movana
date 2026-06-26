import "./PaymentSuccess.css";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">

        <h1>✅ Payment Successful</h1>

        <p>
          Your cargo booking has been confirmed successfully.
        </p>

        <button onClick={() => navigate("/tracking")}>
          Track Shipment
        </button>

      </div>
    </div>
  );
}

export default PaymentSuccess;