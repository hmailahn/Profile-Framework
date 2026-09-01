export interface Challenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  screenshots?: string[];
  tags: string[];
  technologies?: { name: string; description: string }[];
  features?: string[];
  challenges?: Challenge[];
  date?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud tools' | 'design' | 'AI';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type ExperienceType = 'work' | 'education';

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  organization: string; // Company or School
  title: string; // Job title or Degree
  location?: string;
  start: string;
  end?: string;
  startDate: string;
  endDate?: string | null;
  logo?: string;
  description?: string;
  details?: string[]; // Responsibilities or key points
  skills?: string[];
  url?: string;
  courses?: string[];
  projects?: { name: string; url: string }[];
}

export interface WorkExperience {
  id: string;
  company: string;
  companyUrl?: string;
  location?: string;
  title: string;
  start?: string;
  end?: string;
  startDate?: string;
  endDate?: string | null;
  employmentType?: string;
  logo?: string;
  overview?: string;
  responsibilities?: string[];
  achievements?: string[];
  techStack?: string[];
}

