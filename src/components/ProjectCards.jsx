import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectCardData } from "./Data";

const ProjectCards = () => {
  return (
    <div className="project">
      <h1 className="project-heading">MY PROJECTS</h1>
      <div className="project-container">
        {ProjectCardData.map((item) => (
          <ProjectCard
            image={item.image}
            alt={item.alt}
            title={item.title}
            text={item.text}
            git={item.git}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
