import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          A<span className="footer__logo-dot">.</span>M
        </div>

        {/* TODO: replace "Your Name" with your real name */}
        <p className="footer__text">
          © {year} Gnanamani. Built with React.
        </p>

        <div className="footer__links">
          <a href="#home" className="footer__link">Home</a>
          <a href="#about" className="footer__link">About</a>
          <a href="#projects" className="footer__link">Projects</a>
          <a href="#contact" className="footer__link">Contact</a>
        </div>
      </div>
    </footer>
  );
}