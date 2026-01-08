import React from "react";
import "./Hero.css";
import profile from "../assets/image.jpg";

const Hero = () => {
  return (
    <section className="hero-modern">
      <div className="hero-text">
        <h2 className="fade-in">Hi, I’m Srushti Bhilare</h2>
        <h4 className="fade-in-sub">Data Analyst Enthusiast</h4>

        <p className="fade-in-p">
          I am a Data Analyst skilled in Python, SQL, Excel, Power BI, and Tableau,
          with strong experience in data cleaning, exploratory data analysis, and
          dashboard development. I enjoy transforming raw data into meaningful
          insights that support data-driven decision-making. My interests also
          include machine learning, statistical analysis, and building analytical
          solutions that solve real-world problems.
        </p>

        <div className="play-button fade-in-button">▶</div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Srushti Bhilare Profile" />
      </div>
    </section>
  );
};

export default Hero;
