import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroAll from "../components/HeroAll";
import PricingCard from "../components/PricingCard";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"PROJECTS"} text={"Some of my recent projects"} />
      <ProjectCard/>
      <PricingCard/>
      <Footer />
    </>
  );
};

export default Project;
