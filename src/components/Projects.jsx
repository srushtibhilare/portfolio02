import React from "react";
import "./Projects.css";
import stock from "../assets/stock.png";
import dashboard from "../assets/dashboard.png";
import womensRightsImage from "../assets/project0.png";
import kavyaManchImage from "../assets/project1.png";
import medicalAnalyzerImage from "../assets/project2.png";
import ecommerceImage from "../assets/project3.png";
import taskManagerImage from "../assets/project4.png";
import weatherAppImage from "../assets/project5.png";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiCode,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Stock Market Analysis",
      description:
        "Performed exploratory data analysis on stock market data to identify price trends, moving averages, and volatility. Built interactive dashboards to visualize insights for data-driven investment decisions.",
      image: stock,
      link: "https://stock-ashy-five.vercel.app/",
      repo: "https://github.com/srushtibhilare/trader",
      tech: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib"],
      tags: ["Data Analysis"],
      featured: true,
      icon: <FiStar />,
    },
    {
      title: "Crypto Currency Market Analysis",
      description:
        "Analyzed cryptocurrency market data using Python and PostgreSQL. Performed time-series analysis, calculated KPIs, and built an interactive Power BI dashboard for price trends, volume, and volatility insights.",
      image: dashboard,
      link: "https://github.com/srushtibhilare/Crypto-Market-Analysis",
      repo: "https://github.com/srushtibhilare/Crypto-Market-Analysis",
      tech: ["Python", "PostgreSQL", "Power BI", "Pandas"],
      tags: ["Data Science"],
      featured: true,
      icon: <FiStar />,
    },

    {
      title: "Women's Rights Acts",
      description:
        "Platform documenting global women's rights legislation with interactive maps",
      image: womensRightsImage,
      link: "#",
      repo: "  https://github.com/srushtibhilare/womens-right ",
      tech: ["React", "Speach recognition", "Python"],
      tags: ["Social Impact"],
      featured: true,
      icon: <FiUsers />,
    },
    {
      title: "Efficiency Detector",
      description:
        "detect the efficiency of corp employee which is working from home  React + OpenCv",
      image: kavyaManchImage,
      link: "#",
      repo: "https://github.com/srushtibhilare/efficiency-detector",
      tech: ["React", "Python", "OpenCv"],
      tags: ["Full Stack"],
      featured: true,
      icon: <FiCode />,
    },
    {
      title: "Country tour",
      description:
        "Country tour which will show popular places in all over country",
      image: medicalAnalyzerImage,
      link: "https://www.youtube.com/watch?v=rriTjsJ138U",
      repo: "https://github.com/srushtibhilare/country",
      tech: ["REST API", "React, Node,express"],
      tags: ["REST API"],
      featured: true,
      icon: <FiServer />,
    },
    {
      title: "Elite Edge Fitness",
      description:
        "Designed fitness tracker with BMI calculator and workout logging",
      image: ecommerceImage,
      link: "https://github.com/srushtibhilare/Gym.git",
      repo: "https://github.com/srushtibhilare/Gym",
      tech: ["React", "Django"],
      tags: ["E-commerce"],
      icon: <FiCode />,
    },
    {
      title: "Event Manager",
      description:
        "Created event management platform with Google Maps integration.",
      image: taskManagerImage,
      link: "https://www.youtube.com/watch?v=EyQJNQ0iWsY",
      repo: "https://github.com/srushtibhilare/KING-THE-LAND.git",
      tech: ["Vue.js", "Firebase"],
      tags: ["Productivity"],
      icon: <FiCode />,
    },
    {
      title: "Kavyamanch",
      description: "poem making and also buy books",
      image: weatherAppImage,
      link: "#",
      repo: "https://github.com/srushtibhilare/Kavyamanch",
      tech: ["React", "API"],
      tags: ["API"],
      icon: <FiCode />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Projects
        </motion.h2>

        <motion.div className="project-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="card-inner">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="project-badge">
                      <FiStar className="badge-icon" />
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>
                      {project.icon && (
                        <span className="project-icon">{project.icon}</span>
                      )}
                      {project.title}
                    </h3>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech.includes("React") ? (
                          <FiCode className="tech-icon" />
                        ) : tech.includes("Node") ? (
                          <FiServer className="tech-icon" />
                        ) : null}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                    <a
                      href={project.repo}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
