import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>MOVE</h1>
        <h2>Welcome Back</h2>

        <p>Login to continue your logistics journey.</p>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button onClick={() => navigate("/dashboard")}>
          Login
        </button>

        <a href="#">Forgot Password?</a>

        <p className="signup-text">
          Don't have an account? <span>Sign Up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;