import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectCards from '../components/ProjectCards'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ProjectCards/>
      <Footer/>
    </div>
  );
};

export default Home;