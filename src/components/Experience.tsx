
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '../hooks/use-mobile';

const Experience: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mb-12">Work Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experienceData.map((experience, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-portfolio-cyan/10 border-white/5 bg-portfolio-darker/60 backdrop-blur-sm card-hover-rise"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold">{experience.position}</CardTitle>
                  <div className="bg-portfolio-cyan/20 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">
                    {experience.period}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-0">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-portfolio-cyan mr-2" size={18} />
                  <h4 className="text-lg text-gray-300">{experience.company}</h4>
                  
                  {experience.location && (
                    <div className="flex items-center ml-2">
                      <span className="mx-2 text-gray-500">•</span>
                      <MapPin className="text-portfolio-cyan mr-1" size={16} />
                      <span className="text-gray-400 text-sm">{experience.location}</span>
                    </div>
                  )}
                </div>
                
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
                
                {experience.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="flex justify-between pt-4 border-t border-white/5">
                <div className="flex items-center space-x-2">
                  <Briefcase size={16} className="text-portfolio-cyan" />
                  <span className="text-xs text-gray-400">Experience</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-portfolio-cyan" />
                  <span className="text-xs text-gray-400">{experience.period}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
