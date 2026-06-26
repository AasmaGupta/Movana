import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import BookCargo from "./pages/BookCargo";
import BookMetro from "./pages/BookMetro";
import BookEV from "./pages/BookEV";
import Tracking from "./pages/Tracking";
import BookingHistory from "./pages/BookingHistory";
import PaymentHistory from "./pages/PaymentHistory";
import Chatbot from "./pages/Chatbot";

import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookcargo" element={<BookCargo />} />
      <Route path="/bookmetro" element={<BookMetro />} />
      <Route path="/bookev" element={<BookEV />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/bookinghistory" element={<BookingHistory />} />
      <Route path="/paymenthistory" element={<PaymentHistory />} />
      <Route path="/chatbot" element={<Chatbot />} />

      <Route path="/payment" element={<Payment />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      

    </Routes>
  );
}

export default App;