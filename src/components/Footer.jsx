import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaFileDownload,
  FaCode,
  FaChartLine,
} from "react-icons/fa";
import { FiMail, FiArrowUp, FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [currentYear] = useState(new Date().getFullYear());

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide back to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Social links with enhanced data
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/srushtibhilare",
      name: "GitHub",
      color: "#333",
      hoverColor: "#6e5494",
      delay: 0.1,
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/srushti-bhilare/",
      name: "LinkedIn",
      color: "#0077b5",
      hoverColor: "#00a0dc",
      delay: 0.2,
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/2_red/",
      name: "LeetCode",
      color: "#FFA116",
      hoverColor: "#FFD700",
      delay: 0.3,
    },
    {
      icon: <SiHackerrank />,
      url: "https://www.hackerrank.com/profile/srushti29bhilare",
      name: "HackerRank",
      color: "#00EA64",
      hoverColor: "#00C853",
      delay: 0.4,
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourhandle",
      name: "Twitter",
      color: "#1DA1F2",
      hoverColor: "#1DA1F2",
      delay: 0.5,
    },
    {
      icon: <FiMail />,
      url: "srushti29bhilare@gmail.com",
      name: "Email",
      color: "#EA4335",
      hoverColor: "#D14836",
      delay: 0.6,
    },
  ];

  // Skill badges for footer
  const skillBadges = [
    { icon: <FaCode />, label: "Full Stack", color: "#6366f1" },
    { icon: <FaChartLine />, label: "Data Analytics", color: "#10b981" },
    { icon: <FaFileDownload />, label: "Python/React", color: "#f59e0b" },
  ];

  // Footer animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.9 },
  };

  const floatAnimation = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background gradient */}
      <div className="footer-background-gradient" />

      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-content">
          {/* Logo Section with Animation */}
          <motion.div className="footer-logo-section" variants={itemVariants}>
            <div className="logo-wrapper">
              <motion.div
                className="logo-icon"
                animate={floatAnimation.float}
                whileHover={{ scale: 1.1 }}
              >
                <span className="logo-text">SB</span>
                <div className="logo-glow" />
              </motion.div>
              <div>
                <motion.h3
                  className="logo-name"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Srushti Bhilare
                </motion.h3>
                <motion.p className="logo-title">
                  Data Analyst & Full Stack Developer
                </motion.p>
              </div>
            </div>

            <motion.p
              className="logo-description"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              Transforming data into insights, building scalable solutions
            </motion.p>

            {/* Skill Badges */}
            <motion.div className="skill-badges" variants={itemVariants}>
              {skillBadges.map((badge, index) => (
                <motion.span
                  key={index}
                  className="skill-badge"
                  style={{ "--badge-color": badge.color }}
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    boxShadow: `0 8px 20px ${badge.color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Section */}
          <div className="footer-links-section">
            <motion.div className="links-column" variants={itemVariants}>
              <motion.h4
                className="links-title"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Navigation
              </motion.h4>
              <ul>
                {["Home", "About", "Projects", "Experience", "Contact"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <a href={`#${item.toLowerCase()}`}>
                        {item}
                        <motion.span
                          className="link-underline"
                          whileHover={{ scaleX: 1 }}
                          initial={{ scaleX: 0 }}
                        />
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div className="links-column" variants={itemVariants}>
              <motion.h4
                className="links-title"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Resources
              </motion.h4>
              <ul>
                <motion.li
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href="https://drive.google.com/file/d/12JT8H5rjCz5nhLsQfYN856rAv8baaO_M/view?usp=sharing"
                    download
                    className="resource-link"
                  >
                    <FaFileDownload />
                    <span>Download Resume</span>
                    <FiExternalLink className="external-icon" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="/portfolio" className="resource-link">
                    <span>View Portfolio</span>
                    <FiExternalLink className="external-icon" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href="https://github.com/srushtibhilare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    <FaGithub />
                    <span>GitHub Repos</span>
                    <FiExternalLink className="external-icon" />
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Social Section */}
          <motion.div className="footer-social-section" variants={itemVariants}>
            <motion.h4
              className="social-title"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Connect With Me
            </motion.h4>

            <div className="social-icons-grid">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-wrapper"
                  style={{
                    "--icon-color": link.color,
                    "--icon-hover": link.hoverColor,
                  }}
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  animate={hoveredIcon === index ? "hover" : "rest"}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  custom={index}
                  transition={{ delay: link.delay }}
                  aria-label={`Visit ${link.name}`}
                >
                  <div className="social-icon-inner">
                    {link.icon}
                    <motion.span
                      className="icon-tooltip"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredIcon === index ? 1 : 0,
                        y: hoveredIcon === index ? 0 : 10,
                      }}
                    >
                      {link.name}
                    </motion.span>
                  </div>
                  <div className="icon-glow" />
                </motion.a>
              ))}
            </div>

            {/* Email Subscription */}
            <motion.div
              className="newsletter-form"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <p className="newsletter-text">
                Interested in collaboration?
              </p>
              <motion.a
                href="mailto:srushti29bhilare@gmail.com"
                className="contact-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnimation.pulse}
              >
                <FiMail />
                <span>Let's Connect</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="footer-bottom-content">
            <motion.p
              className="copyright"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              © {currentYear} Srushti Bhilare. All rights reserved.
              <span className="made-with">
                Crafted with{" "}
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <FaHeart className="heart-icon" />
                </motion.span>{" "}
                in India
              </span>
            </motion.p>

            <div className="footer-extra">
              <motion.a
                href="#privacy"
                className="footer-link"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <span className="separator">•</span>
              <motion.a
                href="#terms"
                className="footer-link"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>

          {/* Back to Top Button */}
          <AnimatePresence>
            {isVisible && (
              <motion.button
                className="back-to-top"
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  boxShadow: "0 8px 25px rgba(56, 189, 248, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiArrowUp />
                </motion.div>
                <span className="back-to-top-text">Top</span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="footer-decoration"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.footer>
  );
}
