import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/Landing";
import LoginSignUp from "./pages/LoginSignup";
import Home from "./pages/Home";
import Ask from "./pages/Ask";
import Song from "./pages/Song";
import "./App.css"; // Import styles for cursor and layout

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") === "true"
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(user === "true");
  }, []);

  // 🎯 Custom Cursor with Trail Effect
  useEffect(() => {
    const numDots = 15; // Number of dots in the trail
    const dots = [];

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.classList.add("cursor-dot");
      document.body.appendChild(dot);
      dots.push(dot);
    }

    let mouseX = 0, mouseY = 0;
    let trail = Array(numDots).fill({ x: 0, y: 0 });

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateTrail = () => {
      trail.pop();
      trail.unshift({ x: mouseX, y: mouseY });

      dots.forEach((dot, i) => {
        dot.style.transform = `translate(${trail[i].x}px, ${trail[i].y}px)`;
        dot.style.opacity = `${1 - i / numDots}`; // Fading effect
      });

      requestAnimationFrame(updateTrail);
    };

    document.addEventListener("mousemove", moveCursor);
    updateTrail();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      dots.forEach((dot) => document.body.removeChild(dot));
    };
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated && <Navbar />}
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LandingPage />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <LoginSignUp setAuth={setIsAuthenticated} />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/ask" element={isAuthenticated ? <Ask /> : <Navigate to="/login" />} />
            <Route path="/song" element={isAuthenticated ? <Song /> : <Navigate to="/login" />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
