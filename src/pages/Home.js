import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp, FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "./Home.css";
import heroImage from "../assets/hero-Image.png";

const Home = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="home-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side - Image */}
          <div className="hero-image">
            <img src={heroImage} alt="Hero" />
          </div>

          {/* Right Side - Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="legato-text">Legato</span>
            </h1>
            <p className="hero-subtitle">
              <span className="ai-mazing">AI-mazing:</span> Beat Bias, Sing Rights, Own Law
            </p>
            <section className="get-started">
              <motion.button
                className="hero-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/explore")}
              >
                Get Started
              </motion.button>
            </section>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-container">
          {[
            { title: "AI Voice Recognition", desc: "Interact with legal storytelling using AI." },
            { title: "Legal Songs", desc: "Learn about your rights through engaging music." },
            { title: "Gov. Benefit Updates", desc: "Stay updated with legal changes and schemes." },
          ].map((feature, index) => (
            <motion.div className="feature-card" whileHover={{ scale: 1.05 }} key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-container">
          {[
            { question: "What is Legato?", answer: "Legato is an AI-driven app that turns legal knowledge into songs." },
            { question: "How does AI voice recognition work?", answer: "Our AI listens to your voice and provides legal guidance in a fun way." },
            { question: "Is Legato free to use?", answer: "Yes, Legato is free and accessible to all users." },
          ].map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question} {openIndex === index ? "▲" : "▼"}
              </button>
              {openIndex === index && (
                <motion.p className="faq-answer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          

          {/* Quick Links */}
          <div className="footer-section footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section footer-social">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-section footer-newsletter">
            <h2>Subscribe to Newsletter</h2>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h2>Contact Us</h2>
            <p><FaEnvelope /> support@legato.com</p>
            <p><FaPhone /> +91 9876543210</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="footer-copy">© 2025 Legato. All rights reserved.</p>
      </footer>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;
