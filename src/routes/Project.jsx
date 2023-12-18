import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroAll from "../components/HeroAll";
import PricingCard from "../components/PricingCard";

const Project = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"PROJECTS"} text={"Some of my recent projects"} />
      <PricingCard/>
      <Footer />
    </>
  );
};

export default Project;
