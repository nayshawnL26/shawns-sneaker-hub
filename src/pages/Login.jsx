
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);
    setMessage("");

    if (Object.keys(newErrors).length > 0) return;

    if (email === "shawn@example.com" && password === "sneaker123") {
      setMessage("Login successful! Welcome to Shawn's Sneaker Hub.");
      setTimeout(() => navigate("/shop"), 1000);
    } else {
      setMessage("Incorrect email or password. Please try again.");
    }
  }

  return (
    <section className="login-page">
      <div className="login-card">
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Customer Login</h1>
        <p>Sign in to explore Shawn's Sneaker Hub.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="primary-button login-button">
            Sign In
          </button>
        </form>

        {message && <p className="login-message">{message}</p>}

        <div className="test-credentials">
          <p><strong>Demo Login Credentials</strong></p>
          <p>Email: shawn@example.com</p>
          <p>Password: sneaker123</p>
        </div>

        <p className="back-home">
          <Link to="/">Return to Home</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
