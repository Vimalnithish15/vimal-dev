
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Layers, Eye } from 'lucide-react';
import { Project } from '../data/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);
  
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-portfolio-purple/10 border-white/5 bg-portfolio-darker/60 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
          {project.featured && (
            <div className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-0">
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-white/5 px-2 py-1 rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-4 border-t border-white/5">
        <div className="flex space-x-2">
          <HoverCard>
            <HoverCardTrigger asChild>
              <button 
                className="bg-portfolio-darker p-2 rounded-full hover:bg-portfolio-purple hover:text-white transition-colors"
                onMouseEnter={() => setIsPreviewHovered(true)}
                onMouseLeave={() => setIsPreviewHovered(false)}
              >
                <Eye size={18} />
              </button>
            </HoverCardTrigger>
            <HoverCardContent 
              className="w-64 p-0 border-portfolio-purple/20 overflow-hidden z-50"
              side="top"
              align="start"
              sideOffset={5}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            </HoverCardContent>
          </HoverCard>
          
          <div className="flex items-center space-x-2">
            <Code size={16} className="text-gray-400" />
            <span className="text-xs text-gray-400">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-darker p-2 rounded-full hover:bg-portfolio-purple hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-darker p-2 rounded-full hover:bg-portfolio-purple hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
