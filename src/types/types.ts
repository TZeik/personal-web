export interface Experience {
  workplace: string;
  position: string;
  startDate: string;
  endDate: string;
  information: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  imageUrl: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  features: string[];
}