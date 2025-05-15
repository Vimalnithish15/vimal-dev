
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const phrases = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Problem Solver'];

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        // Finished typing the phrase, pause before deleting
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayedText === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(100);
      } else if (isDeleting) {
        // Deleting characters
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      } else {
        // Typing characters
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayedText, currentPhraseIndex, isDeleting, typingSpeed]);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-hero-gradient">Vimal T</span>
          </h1>
          <div className="text-xl md:text-3xl mb-8 h-10">
            I'm a <span className="text-transparent bg-clip-text bg-hero-gradient">{displayedText}</span>
            <span className="text-white animate-pulse-subtle">|</span>
          </div>
          <p className="text-gray-300 text-lg md:text-xl mb-10 animate-fade-in">
            Results-driven Full Stack Developer with expertise in both front-end and back-end development.
            Passionate about building responsive web applications and optimizing user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white shadow-lg shadow-portfolio-purple/20 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 hover:scale-105" onClick={scrollToProjects}>
              View My Work
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
