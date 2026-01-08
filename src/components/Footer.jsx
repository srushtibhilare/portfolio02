import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/srushtibhilare", name: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/srushti-bhilare/", name: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourhandle", name: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourprofile", name: "Instagram" },
    { icon: <FiMail />, url: "mailto:srushti29bhilare@gmail.com", name: "Email" },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo */}
          <div className="footer-logo">
            <h3>Srushti Bhilare</h3>
            <p>Full Stack Developer</p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="https://github.com/srushtibhilare">GitHub</a></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Srushti Bhilare. All rights reserved.
            <span className="made-with">
              Made with <FaHeart className="heart-icon" /> in India
            </span>
          </p>

          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}
