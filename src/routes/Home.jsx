import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectCards from '../components/ProjectCards'
import Profile from '../components/Profile'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Profile/>
      <ProjectCards/>
      <Footer/>
    </div>
  );
};

export default Home;