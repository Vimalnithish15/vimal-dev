
import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  
  const getActiveCategory = () => {
    return skillCategories.find(category => category.name === activeCategory);
  };
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mb-16">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Skills filter sidebar */}
          <div className="md:col-span-1">
            <div className="glass-card rounded-xl p-4 sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-white">Categories</h3>
              <div className="space-y-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category.name 
                        ? 'bg-gradient-to-r from-portfolio-purple/30 to-portfolio-blue/20 border-l-4 border-portfolio-purple' 
                        : 'hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                  >
                    <category.Icon size={18} className={`mr-3 ${activeCategory === category.name ? 'text-portfolio-purple' : 'text-gray-400'}`} />
                    <span className={activeCategory === category.name ? 'text-white font-medium' : 'text-gray-300'}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills display */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-6 text-white">{activeCategory} Skills</h3>
              <div className="grid grid-cols-1 gap-y-6">
                {getActiveCategory()?.skills.map((skill) => (
                  <HoverCard key={skill.name}>
                    <HoverCardTrigger>
                      <div className="space-y-2 cursor-pointer group">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-lg group-hover:text-portfolio-purple transition-colors">{skill.name}</h4>
                          <span className="bg-portfolio-darker px-2 py-1 rounded-full text-sm text-gray-300 group-hover:bg-portfolio-purple/20 transition-colors">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden group-hover:bg-gray-600 transition-colors">
                          <div 
                            className="h-full bg-gradient-to-r from-portfolio-purple to-portfolio-pink rounded-full group-hover:animate-pulse transition-all"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="glass-card border-portfolio-purple/20 text-white">
                      <div className="p-2">
                        <h4 className="font-bold">{skill.name}</h4>
                        <p className="text-sm text-gray-300 mt-1">Proficiency: {skill.proficiency}%</p>
                        {skill.description && (
                          <p className="text-sm text-gray-400 mt-2">{skill.description}</p>
                        )}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
