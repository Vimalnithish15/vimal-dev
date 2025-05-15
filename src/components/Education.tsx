
import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';
import { educationData } from '../data/education';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '../hooks/use-mobile';

const Education: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mb-12">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {educationData.map((education, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-portfolio-purple/10 border-white/5 bg-portfolio-darker/60 backdrop-blur-sm card-hover-rise"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold">{education.institution}</CardTitle>
                  <div className="bg-portfolio-purple/20 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">
                    {education.year}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-0">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-portfolio-purple mr-2" size={18} />
                  <h4 className="text-lg text-gray-300">{education.degree}</h4>
                </div>
                
                <p className="text-gray-400 mb-4">{education.description}</p>
                
                {education.achievements && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {education.achievements.map((achievement, i) => (
                      <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded-full border border-white/10">
                        {achievement}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="flex justify-between pt-4 border-t border-white/5">
                <div className="flex items-center space-x-2">
                  <School size={16} className="text-portfolio-purple" />
                  <span className="text-xs text-gray-400">Education</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-portfolio-purple" />
                  <span className="text-xs text-gray-400">{education.year}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
