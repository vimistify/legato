import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Landing.css";

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="landing-container">
      {!loading ? (
        <motion.div
          className="box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={handleClick}
        >
          <h1 className="logo">LEGATO</h1>
        </motion.div>
      ) : (
        <motion.div
          className="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>Loading...</span>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
