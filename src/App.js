import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Services from './components/Services';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Gallery />
        <Services />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
