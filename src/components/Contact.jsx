import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaMapMarkerAlt, FaPhone, FaClock, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Create floating particles
  useEffect(() => {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
      particlesContainer.appendChild(particle);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="contact">
      <div className="contact-bg-grid"></div>
      <div className="floating-particles"></div>
      
      {showSuccess && (
        <div className="success-message">
          Message sent successfully! 🚀
        </div>
      )}

      <div className="contact-container">
        <div className="title-wrapper">
          <div className="title-decoration"></div>
          <h1 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <div className="underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <div className="form-header-icon">
                  <FaComment />
                </div>
                <h2>Send a Message</h2>
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <label className="input-label">Your Name</label>
                <div className="input-underline"></div>
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  className="form-input"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <label className="input-label">Email Address</label>
                <div className="input-underline"></div>
              </div>

              <div className="input-group textarea-group">
                <div className="input-icon">
                  <FaComment />
                </div>
                <textarea
                  className="form-textarea"
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <label className="input-label">Your Message</label>
                <div className="input-underline"></div>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading">Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="submit-btn-icon">
                      <FaPaperPlane />
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-card-content">
                  <h3 className="info-title">Contact Information</h3>
                  <p className="info-description">
                    Feel free to reach out through any of these channels
                  </p>

                  <div className="contact-details">
                    <div className="detail-item">
                      <div className="detail-icon-wrapper">
                        <FaMapMarkerAlt className="detail-icon" />
                      </div>
                      <span>Pune, Maharashtra</span>
                    </div>

                    <div className="detail-item">
                      <div className="detail-icon-wrapper">
                        <FaPhone className="detail-icon" />
                      </div>
                      <span>+91 8669198454</span>
                    </div>

                    <div className="detail-item">
                      <div className="detail-icon-wrapper">
                        <FaEnvelope className="detail-icon" />
                      </div>
                      <span>srushti29bhilare@gmail.com.com</span>
                    </div>

                    <div className="detail-item">
                      <div className="detail-icon-wrapper">
                        <FaClock className="detail-icon" />
                      </div>
                      <span>Mon-Fri 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>

                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/srushti-bhilare/" className="social-link" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/srushtibhilare" className="social-link" aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;