import type { Project, Skill, SocialLink, ExperienceItem } from '../types';
import gmLogo from '../assets/logos/gm.jpg';
import aztecLogo from '../assets/logos/aztec.png';
import cozyCookbookImg from '../assets/cozy-cookbook.png';
import portfolioImg from '../assets/Portfolio.png';
import analyticsImg from '../assets/AnalyticsDashboard.png';
import stackedDevImg from '../assets/StackedDev.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'StackDev',
    description: 'A scalable full-stack learning platform with Kotlin Quarkus backend, GraphQL/gRPC endpoints, Python RAG microservice, and React/Vite TS frontend with Firebase.',
    detailedDescription: 'Designed and deployed a scalable, full-stack learning platform using a Kotlin Quarkus backend with graphQL and gRPC endpoints. The system integrates a python microservice to handle Vector Database for Retrieval-Augmented Generation (RAG) and uses React/Vite TS with Firebase for secure connections and Firestore real-time persistence. The platform offers free and paid tiers with payments handled through Stripe and PayPal. To optimize performance, it employs a normalized AI questions cache to efficiently handle similar queries.',
    image: stackedDevImg,
    tags: ['Kotlin', 'Quarkus', 'GraphQL', 'gRPC', 'Python', 'Vector Database', 'RAG', 'React', 'Vite', 'TypeScript', 'Firebase', 'Firestore'],
    technologies: [
      { name: 'Kotlin Quarkus', description: 'Programming language for backend development' },
      { name: 'GraphQL gRPC', description: 'Query language for APIs and High-performance RPC framework' },
      { name: 'Python', description: 'Language for the RAG microservice' },
      { name: 'Vector Database', description: 'Database for storing and retrieving vector embeddings' },
      { name: 'RAG', description: 'Retrieval-Augmented Generation for AI-powered responses' },
      { name: 'React TS Vite', description: 'Frontend library for building the user interface' },
      { name: 'Firebase', description: 'Platform for secure connections and authentication' },
      { name: 'Firestore', description: 'Real-time NoSQL database' }
    ],
    features: ['Scalable full-stack architecture', 'GraphQL and gRPC endpoints', 'Python microservice for RAG', 'Vector database integration', 'Secure Firebase connections', 'Real-time Firestore persistence', 'Free and paid subscription tiers', 'Stripe and PayPal payment integration', 'Normalized AI questions cache for query optimization'],
    challenges: [
      {
        challenge: 'Integrating a Kotlin Quarkus backend with a Python microservice for RAG functionality',
        solution: 'Implemented efficient inter-service communication using gRPC and ensured data consistency across services'
      },
      {
        challenge: 'Handling vector database operations for Retrieval-Augmented Generation',
        solution: 'Utilized optimized indexing and querying techniques to manage large-scale vector embeddings efficiently'
      },
      {
        challenge: 'Ensuring real-time persistence and secure connections with Firebase and Firestore',
        solution: 'Configured Firebase authentication and Firestore listeners for seamless real-time updates and data security'
      }
    ],
    demoUrl: undefined,
    githubUrl: undefined,
  },
    {
    id: '2',
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing real-time data streams with customizable widgets and alerts.',
    detailedDescription: 'Real-Time Analytics Dashboard to handle 40 million dollars in inventory, featuring comprehensive data visualization that displays live metrics. It uses Firebase authentication for secure user access, Firestore for real-time data storage and updates, and configurable pricing and sales modules. The dashboard includes customizable widgets, interactive charts, and alert systems for monitoring data anomalies. Dashboard is deployed to Google Cloud Platform as well as an processing and update service on Cloud Run functions, it utilizes Quarkus cache for efficient dashboard metadata caching.',
    image: analyticsImg,
    tags: ['React', 'Vite', 'Firebase', 'Firestore', 'Kotlin', 'Java Quarkus', 'AWS Lambda', 'GCP'],
    technologies: [
      { name: 'React', description: 'Frontend library for building the user interface' },
      { name: 'Vite SWC', description: 'Build tool for fast development and optimized production builds' },
      { name: 'Firebase', description: 'Platform for authentication and real-time database' },
      { name: 'Firestore', description: 'NoSQL cloud database for real-time data synchronization' },
      { name: 'Kotlin Quarkus', description: 'Backend for dashboard service' },
      { name: 'Quarkus Cache', description: 'Caching solution for dashboard metadata' },
      { name: 'Java Quarkus', description: 'Microservice for item processing and updates' },
      { name: 'Google Cloud Platform', description: 'Cloud platform for dashboard deployment and Serverless functions' }

    ],
    features: ['Real-time data visualization', 'Customizable widgets', 'Alert system', 'Configurable pricing', 'Sales analytics', 'Multiple chart types', 'Data export', 'Efficient updates'],
    challenges: [
      {
        challenge: 'Orchestrating seamless data flow between a Kotlin-based Firebase backend and a Java Quarkus processing engine, while managing a infrastructure on GCP.',
        solution: 'Architected a robust event-driven system using Firestore listeners and optimistic UI updates for zero-latency feel. I optimized Quarkus-level metadata caching and engineered cloud deployment pipeline that ensured data integrity and synchronization across different cloud deployments.'
      },
      {
        challenge: 'Scalability bottlenecks when syncing 20,000+ product updates simultaneously across multiple WooCommerce client sites.',
        solution: 'Developed a "divide and conquer" ingestion strategy using parallel Java execution. By batch-processing updates and running client-side syncs in parallel, I significantly reduced total execution time and minimized compute costs.'
      }
    ],
    demoUrl: undefined,
    githubUrl: undefined,
  },
    {
    id: '3',
    title: 'Cozy Cookbook',
    description: 'A full-stack web application solution with real-time recipe management, authentication, and user interactions.',
    detailedDescription: 'Cozy Cookbook is a comprehensive recipe management platform built with modern web technologies. It features user authentication, real-time recipe sharing, and an intuitive interface for managing personal and community recipes. The application includes advanced search and filtering capabilities, user profiles, and social features for recipe interactions.',
    image: cozyCookbookImg,
    tags: ['React', 'Java Spring Boot', 'MongoDB', 'Tailwind CSS'],
    technologies: [
      { name: 'React', description: 'Frontend framework for building the user interface' },
      { name: 'Java Spring Boot', description: 'Backend framework for API development' },
      { name: 'MongoDB', description: 'NoSQL database for storing recipes and user data' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for styling' }
    ],
    features: ['User authentication', 'Recipe CRUD operations', 'Real-time updates', 'Search and filtering', 'User profiles'],
    challenges: [
      {
        challenge: 'Implementing real-time features with WebSockets and ensuring data consistency across multiple users',
        solution: 'Utilized Socket.IO for WebSocket connections and implemented optimistic updates with conflict resolution to maintain data integrity'
      }
    ],
    demoUrl: 'https://thecozycookbookwebui.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/RecipeWeb/tree/setup/blake',
  },
  {
    id: '4',
    title: 'Vanilla Portfolio',
    description: 'I wanted to learn the base of web development. I created a portfolio using vanilla JavaScript, HTML, and CSS. No frameworks were used.',
    detailedDescription: 'This vanilla JavaScript portfolio showcases fundamental web development skills without relying on any frameworks or libraries. It demonstrates proficiency in HTML5, CSS3, and vanilla JavaScript for DOM manipulation, event handling, and responsive design. The site includes sections for projects, skills, and contact information with smooth scrolling and interactive elements.',
    image: portfolioImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    technologies: [
      { name: 'HTML5', description: 'Markup language for structuring the web page' },
      { name: 'CSS3', description: 'Styling language for visual presentation' },
      { name: 'JavaScript', description: 'Programming language for interactivity' }
    ],
    features: ['Responsive design', 'Smooth scrolling navigation', 'JavaScript typing animations', 'Contact form (Disabled)', 'Skills showcase', 'Past Projects'],
    challenges: [
      {
        challenge: 'Creating responsive layouts and smooth animations without CSS frameworks or JavaScript libraries',
        solution: 'Implemented custom CSS Grid and Flexbox layouts with media queries, and used vanilla JavaScript for scroll, animations and transitions'
      }
    ],
    demoUrl: 'https://blakeberringer.vercel.app/',
    githubUrl: 'https://github.com/DevBerringer/Portfolio/tree/main',
  },
];

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
  //mysql?
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
  { name: 'GitHub', url: 'https://github.com/DevBerringer', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/blake-berringer-35126a105', icon: 'linkedin' }
];

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
  location: 'Omaha, NE',
  availability: 'Available for Full Stack & Frontend roles',
};

export const experience: ExperienceItem[] = [
  {
    id: 'rp',
    type: 'work',
    organization: 'Ramp Health',
    title: 'Software Engineer',
    location: 'Remote, PA',
    start: 'June 2022',
    end: 'Present',
    startDate: '2022-06',
    endDate: null,
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
    projects: [
      // { name: 'T9 Predictive text', url: 'https://github.com/DevBerringer/T9-predictive-text' },
      // { name: 'Senior Capstone', url: 'https://github.com/DevBerringer/Epidemic_Simulator' }
    ]
  }
];

