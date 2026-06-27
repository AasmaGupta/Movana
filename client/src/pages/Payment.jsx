import "./Payment.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Payment() {

  const navigate = useNavigate();

  const location = useLocation();

  const bookingId = location.state?.bookingId;

  const [paymentData, setPaymentData] = useState({

    paymentMethod: "",
    transactionId: "",

  });

  const handleChange = (e) => {

    setPaymentData({

        ...paymentData,

        [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async () => {

    try {

        await axios.put(

            `http://localhost:8000/api/cargo/${bookingId}/payment`,

            paymentData

        );

        navigate(`/paymentsuccess/${bookingId}`);

    }

    catch(err){

        console.log(err);

        alert("Payment Failed");

    }

  };

  return (
    <div className="payment-container">

      <div className="payment-card">

        <h1>Payment</h1>

        <p>Total Amount</p>

        <h2>₹ 450</h2>

        <select
            name="paymentMethod"
            value={paymentData.paymentMethod}
            onChange={handleChange}
        >

            <option value="">Choose Payment</option>
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>

        </select>

        <input type="text" name="transactionId" placeholder="Transaction ID" value={paymentData.transactionId} onChange={handleChange} />

        <button onClick={handleSubmit}> Pay Now </button>

      </div>

    </div>
  );
}

export default Payment;