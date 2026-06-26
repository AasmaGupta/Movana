import "./PaymentHistory.css";

function PaymentHistory() {
  return (
    <div className="paymenthistory-container">

      <div className="paymenthistory-card">

        <h1>Payment History</h1>

        <table>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>PAY10245</td>
              <td>₹450</td>
              <td>Paid ✅</td>
            </tr>

            <tr>
              <td>PAY10246</td>
              <td>₹680</td>
              <td>Paid ✅</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PaymentHistory;