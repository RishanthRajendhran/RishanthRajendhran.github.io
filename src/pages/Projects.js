import React from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p=>(
          <div className="project-card" key={p.title}>
            <h3>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
            </h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="more-btn">
        <a href="https://github.com/RishanthRajendhran" target="_blank" rel="noopener noreferrer">
          See more on GitHub →
        </a>
      </div>
    </div>
  );
}