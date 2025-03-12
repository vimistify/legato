import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/LoginSignUp.css";
import loginImage from "../assets/login-image.png";
import signupImage from "../assets/signup-image.png";

const LoginSignUp = ({ setAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(localStorage.getItem("savedEmail") || ""); // Load saved email
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Save email when input changes
  useEffect(() => {
    localStorage.setItem("savedEmail", email);
  }, [email]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      setMessage("Login Successful...");
      localStorage.setItem("isAuthenticated", "true");
      setAuth(true);
      setTimeout(() => navigate("/home"), 1500);
    } else {
      setMessage("Sign Up Successful. You can now log in.");
      setTimeout(() => {
        setIsLogin(true);
        setMessage("");
      }, 1500);
    }
  };

  return (
    <div className="auth-container">
      <div className="image-container">
        <img src={isLogin ? loginImage : signupImage} alt="Auth" className="auth-image" />
      </div>

      <div className={`slider ${isLogin ? "login" : "signup"}`}>
        <div className="form-container">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && <input type="text" placeholder="Username" required />}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
          {message && <p className="message">{message}</p>}
          <p onClick={toggleForm}>
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
