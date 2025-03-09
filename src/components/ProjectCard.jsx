// src/components/ProjectCard.jsx
import React from "react";
import { Link, Github } from "lucide-react";

function ProjectCard({ title, description, image, altText, website, repo, cardClass }) {
  return (
    <div className={`card ${cardClass}`}>
      <img
        src={image}
        alt={altText}
      />
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="links">
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
          >
            <Link size={32} />
            Visit Website
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={32} />
            See Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;