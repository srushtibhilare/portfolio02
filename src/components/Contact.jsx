import React, { useRef } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In <span className="highlight">Touch</span>
        </motion.h2>

        <motion.p className="section-subtitle" variants={itemVariants}>
          Let’s connect! Whether it’s a project, opportunity, or collaboration.
        </motion.p>

        <div className="contact-grid">
          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            variants={itemVariants}
          >
            <div className="input-group">
              <FiUser className="input-icon" />
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <FiMail className="input-icon" />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-group textarea-group">
              <FiMessageSquare className="input-icon" />
              <textarea placeholder="Your Message" required />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FiSend />
            </motion.button>
          </motion.form>

          {/* INFO */}
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-card">
              <h3>Contact Info</h3>
              <p>
                I’m always open to discussing data projects, internships,
                collaborations, or tech ideas.
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/srushti-bhilare/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/srushtibhilare"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
