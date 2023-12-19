import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  return (
    <div className="project">
      <h1 className="project-heading">MY PROJECTS</h1>
      <div className="project-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectCards;
