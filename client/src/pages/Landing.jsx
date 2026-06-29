import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MOVE</h2>

        <ul className="nav-links">
          <li>About</li>
          <li>Features</li>
          <li>How It Works</li>
          <li>Contact</li>
        </ul>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">
          <h1>Metro-Optimized Vehicle Ecosystem</h1>

          <p>
            A smart logistics platform integrating Warehouses,
            Metro Networks and Electric Vehicles to enable
            sustainable, affordable and faster last-mile cargo
            transportation.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/login")}
            >
              Book Cargo
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/hero.jpeg"
            alt="MOVE Preview"
          />
        </div>

      </section>

    </div>
  );
}

export default Landing;