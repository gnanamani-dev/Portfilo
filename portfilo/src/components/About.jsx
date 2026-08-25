import React from "react";
import "./styles/About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* Section label */}
        <div className="about__label">
          <span className="about__label-line" />
          About Me
        </div>

        <div className="about__content">
          {/* LEFT: bio text */}
          <div className="about__bio">
            {/* TODO: replace with your real intro line */}
            <h2 className="about__heading">
              A recent graduate turning curiosity into <span className="about__heading-accent">clean, working code</span>.
            </h2>

            <p className="about__paragraph">
              I recently completed my B.E. in Computer Science Engineering at Varuvan Vadivelan
              Institute of Technology, Dharmapuri. Along the way, I found myself drawn to frontend
              development — the mix of logic and design pulled me in. Since then I've been building
              small projects to sharpen my skills in React and modern web development.
            </p>

            <p className="about__paragraph">
              I'm currently based in Bangalore and looking for my first full-time role where I can
              keep learning, work on real products, and grow alongside a good team. Outside of
              coding, I enjoy playing kabaddi.
            </p>
          </div>

          {/* RIGHT: quick facts card */}
          <div className="about__facts">
            <div className="about__facts-card">
              <div className="about__fact">
                <span className="about__fact-label">Status</span>
                <span className="about__fact-value">Fresher / Recent Graduate</span>
              </div>
              <div className="about__fact-divider" />

              <div className="about__fact">
                <span className="about__fact-label">Education</span>
                <span className="about__fact-value">B.E. CSE, Varuvan Vadivelan Institute of Technology</span>
              </div>
              <div className="about__fact-divider" />

              <div className="about__fact">
                <span className="about__fact-label">Location</span>
                <span className="about__fact-value">Bangalore, India</span>
              </div>
              <div className="about__fact-divider" />

              <div className="about__fact">
                <span className="about__fact-label">Looking for</span>
                <span className="about__fact-value">Frontend Developer roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}