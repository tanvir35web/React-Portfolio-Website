import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroAll from "../components/HeroAll";

const Project = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"PROJECTS"} text={"Some of my recent projects"} />
      <Footer />
    </>
  );
};

export default Project;
