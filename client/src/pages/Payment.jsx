import "./Payment.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  return (
    <div className="payment-container">

      <div className="payment-card">

        <h1>Payment</h1>

        <p>Total Amount</p>

        <h2>₹ 450</h2>

        <select>
          <option>Select Payment Method</option>
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>Net Banking</option>
        </select>

        <button onClick={() => navigate("/paymentsuccess")}>
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default Payment;