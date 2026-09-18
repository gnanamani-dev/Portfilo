import React from "react";
import "./styles/Projects.css";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png"

/* TODO: replace with your real projects.
   Add or remove objects from this array — the grid adjusts automatically. */
const PROJECTS = [
  {
    title: "Student Management System",
    description: "A full-stack web app to manage student records, built with a React + Tailwind CSS frontend and a Django + MySQL backend handling authentication and data.",
    tech: ["React", "Tailwind CSS", "Django", "MySQL"],
    liveUrl: "https://my-fullstack-project-dh0nf45qf-gnanamani-devs-projects.vercel.app/",
    githubUrl: "https://github.com/gnanamani-dev/-my-fullstack-project",
    image: project1Image,
  },
  {
    title: "Project Two",
    description: "A short 1-2 line description of what this project does and the problem it solves.",
    tech: ["Html","Css", "JavaScript"],
    liveUrl: "https://home-grocery-project-eivbwp908-gnanamani-devs-projects.vercel.app/",
    githubUrl: "https://github.com/gnanamani-dev/Home-Grocery-project",
    image:project2Image,
  },
  {
    title: "Project Three",
    description: "A short 1-2 line description of what this project does and the problem it solves.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    image: null,
  },
];

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.4-3.88-1.4-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <div className="projects__label">
          <span className="projects__label-line" />
          Projects
        </div>

        <h2 className="projects__heading">
          Things I've <span className="projects__heading-accent">built</span>.
        </h2>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <div key={project.title} className="projects__card">
              {/* Image placeholder — swap for a real screenshot */}
              <div className="projects__image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span className="projects__image-placeholder">Add screenshot</span>
                )}
              </div>

              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="projects__links">
                  <a
                    href={project.liveUrl}
                    className="projects__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    className="projects__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}