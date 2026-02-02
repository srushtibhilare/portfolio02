import React from "react";
import "./Certification.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const hackathons = [
  "Code for Bharat 2.0 – National Hackathon",
  "Envision – Software Hackathon",
  "InsureBot Quest 2025 – Conversational Bot Hackathon",
  "All AI Tools Tech Challenge",
];

const quizzes = [
  "TATA Crucible Quiz",
  "Online Technical Quiz",
  "DSA Quiz and Coding Competition",
  "Adobe Coding Challenge",
];

const certifications = [
  "SQL Basic",
  "SQL Intermediate",
  "SQL Advanced",
  "Python Basics",
];

const Certifications = () => {
  const renderSwiper = (data) => (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="cert-swiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="cert-card">
            <p>{item}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="certifications-section">
      <h2 className="cert-title">Certifications & Achievements</h2>

      <div className="cert-block">
        {renderSwiper(hackathons)}
      </div>

      <div className="cert-block">
        {renderSwiper(quizzes)}
      </div>

      <div className="cert-block">
        {renderSwiper(certifications)}
      </div>

      <div className="profile-links">
        <a
          href="https://leetcode.com/u/2_red/"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode Profile
        </a>

        <a
          href="https://github.com/srushtibhilare"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Certifications;
