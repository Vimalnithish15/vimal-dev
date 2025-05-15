
export interface Experience {
  position: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experienceData: Experience[] = [
  {
    position: "Full Stack Developer",
    company: "Mitz & Fritz Private Limited",
    period: "June 2024 - Present",
    location: "Tamil Nadu, India",
    responsibilities: [
      "Developing full-stack solutions for Someli.ai, a social media platform leveraging AI for automated content generation",
      "Implementing responsive frontend interfaces using React.js, Vue.js, and Nuxt.js",
      "Building robust backend systems with Node.js",
      "Integrating third-party services: CRM, Impact tracking, Google Tag Manager (GTM)",
      "Optimizing API endpoints and database queries",
      "Contributing to AI-driven content generation features",
      "Collaborating with cross-functional teams for seamless frontend-backend integration"
    ],
    technologies: ["React.js", "Vue.js", "Nuxt.js", "Node.js", "Express.js", "MySQL", "RESTful APIs", "Git"]
  }
];
