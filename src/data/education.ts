
export interface Education {
  institution: string;
  degree: string;
  year: string;
  description: string;
  achievements?: string[];
}

export const educationData: Education[] = [
  {
    institution: "Sri Paramakalyani College, Alwarkurichi",
    degree: "Bachelor of Computer Application",
    year: "2020-2023",
    description: "Completed Bachelor's degree in Computer Application with strong academic performance and development of foundational programming skills.",
    achievements: [
      "CGPA: 7.9/10",
      "Participated in coding competitions",
      "Completed various programming projects"
    ]
  },
  {
    institution: "Cambridge Matric Hr. Sec. School",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2019-2020",
    description: "Completed Higher Secondary education with focus on computer science and mathematics.",
    achievements: [
      "Percentage: 67%",
      "Participated in school technical events"
    ]
  },
  {
    institution: "Cambridge Matric Hr. Sec. School",
    degree: "Secondary School Certificate (SSLC)",
    year: "2017-2018",
    description: "Completed Secondary education with excellent academic performance.",
    achievements: [
      "Percentage: 89%",
      "School topper in Computer Science"
    ]
  }
];
