
import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to your resume file path
    link.href = '/resume.pdf';
    // Set the download attribute to suggest a filename
    link.download = 'Vimal_T_Resume.pdf';
    // Append to the document
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 w-full">
            <div className="relative">
              <div className="w-full aspect-square rounded-xl overflow-hidden glass-card p-2">
                {/* <img 
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=600&h=600" 
                  alt="Vimal T" 
                  className="rounded-lg w-full h-full object-cover animate-fade-in"
                /> */}
                 <img 
                  src="pic.webp" 
                  alt="Vimal T" 
                  className="rounded-lg w-full h-full object-cover animate-fade-in"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-hero-gradient rounded-xl p-1 animate-float">
                <div className="bg-portfolio-dark p-3 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <a target="_blank" href="#" className="text-white hover:text-portfolio-purple transition-colors">
                      <Github size={20} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/vimal2003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-portfolio-purple transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a target="_blank" href="mailto:vimal1703t@gmail.com" className="text-white hover:text-portfolio-purple transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <div className="space-y-6 animate-fade-in-right">
              <h3 className="text-2xl font-bold">
                <span className="gradient-text">Full Stack Developer</span> with a passion for creating innovative web solutions
              </h3>
              
              <p className="text-gray-300">
                Hello! I'm Vimal T, a passionate Full Stack Developer based in Nagercoil, Tamil Nadu. I specialize in creating responsive web applications with a focus on both front-end and back-end technologies.
              </p>
              
              <p className="text-gray-300">
                With hands-on experience in the industry, I've worked with various technologies including React.js, Vue.js, Node.js, and MySQL to deliver high-quality products that solve real-world problems. My approach combines technical expertise with creative problem-solving to create intuitive digital experiences.
              </p>
              
              <p className="text-gray-300">
                I'm particularly interested in AI-driven applications and have contributed to developing content generation features. I'm always eager to take on new challenges and continue growing as a developer.
              </p>
              
              <div className="pt-4">
                <button 
                  onClick={handleResumeDownload}
                  className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white shadow-lg shadow-portfolio-purple/20 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 hover:scale-105 flex items-center"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
