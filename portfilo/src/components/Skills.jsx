import React from "react";
import "./styles/Skills.css";

/* TODO: replace these with your real skills — grouped by category */
const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS","Boost Strap", "CSS Modules", "Responsive Design"],
  },
  {
    category: "Tools",
    skills: ["Git & GitHub", "VS Code", "npm"],
  },
  {
    category: "Currently Learning",
    skills: ["Node.js", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <div className="skills__label">
          <span className="skills__label-line" />
          Skills
        </div>

        <h2 className="skills__heading">
          Tools I use to bring <span className="skills__heading-accent">ideas to life</span>.
        </h2>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__card-title">{group.category}</h3>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}