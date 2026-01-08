import React from "react";
import "./About.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaCuttlefish,
  FaDatabase,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Skills Section */}
        <div className="about-card">
          <h2 className="about-title">Skills</h2>
          <p className="about-text">
            I have a strong interest in programming, problem-solving, and data-driven
            development. My skill set includes web technologies, data structures,
            and Python-based data analysis. I enjoy building scalable, responsive,
            and user-friendly applications.
          </p>

          <div className="skills-icons">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaReact title="React.js" />
            <FaNodeJs title="Node.js" />
            <FaPython title="Python & Libraries" />
            <FaCuttlefish title="C/C++ (DSA)" />
            <FaDatabase title="Databases (MongoDB / SQL)" />
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-card">
          <h2 className="about-title">Experience</h2>
          <p className="about-text">
            I have hands-on experience working with MERN stack applications,
            developing RESTful APIs, and integrating backend services with
            frontend interfaces. I have also worked with Python libraries such as
            NumPy, Pandas, and Matplotlib for data analysis and visualization,
            along with solving DSA problems using C++.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
