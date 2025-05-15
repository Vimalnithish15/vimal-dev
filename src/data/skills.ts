
import { Code, Palette, LayoutDashboard, Server, Database, Globe, Smartphone, Rocket } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  name: string;
  Icon: LucideIcon;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 1-100
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    Icon: Code,
    skills: [
      { name: 'React.js', proficiency: 90, description: 'Building complex, state-driven user interfaces with modern React patterns including hooks and context.' },
      { name: 'Vue.js', proficiency: 85, description: 'Developing interactive UI components and single-page applications with Vue.js framework.' },
      { name: 'Nuxt.js', proficiency: 80, description: 'Creating server-side rendered Vue.js applications with improved SEO and performance.' },
      { name: 'HTML5/CSS3', proficiency: 90, description: 'Semantic markup, responsive design, and modern CSS features like Grid, Flexbox and CSS variables.' },
      { name: 'JavaScript/ES6+', proficiency: 85, description: 'Modern JavaScript with ES6+ features, async programming, and browser APIs.' }
    ]
  },
  {
    name: 'Backend',
    Icon: Server,
    skills: [
      { name: 'Node.js', proficiency: 85, description: 'Building scalable server-side applications and REST APIs with Express.js and other Node frameworks.' },
      { name: 'Express.js', proficiency: 85, description: 'Creating robust API endpoints, middleware implementation, and route management.' },
      { name: 'RESTful APIs', proficiency: 90, description: 'Designing and implementing RESTful services with proper status codes, authentication, and documentation.' },
      { name: 'API Integration', proficiency: 85, description: 'Integrating third-party APIs and services into applications.' }
    ]
  },
  {
    name: 'Database',
    Icon: Database,
    skills: [
      { name: 'MySQL', proficiency: 85, description: 'Database design, complex queries, performance optimization, and integration with Node.js applications.' }
    ]
  },
  {
    name: 'Development Tools',
    Icon: Rocket,
    skills: [
      { name: 'Git', proficiency: 90, description: 'Version control, branching strategies, and collaborative development workflows.' },
      { name: 'GitHub', proficiency: 85, description: 'Repository management, pull requests, issue tracking, and project collaboration.' },
      { name: 'VS Code', proficiency: 95, description: 'Efficient code editing with extensions and customizations for optimal development workflow.' },
      { name: 'npm/yarn', proficiency: 90, description: 'Package management for JavaScript projects, dependency management, and scripts.' },
      { name: 'Postman', proficiency: 85, description: 'API testing, documentation, and automation for backend development.' }
    ]
  },
  {
    name: 'Integrations',
    Icon: Globe,
    skills: [
      { name: 'CRM Systems', proficiency: 80, description: 'Integration of Customer Relationship Management systems with web applications.' },
      { name: 'Google Tag Manager', proficiency: 75, description: 'Implementation of GTM for analytics and marketing tags management.' },
      { name: 'Impact Tracking', proficiency: 75, description: 'Implementation of marketing and performance tracking solutions.' }
    ]
  }
];
