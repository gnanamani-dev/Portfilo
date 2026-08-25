import React, { useState } from "react";
import "./styles/Contact.css";

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect this to a real email service (e.g. EmailJS, Formspree)
    // For now this just shows a "sent" confirmation locally.
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__label">
          <span className="contact__label-line" />
          Contact
        </div>

        <h2 className="contact__heading">
          Let's build something <span className="contact__heading-accent">great together</span>.
        </h2>

        <p className="contact__subtitle">
          I'm currently open to new opportunities. Reach out directly, or send me a message below.
        </p>

        <div className="contact__content">
          {/* LEFT: direct contact links */}
          <div className="contact__direct">
            {/* TODO: replace with your real email/links */}
            <a href="gnanamaniraja.r@gmail.com" className="contact__direct-link">
              <MailIcon />
              <span>gnanamaniraja.r@gmail.com</span>
            </a>
            <a href="https://github.com/gnanamani-dev" className="contact__direct-link" target="_blank" rel="noreferrer">
              <GithubIcon />
              <span>github.com/gnanamani-dev</span>
            </a>
            <a href="https://www.linkedin.com/in/gnanamani-r-0836a5318/" className="contact__direct-link" target="_blank" rel="noreferrer">
              <LinkedinIcon />
              <span>linkedin.com/in/gnanamani-r-0836a5318/</span>
            </a>
          </div>

          {/* RIGHT: contact form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity..."
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              {sent ? "Message noted ✓" : "Send Message"}
            </button>

            {sent && (
              <p className="contact__note">
                (This form isn't connected to email yet — see the TODO in Contact.jsx)
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}