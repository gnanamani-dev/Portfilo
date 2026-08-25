import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

/* Simple inline SVG icons — no extra package needed */
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle background + blur once the user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          R<span className="navbar__logo-dot">.</span>G
        </div>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="navbar__link">
              {link}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a href="#contact" className="navbar__cta">
          Let's talk <ArrowIcon />
        </a>

        {/* Mobile menu toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="navbar__mobile-link">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}