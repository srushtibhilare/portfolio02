import React, { useEffect, useState } from "react";
import "./About.css";
import { 
  FaPython, FaDatabase, FaChartBar, FaSearch,
  FaReact, FaJs, FaHtml5, FaNodeJs, FaGitAlt, FaCuttlefish
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiCplusplus } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const skillIcons = {
  "Python (Data Analysis, NLP)": <FaPython />,
  "SQL (Analytics & Queries)": <FaDatabase />,
  "Power BI / Data Visualization": <FaChartBar />,
  "Data Analysis & EDA": <FaSearch />,
  "React.js": <FaReact />,
  "JavaScript (ES6+)": <FaJs />,
  "HTML5 / CSS3": <FaHtml5 />,
  "Node.js & Express": <FaNodeJs />,
  "Databases (MongoDB / PostgreSQL)": <SiMongodb />,
  "C++ (DSA)": <SiCplusplus />,
  "Git & GitHub": <FaGitAlt />,
};

const dataGroupOne = [
  { name: "Python (Data Analysis, NLP)", level: 90, color: "#4932ce" },
  { name: "SQL (Analytics & Queries)", level: 88, color: "#4d24c8" },
  { name: "Power BI / Data Visualization", level: 85, color: "#6a55c9" },
  { name: "Data Analysis & EDA", level: 90, color: "#a18bef" },
];

const dataGroupTwo = [
  { name: "React.js", level: 85, color: "#2807e9" },
  { name: "JavaScript (ES6+)", level: 85, color: "#5061df" },
  { name: "HTML5 / CSS3", level: 90, color: "#4031c4" },
  { name: "Node.js & Express", level: 78, color: "#3720b6" },
  { name: "Databases (MongoDB / PostgreSQL)", level: 60, color: "#3e2bb8" },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Create floating bubbles
    const newBubbles = Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setBubbles(newBubbles);

    // Trigger animation
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const refreshAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 100);
  };

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div 
        className="skill" 
        key={index}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="skill-header">
          <div className="skill-title">
            <span className="skill-icon">
              {skillIcons[skill.name] || <FaDatabase />}
            </span>
            <span>{skill.name}</span>
          </div>
          <div className="skill-percentage">
            <span className="percentage-number">
              {animate ? `${skill.level}%` : "0%"}
            </span>
            <div className="percentage-bar">
              <div 
                className="percentage-fill"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        </div>

        <div className="skill-bar-container">
          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{
                width: animate ? `${skill.level}%` : "0%",
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                boxShadow: `0 0 20px ${skill.color}40`
              }}
            >
              <span className="progress-glow"></span>
            </div>
          </div>
          <div className="skill-dots">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="dot"></span>
            ))}
          </div>
        </div>
      </div>
    ));

  return (
    <section className="skills-section" onClick={refreshAnimation}>
      {/* Floating Bubbles Background */}
      <div className="bubbles-container">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`
            }}
          />
        ))}
      </div>

      {/* Glitch Effect Title */}
      <div className="section-header">
        <h2 className="glitch" data-text="Technical Skills">
          Technical Skills
        </h2>
       
      </div>

      <div className="skills-grid">
        <div className="skills-card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <h3>Data & Analytics</h3>
          </div>
          <div className="skills-list">
            {renderSkills(dataGroupOne)}
          </div>
        </div>

        <div className="skills-card">
          <div className="card-header">
            <div className="card-icon">💻</div>
            <h3>Development & Tools</h3>
          </div>
          <div className="skills-list">
            {renderSkills(dataGroupTwo)}
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="skills-stats">
        <div className="stat-item">
          <div className="stat-number">13+</div>
          <div className="stat-label">Skills</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">85%</div>
          <div className="stat-label">Avg. Proficiency</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">2</div>
          <div className="stat-label">Categories</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;