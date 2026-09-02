import type { Project, Skill, SocialLink, ExperienceItem } from '../types';


export const projects: Project[] = [
  // TO DO : update below
    {
    id: '1',
    title: 'Job Tracker',
    description: 'A job tracking application that helps users manage and monitor their job applications efficiently.',
    detailedDescription: '',
    image: "",
    tags: [],
    technologies: [


    ],
    features: [],
    challenges: [
      {
        challenge: '',
        solution: ''
      },
      {
        challenge: '',
        solution: ''
      }
    ],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: '2',
    title: 'Finance Tracker',
    description: 'A comprehensive finance tracking application that helps users manage their personal finances effectively.',
    detailedDescription: 'Developed a comprehensive finance tracking application that allows users to monitor their income, expenses, and savings. The application features intuitive dashboards, real-time data updates, and secure authentication. Users can categorize transactions, set budget goals, and generate financial reports to gain insights into their spending habits. The platform ensures data security and provides a seamless user experience across devices.',
    image: "",
    tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Tailwind'],
    technologies: [
      { name: 'Angular', description: 'Frontend framework for building the user interface' },
      { name: 'TypeScript', description: 'Programming language for frontend and backend development' },
      { name: 'Java', description: 'Programming language for backend development' },
      { name: 'Spring Boot', description: 'Framework for building Java-based backend services' },
      { name: 'JWT Authentication', description: 'Implementation of JSON Web Token based authentication for secure user sessions' },
      { name: 'PostgreSQL', description: 'Relational database for storing application data' },
      { name: 'SCSS', description: 'Sass-based CSS preprocessor for styling' }
    ],
    features: ['Track income and expenses', 'Set budget goals', 'Category-based spending visualization', 'Real-time data updates', 'Secure authentication', 'Intuitive dashboards', 'User Profiles'],
    challenges: 
    [
      {
        challenge: 'Implementing secure JWT authentication with per-user data isolation, ensuring users could only access their own transactions.',
        solution: 'Built a custom JWT filter in Spring Security that validates tokens on every request and injects the authenticated user into the security context. Linked transactions to users via a foreign key and filtered all queries by the authenticated user\'s ID at the repository level.'
      },
      {
        challenge: 'Configuring CORS and environment-specific database connections when deploying the Spring Boot backend to Railway, including Java version mismatches and malformed JDBC connection strings.',
        solution: 'Diagnosed build logs to identify the correct Java version required by Railway\'s Nixpacks builder, then used Railway\'s variable reference syntax to correctly inject PostgreSQL connection details rather than passing unresolved placeholder strings to the JDBC driver.'
      },
      {
        challenge: 'Angular\'s client-side routing returned 404 errors on Netlify when users navigated directly to routes like /register.',
        solution: 'Added a Netlify redirect rule to serve index.html for all paths, allowing Angular\'s router to handle navigation client-side instead of Netlify\'s server trying to resolve the route.'
      }
    ],
    demoUrl: 'https://finance-tracker-heidi.netlify.app',
    githubUrl: 'https://github.com/hmailahn/finance-tracker',
  },
  // TO DO, add more projects
  //   {
  //   id: '3',
  //   title: 'Cozy Cookbook',
  //   description: 'A full-stack web application solution with real-time recipe management, authentication, and user interactions.',
  //   detailedDescription: 'Cozy Cookbook is a comprehensive recipe management platform built with modern web technologies. It features user authentication, real-time recipe sharing, and an intuitive interface for managing personal and community recipes. The application includes advanced search and filtering capabilities, user profiles, and social features for recipe interactions.',
  //   image: "cozyCookbookImg",
  //   tags: ['React', 'Java Spring Boot', 'MongoDB', 'Tailwind CSS'],
  //   technologies: [
  //     { name: 'React', description: 'Frontend framework for building the user interface' },
  //     { name: 'Java Spring Boot', description: 'Backend framework for API development' },
  //     { name: 'MongoDB', description: 'NoSQL database for storing recipes and user data' },
  //     { name: 'Tailwind CSS', description: 'Utility-first CSS framework for styling' }
  //   ],
  //   features: ['User authentication', 'Recipe CRUD operations', 'Real-time updates', 'Search and filtering', 'User profiles'],
  //   challenges: [
  //     {
  //       challenge: 'Implementing real-time features with WebSockets and ensuring data consistency across multiple users',
  //       solution: 'Utilized Socket.IO for WebSocket connections and implemented optimistic updates with conflict resolution to maintain data integrity'
  //     }
  //   ],
  //   demoUrl: 'https://thecozycookbookwebui.vercel.app/',
  //   githubUrl: 'https://github.com/DevBerringer/RecipeWeb/tree/setup/blake',
  // },
  // {
  //   id: '4',
  //   title: 'Vanilla Portfolio',
  //   description: 'I wanted to learn the base of web development. I created a portfolio using vanilla JavaScript, HTML, and CSS. No frameworks were used.',
  //   detailedDescription: 'This vanilla JavaScript portfolio showcases fundamental web development skills without relying on any frameworks or libraries. It demonstrates proficiency in HTML5, CSS3, and vanilla JavaScript for DOM manipulation, event handling, and responsive design. The site includes sections for projects, skills, and contact information with smooth scrolling and interactive elements.',
  //   image: "portfolioImg",
  //   tags: ['HTML', 'CSS', 'JavaScript'],
  //   technologies: [
  //     { name: 'HTML5', description: 'Markup language for structuring the web page' },
  //     { name: 'CSS3', description: 'Styling language for visual presentation' },
  //     { name: 'JavaScript', description: 'Programming language for interactivity' }
  //   ],
  //   features: ['Responsive design', 'Smooth scrolling navigation', 'JavaScript typing animations', 'Contact form (Disabled)', 'Skills showcase', 'Past Projects'],
  //   challenges: [
  //     {
  //       challenge: 'Creating responsive layouts and smooth animations without CSS frameworks or JavaScript libraries',
  //       solution: 'Implemented custom CSS Grid and Flexbox layouts with media queries, and used vanilla JavaScript for scroll, animations and transitions'
  //     }
  //   ],
  //   demoUrl: 'https://blakeberringer.vercel.app/',
  //   githubUrl: 'https://github.com/DevBerringer/Portfolio/tree/main',
  // },
];

// this is done
export const skills: Skill[] = [
  { name: 'Vue', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'jQuery', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'PHP', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Spring boot', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Git', category: 'cloud tools' },
  { name: 'GitHub Actions', category: 'cloud tools' },
  { name: 'Docker', category: 'cloud tools' },
  { name: 'AWS Lambda', category: 'cloud tools' },
  { name: 'Anthropic Claude', category: 'AI' },
  { name: 'Amazon Bedrock', category: 'AI' },
  { name: 'Figma', category: 'design' },
  { name: 'Lucidchart', category: 'design' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/hmailahn', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/heidi-mailahn-15005a136', icon: 'linkedin' }
];

// TO DO: change tagline, and about
export const personalInfo = {
  name: 'Heidi Mailahn',
  title: 'Full Stack Developer',
  tagline: 'Transforming complex requirements into elegant, scalable code.',
  about: `I build software that scales. From designing event-driven architectures at General Motors that boosted performance by 2,000%, to crafting fluid interfaces with React and Vite, I love the challenge of making "complex" feel "simple."

  I specialize in:
  • High-throughput backend systems (Java, Quarkus, Pulsar)
  • Modern frontend ecosystems (React, TypeScript, Vite)
  • Engineering excellence (TDD, automated testing, fault-tolerant design)

  I’m an advocate for clean code and better developer experiences. If I'm not in my IDE, I'm likely exploring new ideas or reading up on something outside of my domain.`,
  email: 'mailahnheidi@gmail.com',
  location: 'Council Bluffs',
  availability: 'Available for Full Stack & Frontend roles',
};

export const experience: ExperienceItem[] = [
  // TO DO: add more work here, need to also add dare to surpass to resume
  {
    id: 'rp',
    type: 'work',
    organization: 'Ramp Health',
    title: 'Software Engineer',
    location: 'Remote, PA',
    start: 'June 2022',
    end: 'Present',
    startDate: '2022-07',
    endDate: null,
    // TODO get logo, update logo, update description, detials, and skills
    // logo: rampHealthLogo,
    // url: 'https://www.gm.com',
    // description: 'Led event-driven platform work for vehicle data systems, re-architecting pipelines and building microservices and integrations that improved throughput and enabled ML-driven distribution and forecasting.',
    // details: [
    //   'Increased event throughput and reduced processing latency by over 20x through a concurrent Pulsar-based Java service.',
    //   'Designed a configurable rule engine API to dynamically route vehicle payloads to microservices.',
    //   'Delivered an integration that generated an estimated $25M in annual savings via optimized vehicle distribution.',
    //   'Reduced system downtime from >10 minutes to <5 seconds after migrating critical components to microservices.'
    // ],
    // skills: ['Vue', 'Laravel', 'PHP', 'MySql', 'Kafka', 'Docker', 'Kubernetes', 'PostgreSQL', 'MS SQL', 'SSISDB', 'IBM DataStage', 'IBM Cognos', 'GitHub Actions', 'Azure Pipelines', 'Pivotal Cloud Foundry']
  },
  {
    id: 'dts',
    type: 'work',
    organization: 'Dare To Surpass',
    title: 'Freelance Software Developer',
    location: 'Remote, NE',
    start: 'Jun 2021',
    end: 'Aug 2021',
    startDate: '2021-06',
    endDate: '2021-08',
     // TODO get logo, update logo, update description, detials, and skills
    // logo: dareToSurpassLogo,
    // url: 'https://www.astecindustries.com/',
    // description: 'Short-term contract focused on telematics reliability improvements and rapid delivery of a DOT-compliant electronic ticketing application.',
    // details: [
    //   'Delivered a DOT-compliant electronic ticketing solution within a three-month contract window.',
    //   'Improved telematics device reliability for remote connectivity scenarios.'
    // ],
    skills: ['React', 'TypeScript', 'Java', 'MongoDB']
  },
  {
    id: 'bootcamp',
    type: 'education',
    organization: 'University of Minnesota',
    title: 'Full Stack Web Development Certificate',
    location: 'Remote, MN',
    start: 'Dec 2021',
    end: 'May 2022',
    startDate: '2021-12',
    endDate: '2022-05',
    description: 'Full Stack Web Development Certificate',
    // TO DO: add some projects
    projects: [
     
    ]
  }
];

