import React, { useRef, useEffect } from "react";
import "./Projects.css";

/* ================= PROJECT IMAGES ================= */
import cripto from "../assets/cripto.png";
import stock from "../assets/stock.png";
import dashboard from "../assets/dashboard.png";
import womensRightsImage from "../assets/project0.png";
import kavyaManchImage from "../assets/project1.png";
import medicalAnalyzerImage from "../assets/project2.png";
import ecommerceImage from "../assets/project3.png";
import taskManagerImage from "../assets/project4.png";
import weatherAppImage from "../assets/project5.png";

/* ================= CERTIFICATE IMAGES ================= */
import codeForBharat from "../assets/code_for_bharat.png";
import tataCrucible from "../assets/tata_crucible.png";
import envisionHackathon from "../assets/envision_hackathon.png";
import allAiTools from "../assets/all_ai_tools.png";
import insureBot from "../assets/insurebot_quest.png";
import dsaQuiz from "../assets/dsa_quiz.png";
import adobeChallenge from "../assets/adobe_challenge.png";
import sqlBasic from "../assets/sql_basic.png";
import sqlIntermediate from "../assets/sql_intermediate.png";
import sqlAdvanced from "../assets/sql_advanced.png";
import pythonBasics from "../assets/python_basics.png";


import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiCode,
  FiServer,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";


import { motion } from "framer-motion";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

export default function Projects() {
  const canvasRef = useRef(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    
    class Bubble {
      constructor() {
        this.radius = Math.random() * 20 + 5;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + this.radius;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = `rgba(56, 189, 248, ${this.opacity})`;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
      }
      
      update() {
        this.y -= this.speedY;
        this.x += Math.sin(this.wobble) * 0.3;
        this.wobble += this.wobbleSpeed;
        
        if (this.y < -this.radius) {
          this.y = canvas.height + this.radius;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 1.5, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x, this.y, this.radius,
          this.x, this.y, this.radius * 1.5
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(205, 205, 220, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
    
    // Create bubbles
    const bubbles = Array.from({ length: 15 }, () => new Bubble());
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* ================= PROJECT DATA ================= */
  const projects = [

    {
  title: "Amazon Review Recommendation Engine",
  description:
    "50K+ Amazon reviews. Implemented an automated ETL pipeline and an interactive Power BI dashboard with sentiment analysis and top-5 product recommendations",
  image: cripto, // you can replace with amazon/nlp themed image if available
  link: "https://github.com/srushtibhilare/future-price-pridiction",
  repo: "https://github.com/srushtibhilare/future-price-pridiction",
  tech: ["Python", "NLP", "TF-IDF", "Cosine Similarity", "Power BI", "Pandas"],
  tags: ["NLP", "Data Analysis", "Recommendation System", "Featured"],
  featured: true,
  icon: <FiTrendingUp />,
  accent: "#10B981"
},





    {
      title: "Stock Market Analysis",
      description: "Performed exploratory data analysis on stock market data to identify trends, moving averages, and volatility with interactive dashboards.",
      image: stock,
      link: "https://stock-ashy-five.vercel.app/",
      repo: "https://github.com/srushtibhilare/trader",
      tech: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib"],
      tags: ["Data Analysis", "Featured"],
      featured: true,
      icon: <FiTrendingUp />,
      accent: "#10B981"
    },
    {
      title: "Crypto Currency Market Analysis",
      description: "Analyzed crypto market data using Python and PostgreSQL with KPI computation and Power BI dashboards.",
      image: dashboard,
      link: "https://github.com/srushtibhilare/Crypto-Market-Analysis",
      repo: "https://github.com/srushtibhilare/Crypto-Market-Analysis",
      tech: ["Python", "PostgreSQL", "Power BI", "Data Visualization"],
      tags: ["Data Science", "Featured"],
      featured: true,
      icon: <FiTrendingUp />,
      accent: "#F59E0B"
    },
    {
      title: "Women's Rights Acts",
      description: "AI-powered platform documenting global women's rights with voice assistance and multilingual support.",
      image: womensRightsImage,
      link: "#",
      repo: "https://github.com/srushtibhilare/womens-right",
      tech: ["React", "Speech Recognition", "Python", "AI"],
      tags: ["Social Impact"],
      featured: true,
      icon: <FiUsers />,
      accent: "#EC4899"
    },
    {
      title: "Efficiency Detector",
      description: "Employee efficiency detection system using React, Python, and OpenCV with real-time analytics.",
      image: kavyaManchImage,
      link: "#",
      repo: "https://github.com/srushtibhilare/efficiency-detector",
      tech: ["React", "Python", "OpenCV", "Machine Learning"],
      tags: ["Full Stack"],
      featured: true,
      icon: <FiZap />,
      accent: "#3B82F6"
    },
    {
      title: "Country Tour",
      description: "Travel information web app showing popular destinations using REST APIs with interactive maps.",
      image: medicalAnalyzerImage,
      link: "https://www.youtube.com/watch?v=rriTjsJ138U",
      repo: "https://github.com/srushtibhilare/country",
      tech: ["React", "Node.js", "Express", "REST API", "Mapbox"],
      tags: ["REST API"],
      featured: true,
      icon: <FiServer />,
      accent: "#8B5CF6"
    },
    {
      title: "Elite Edge Fitness",
      description: "Fitness tracker with BMI calculator, workout management, and progress tracking.",
      image: ecommerceImage,
      link: "#",
      repo: "https://github.com/srushtibhilare/Gym",
      tech: ["React", "Django", "Chart.js", "JWT"],
      tags: ["Health & Fitness"],
      icon: <FiCode />,
      accent: "#EF4444"
    },
    {
      title: "Event Manager",
      description: "Event management platform with Google Maps integration and real-time notifications.",
      image: taskManagerImage,
      link: "https://www.youtube.com/watch?v=EyQJNQ0iWsY",
      repo: "https://github.com/srushtibhilare/KING-THE-LAND.git",
      tech: ["Vue.js", "Firebase", "Google Maps API", "WebSockets"],
      tags: ["Productivity"],
      icon: <FiCode />,
      accent: "#14B8A6"
    },
    {
      title: "KavyaManch",
      description: "Poetry creation and book purchasing platform with community features.",
      image: weatherAppImage,
      link: "#",
      repo: "https://github.com/srushtibhilare/Kavyamanch",
      tech: ["React", "API", "Stripe", "Cloudinary"],
      tags: ["Creative"],
      icon: <FiCode />,
      accent: "#F97316"
    },
  ];

  /* ================= CERTIFICATION DATA ================= */
  const hackathons = [
    { title: "Code for Bharat 2.0", image: codeForBharat, type: "Hackathon" },
    { title: "Envision Software Hackathon", image: envisionHackathon, type: "Hackathon" },
    { title: "InsureBot Quest 2025", image: insureBot, type: "Hackathon" },
    { title: "All AI Tools Tech Challenge", image: allAiTools, type: "Tech Challenge" },
  ];

  const quizzes = [
    { title: "TATA Crucible Quiz", image: tataCrucible, type: "Business Quiz" },
    { title: "DSA Quiz & Coding Competition", image: dsaQuiz, type: "Coding Competition" },
    { title: "Adobe Coding Challenge", image: adobeChallenge, type: "Coding Challenge" },
  ];

  const certifications = [
    { title: "SQL Basic", image: sqlBasic, type: "Database" },
    { title: "SQL Intermediate", image: sqlIntermediate, type: "Database" },
    { title: "SQL Advanced", image: sqlAdvanced, type: "Database" },
    { title: "Python Basics", image: pythonBasics, type: "Programming" },
  ];

  /* ================= ANIMATION VARIANTS ================= */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] 
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  /* ================= SWIPER COMPONENT ================= */
  const renderSwiper = (data, title) => (
    <div className="swiper-section">
      <h3 className="swiper-title">{title}</h3>
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        className="cert-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className="cert-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="cert-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                />
                <div className="cert-overlay">
                  <span className="cert-type">{item.type}</span>
                  <FiAward className="cert-icon" />
                </div>
              </div>
              <div className="cert-content">
                <h4>{item.title}</h4>
                <span className="cert-badge">{item.type}</span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <canvas 
        ref={canvasRef} 
        className="bubble-canvas"
      />
      
      <motion.div 
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        
        <motion.div className="section-header" variants={itemVariants}>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <FiCode className="header-icon" />
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">
            <span className="title-highlight"></span> Projects & Portfolio
          </h2>
          <p className="section-subtitle">
            Showcasing my journey through innovative solutions and technical achievements
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div 
                className="project-card-inner"
                variants={cardHoverVariants}
                style={{ '--accent-color': project.accent }}
              >
                {/* Project Image */}
                <div className="project-image-wrapper">
                  <div className="project-gradient"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="project-badge">
                      <FiStar />
                      <span>Featured</span>
                    </div>
                  )}
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-icon">{project.icon}</div>
                    <h3>{project.title}</h3>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-footer">
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a 
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div className="certifications-section" variants={itemVariants}>
          <div className="section-header">
            <div className="header-decoration">
              <div className="decoration-line"></div>
              <FiAward className="header-icon" />
              <div className="decoration-line"></div>
            </div>
            <h2 className="section-title">
              <span className="title-highlight"></span>Certifications & Achievements
            </h2>
          </div>

          <div className="certifications-container">
            {renderSwiper(hackathons, "Hackathons & Competitions")}
            {renderSwiper(quizzes, "Quizzes & Challenges")}
            {renderSwiper(certifications, "Professional Certifications")}
          </div>
        </motion.div>

        {/* Profile Links */}
        <motion.div 
          className="profile-links-section"
          variants={itemVariants}
        >
          <div className="profile-links">
            <motion.a 
              href="https://leetcode.com/u/2_red/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-text">LeetCode Profile</span>
              <span className="link-stats">500+ Problems</span>
            </motion.a>
            
            <div className="link-divider"></div>
            
            <motion.a 
              href="https://github.com/srushtibhilare"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-text">GitHub Profile</span>
              <span className="link-stats">50+ Repositories</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}