import "./Hero.css";
import profileImg from "../assets/image.jpg";

const Home = () => {
  return (
    <section className="hero-modern" id="home">
      {/* Animation Background */}
      <div className="animation-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        
        <div className="data-viz-bg">
          <div className="line-chart"></div>
          <div className="pie-chart"></div>
          <div className="bar-chart">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* Interactive particles for image */}
      <div className="image-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* LEFT CONTENT */}
      <div className="hero-text">
        <h2 className="fade-in">
          Hi, I'm <span>Srushti</span> Bhilare
        </h2>

        <h4 className="fade-in-sub">
          Data Analyst • AI & Machine Learning Enthusiast
        </h4>

        <p className="fade-in-p">
          I transform raw data into meaningful stories that drive decisions.
          Using <em>Python</em>, <em>SQL</em>, <em>Power BI</em>, and{" "}
          <em>Machine Learning</em>, I uncover patterns, predict outcomes, and
          design analytics solutions that answer not just
          <em> what happened</em>, but <em>what will happen next</em>.
        </p>

        <div className="hero-buttons fade-in-button">
          <a href="#projects" className="btn-primary">
            See My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img src={profileImg} alt="Srushti Bhilare" />
      </div>
    </section>
  );
};

export default Home;