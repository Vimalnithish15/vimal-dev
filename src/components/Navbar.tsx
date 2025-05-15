
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Book, Folder, MessageCircle, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vimal_T_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-darker/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-hero-gradient">Vimal.dev</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
            <Home size={16} />
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
            <User size={16} />
            <span>About</span>
          </button>
          <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
            <Book size={16} />
            <span>Education</span>
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
            <Briefcase size={16} />
            <span>Experience</span>
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
            <Code size={16} />
            <span>Skills</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
            <Folder size={16} />
            <span>Projects</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white shadow-lg shadow-portfolio-purple/20 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 hover:scale-105 flex items-center space-x-1">
            <MessageCircle size={16} />
            <span>Contact</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-portfolio-darker/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 py-8 space-y-6 flex flex-col items-center">
          <button onClick={() => scrollToSection('home')} className="text-xl text-gray-300 hover:text-white transition-colors w-full py-2 flex items-center justify-center space-x-2">
            <Home size={20} />
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className="text-xl text-gray-300 hover:text-white transition-colors w-full py-2 flex items-center justify-center space-x-2">
            <User size={20} />
            <span>About</span>
          </button>
          <button onClick={() => scrollToSection('education')} className="text-xl text-gray-300 hover:text-white transition-colors w-full py-2 flex items-center justify-center space-x-2">
            <Book size={20} />
            <span>Education</span>
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-xl text-gray-300 hover:text-white transition-colors w-full py-2 flex items-center justify-center space-x-2">
            <Briefcase size={20} />
            <span>Experience</span>
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-xl text-gray-300 hover:text-white transition-colors w-full py-2 flex items-center justify-center space-x-2">
            <Code size={20} />
            <span>Skills</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-xl text-gray-300 hover:text-white transition-colors w-full py-2 flex items-center justify-center space-x-2">
            <Folder size={20} />
            <span>Projects</span>
          </button>
          <button 
            onClick={handleResumeDownload}
            className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white shadow-lg shadow-portfolio-purple/20 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 hover:scale-105 w-full flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Resume</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white shadow-lg shadow-portfolio-purple/20 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 hover:scale-105 w-full flex items-center justify-center space-x-2">
            <MessageCircle size={20} />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
