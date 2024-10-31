// src/App.js
import React from 'react';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Gallery /> 
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
