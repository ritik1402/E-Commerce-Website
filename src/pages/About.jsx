import React from "react";
import '../styles/About.css'
import mission from '../assets/mission.jpg'
const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your one-stop solution for amazing products and services.</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <img src={mission} alt="Mission" />
          <h2>Our Mission</h2>
          <p>We strive to provide the best quality products at affordable prices.</p>
        </div>

        <div className="about-card">
          <img src={mission} alt="Vision" />
          <h2>Our Vision</h2>
          <p>To be the leading e-commerce platform that people trust.</p>
        </div>

        <div className="about-card">
          <img src={mission} alt="Team" />
          <h2>Our Team</h2>
          <p>A team of passionate developers, designers, and marketers working together.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
