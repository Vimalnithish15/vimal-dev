
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import Education from '../components/Education';
import Experience from '../components/Experience';

const Index = () => {
  // Add a scroll reveal effect that doesn't hide elements after they've been shown
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class but don't remove it when element goes out of view
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          // Unobserve after animation has been applied
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-portfolio-dark text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      
      <div className="reveal opacity-0">
        <About />
      </div>
      
      <div className="reveal opacity-0">
        <Education />
      </div>
      
      <div className="reveal opacity-0">
        <Experience />
      </div>
      
      <div className="reveal opacity-0">
        <Skills />
      </div>
      
      <div className="reveal opacity-0">
        <Projects />
      </div>
      
      <div className="reveal opacity-0">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
