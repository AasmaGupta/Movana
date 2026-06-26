import "./Tracking.css";

function Tracking() {
  return (
    <div className="tracking-container">

      <div className="tracking-card">

        <h1>Live Shipment Tracking</h1>

        <h3>Shipment ID: MV10245</h3>

        <p><strong>Current Location:</strong> Rajiv Chowk Metro Station</p>

        <p><strong>Metro Status:</strong> In Transit 🚇</p>

        <p><strong>EV Status:</strong> Awaiting Pickup 🚚</p>

        <p><strong>Estimated Arrival:</strong> 45 mins</p>

        <div className="timeline">

          <div>✅ Cargo Booked</div>

          <div>✅ Metro Slot Confirmed</div>

          <div>🚇 In Transit</div>

          <div>🚚 EV Pickup Pending</div>

          <div>📦 Delivered</div>

        </div>

      </div>

    </div>
  );
}

export default Tracking;