
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design' | 'all';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Someli.ai',
    description: 'AI-Powered Social Media Platform for automated content generation. Integrated CRM systems, analytics, and created responsive interfaces for all devices.',
    technologies: ['React.js', 'Vue.js', 'Nuxt.js', 'Node.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&h=400',
    category: 'web',
    featured: true
  },
  {
    id: '2',
    title: 'NAAM - Fire Safety Product Showcase',
    description: 'A responsive showcase website for fire safety products with smooth animations and interactive displays.',
    technologies: ['React.js', 'Framer Motion', 'CSS3', 'HTML5'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&h=400',
    demoUrl: 'https://naamhseind.com',
    category: 'web',
    featured: true
  },
  {
    id: '3',
    title: 'Kovai Tuition Center',
    description: 'Educational website featuring course catalog with filtering, responsive inquiry forms, and performance optimizations.',
    technologies: ['React.js', 'Framer Motion', 'JavaScript', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=400',
    category: 'web',
    featured: true
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with dark theme, animations, and project showcases.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
    demoUrl: '#',
    githubUrl: '#',
    category: 'web',
    featured: false
  }
];
