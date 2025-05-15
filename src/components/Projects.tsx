
import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';

type ProjectCategory = 'all' | 'web';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' }
  ];
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mb-6">My Projects</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here's a selection of my recent work. Each project represents challenges I've tackled and solutions I've implemented.
        </p>
        
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white shadow-lg shadow-portfolio-purple/20'
                  : 'bg-portfolio-darker/80 text-gray-400 border border-transparent hover:border-white/20 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            className="px-6 py-3 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 hover:scale-105"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
