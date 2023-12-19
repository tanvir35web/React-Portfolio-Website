import "./ProjectCardStyle.css";
import React from "react";
import projectImg1 from "../assets/project1.png";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="projects-card">
      <div className="project-img">
        <img src={projectImg1} alt="Project Image - 1" />
      </div>
      <h2>Project-1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quam?
      </p>
      <div className="project-button">
        <Link to="/" className="project-btn">
          Live Demo
        </Link>
        <Link to="/" className="project-btn">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
