import React, { useState, useEffect } from "react";
import "./styles/Hero.css";
import profilePhoto from "../assets/profile.png";

/* Inline SVG icons — same approach as Navbar, no extra packages needed */
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.4-3.88-1.4-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.6v1.64h.05c.5-.95 1.73-1.95 3.56-1.95 3.8 0 4.5 2.5 4.5 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

/* Typing effect hook — types out the text letter by letter */
function useTypingEffect(text, speed = 80, startDelay = 500) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout;
    const startTimeout = setTimeout(() => {
      const tick = () => {
        if (i <= text.length) {
          setDisplay(text.slice(0, i));
          i++;
          timeout = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { display, done };
}

export default function Hero() {
  const { display: typedName, done: nameDone } = useTypingEffect("Gnanamani R", 80, 600);

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        {/* LEFT: intro text */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for new opportunities
          </div>

          <h1 className="hero__title">
            Building interfaces
            <br />
            with <span className="hero__title-accent">intention</span>.
          </h1>

          <p className="hero__subtitle">
            I'm a frontend developer who cares about the details most people scroll past —
            the transition timing, the spacing, the feel. React is my craft.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__cta">
              View my work <ArrowIcon />
            </a>

            <div className="hero__socials">
              <a href="https://github.com/gnanamani-dev" className="hero__icon-btn" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/gnanamani-r-0836a5318/" className="hero__icon-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="gnanamaniraja.r@gmail.com" className="hero__icon-btn" aria-label="Email"><MailIcon /></a>
            </div>
          </div>
        </div>

        {/* RIGHT: terminal-style signature card */}
        <div className="hero__card-wrap">
          <div className="hero__terminal">
            <div className="hero__terminal-header">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__terminal-label">whoami.sh</span>
            </div>

            <div className="hero__terminal-body">
              <div className="hero__line">
                <span className="hero__prompt">➜</span> ~ whoami
              </div>
              <div className="hero__output hero__output--name">
                {typedName}
                {!nameDone && <span className="hero__cursor">▍</span>}
              </div>

              {nameDone && (
                <div className="hero__reveal">
                  <div className="hero__line">
                    <span className="hero__prompt">➜</span> ~ role
                  </div>
                  <div className="hero__output">Frontend Developer</div>

                  <div className="hero__line" style={{ marginTop: 18 }}>
                    <span className="hero__prompt">➜</span> ~ stack
                  </div>
                  <div className="hero__tags">
                    {["React", "JavaScript", "CSS3", "Node.js"].map((t) => (
                      <span key={t} className="hero__tag">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: profile photo */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-glow" />
          <img src={profilePhoto} alt="Your Name" className="hero__photo" />
        </div>
      </div>

      {/* scroll hint */}
      <div className="hero__scroll">
        <span>SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}