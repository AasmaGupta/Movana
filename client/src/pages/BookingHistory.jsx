import "./BookingHistory.css";

function BookingHistory() {
  return (
    <div className="history-container">

      <div className="history-card">

        <h1>Booking History</h1>

        <table>
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>MV10245</td>
              <td>Dwarka</td>
              <td>Delivered ✅</td>
            </tr>

            <tr>
              <td>MV10246</td>
              <td>Noida</td>
              <td>In Transit 🚇</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  );
}

export default BookingHistory;