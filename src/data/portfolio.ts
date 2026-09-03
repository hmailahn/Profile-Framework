import type { Project, Skill, SocialLink, ExperienceItem } from "../types";
import RHLogo from "../assets/logos/RH-Logo.png";
import jobTracker from "../assets/jobTracker.png";
import financeTracker from "../assets/financeTracker.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Job Tracker",
    description:
      "A drag-and-drop Kanban board for tracking job applications, with live search and a stats dashboard.",
    detailedDescription:
      "Built a full-stack job application tracker to actually use during my own job search, not just as a demo. Users can register, log in, and manage applications on a Kanban board — dragging cards between stages like Applied, Interview, Offer, and Rejected, with each move instantly persisted to the backend. A stats dashboard computes response rate and average days waiting directly from the live application data, and a live search bar filters the board by company or role as you type. Includes light and dark mode with a theme that persists across sessions.",
    image: jobTracker,
    tags: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    technologies: [
      {
        name: "React",
        description: "Frontend framework for building the user interface",
      },
      {
        name: "TypeScript",
        description:
          "Programming language for frontend and backend development",
      },
      {
        name: "Java",
        description: "Programming language for backend development",
      },
      {
        name: "Spring Boot",
        description: "Framework for building Java-based backend services",
      },
      {
        name: "JWT Authentication",
        description:
          "JSON Web Token based authentication for secure, per-user sessions",
      },
      {
        name: "PostgreSQL",
        description: "Relational database for storing application data",
      },
      {
        name: "@dnd-kit",
        description:
          "Accessible drag-and-drop library powering the Kanban board",
      },
      {
        name: "Zustand",
        description:
          "Lightweight state management for authentication and theme",
      },
      {
        name: "TanStack React Query",
        description: "Server state, caching, and mutations for API data",
      },
    ],
    features: [
      "Drag-and-drop Kanban board across six status columns",
      "Full CRUD on applications with company, role, salary range, and notes",
      "Live search by company or role name",
      "Stats dashboard: response rate, active count, average days waiting",
      "Light and dark mode with persisted preference",
      "Secure JWT authentication with per-user data isolation",
      "Account settings with password change",
    ],
    challenges: [
      {
        challenge:
          "Drag-and-drop on the Kanban board conflicted with the click-to-edit button on each card — @dnd-kit's pointer listeners intercepted clicks before they reached the edit button, since drag detection fires on pointerdown rather than a completed click.",
        solution:
          "Configured @dnd-kit's PointerSensor with an 8px activation distance constraint, so a drag only begins after the pointer moves — a quick, stationary click now reaches the edit button reliably instead of being swallowed as a drag gesture.",
      },
      {
        challenge:
          'A global axios response interceptor treated every 401 as an expired session and force-reloaded the page to /login — including 401s from a simple wrong-password attempt on the login form itself, which masked the actual "invalid credentials" error behind a confusing page refresh.',
        solution:
          "Scoped the interceptor to only trigger the hard redirect when a token already existed in localStorage (a genuinely expired session), letting failed login attempts surface their real error message instead of forcing a reload.",
      },
      {
        challenge:
          "Deploying the same JWT-authenticated architecture to a second, different hosting stack (Vercel for the frontend instead of Netlify, plus a fresh Railway project for the backend) surfaced a new class of platform-specific issues: SPA routes 404ing on Vercel, and the Vite build failing because Vercel's root directory setting didn't match the monorepo's frontend subfolder.",
        solution:
          "Added a vercel.json rewrite rule to route all paths to index.html for client-side routing, and corrected the project's Root Directory setting in Vercel to point at the job-tracker-ui subfolder so the build could locate its own package.json and dependencies.",
      },
    ],
    demoUrl: "https://job-tracker-eight-mauve.vercel.app",
    githubUrl: "https://github.com/hmailahn/job-tracker",
  },
  {
    id: "2",
    title: "Finance Tracker",
    description:
      "A comprehensive finance tracking application that helps users manage their personal finances effectively.",
    detailedDescription:
      "Developed a comprehensive finance tracking application that allows users to monitor their income, expenses, and savings. The application features intuitive dashboards, real-time data updates, and secure authentication. Users can categorize transactions, set budget goals, and generate financial reports to gain insights into their spending habits. The platform ensures data security and provides a seamless user experience across devices.",
    image: financeTracker,
    tags: ["Angular", "TypeScript", "Java", "Spring Boot", "Tailwind"],
    technologies: [
      {
        name: "Angular",
        description: "Frontend framework for building the user interface",
      },
      {
        name: "TypeScript",
        description:
          "Programming language for frontend and backend development",
      },
      {
        name: "Java",
        description: "Programming language for backend development",
      },
      {
        name: "Spring Boot",
        description: "Framework for building Java-based backend services",
      },
      {
        name: "JWT Authentication",
        description:
          "Implementation of JSON Web Token based authentication for secure user sessions",
      },
      {
        name: "PostgreSQL",
        description: "Relational database for storing application data",
      },
      { name: "SCSS", description: "Sass-based CSS preprocessor for styling" },
    ],
    features: [
      "Track income and expenses",
      "Set budget goals",
      "Category-based spending visualization",
      "Real-time data updates",
      "Secure authentication",
      "Intuitive dashboards",
      "User Profiles",
    ],
    challenges: [
      {
        challenge:
          "Implementing secure JWT authentication with per-user data isolation, ensuring users could only access their own transactions.",
        solution:
          "Built a custom JWT filter in Spring Security that validates tokens on every request and injects the authenticated user into the security context. Linked transactions to users via a foreign key and filtered all queries by the authenticated user's ID at the repository level.",
      },
      {
        challenge:
          "Configuring CORS and environment-specific database connections when deploying the Spring Boot backend to Railway, including Java version mismatches and malformed JDBC connection strings.",
        solution:
          "Diagnosed build logs to identify the correct Java version required by Railway's Nixpacks builder, then used Railway's variable reference syntax to correctly inject PostgreSQL connection details rather than passing unresolved placeholder strings to the JDBC driver.",
      },
      {
        challenge:
          "Angular's client-side routing returned 404 errors on Netlify when users navigated directly to routes like /register.",
        solution:
          "Added a Netlify redirect rule to serve index.html for all paths, allowing Angular's router to handle navigation client-side instead of Netlify's server trying to resolve the route.",
      },
    ],
    demoUrl: "https://finance-tracker-heidi.netlify.app",
    githubUrl: "https://github.com/hmailahn/finance-tracker",
  },
];

// this is done
export const skills: Skill[] = [
  { name: "Vue", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "jQuery", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git", category: "cloud tools" },
  { name: "Docker", category: "cloud tools" },
  { name: "Anthropic Claude", category: "AI" },
  { name: "Amazon Bedrock", category: "AI" },
  { name: "Figma", category: "design" },
  { name: "Lucidchart", category: "design" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/hmailahn", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/heidi-mailahn-15005a136",
    icon: "linkedin",
  },
];

export const personalInfo = {
  name: "Heidi Mailahn",
  title: "Full Stack Developer",
  tagline:
    "Problem solver, builder, collaborator — I like owning a project from idea to production",
  about: `I'm a full-stack engineer at Ramp Health, building member-facing features for a wellness platform reaching 20,000+ people a month — everything from PHP/Laravel backends to responsive UI across web and mobile.

    My path here wasn't traditional — years in corporate wellness program design, alongside part-time service in the Iowa Air National Guard, before a coding bootcamp turned into a full career change.

    Outside of client work, I build full-stack side projects to keep sharpening my skills — a couple are below.`,
  email: "mailahnheidi@gmail.com",
  location: "Council Bluffs",
  availability: "Available for Full Stack & Frontend roles",
};

export const experience: ExperienceItem[] = [
  {
    id: "rp",
    type: "work",
    organization: "Ramp Health",
    title: "Software Engineer",
    location: "Remote",
    start: "June 2022",
    end: "Present",
    startDate: "2022-07",
    endDate: null,
    logo: RHLogo,
    url: "https://www.ramphealth.com",
    description:
      " Full-stack engineer building member-facing wellness features for a platform serving 20,000+ members monthly across multiple enterprise clients.",
    details: [
      "Engineered features and resolved 250+ bugs on a platform reaching 20,000+ members monthly",
      "Delivered end-to-end features including a team-based Challenges system, Engagement Campaigns, and Provider Follow-up Reminders",
      "Led a Laravel 12 framework upgrade while maintaining backend reliability with PHP, Laravel, MySQL, and Redis",
      "Designed complex data models for provider assignment management, vaccine logging, dependent onboarding, and member consent flows",
      "Delivered mobile-responsive UI across web, iOS, and Android, resolving platform-specific bugs on both",
      "Contributed to an AI-powered file upload pre-processing proof of concept for automated activity verification",
      "Managed and tracked tasks in JIRA across 50+ Agile/Scrum sprints",
    ],
    skills: [
      "Vue",
      "Laravel",
      "PHP",
      "TypeScript",
      "MySql",
      "Docker",
      "Amazon Bedrock",
    ],
  },
  // {
  //   id: "dts",
  //   type: "work",
  //   organization: "Dare To Surpass",
  //   title: "Freelance Software Developer",
  //   location: "Remote, NE",
  //   start: "Jun 2021",
  //   end: "Aug 2021",
  //   startDate: "2021-06",
  //   endDate: "2021-08",
  //   // TODO get logo, update logo, update description, detials, and skills
  //   // logo: dareToSurpassLogo,
  //   // url: 'https://www.astecindustries.com/',
  //   // description: 'Short-term contract focused on telematics reliability improvements and rapid delivery of a DOT-compliant electronic ticketing application.',
  //   // details: [
  //   //   'Delivered a DOT-compliant electronic ticketing solution within a three-month contract window.',
  //   //   'Improved telematics device reliability for remote connectivity scenarios.'
  //   // ],
  //   skills: ["React", "TypeScript", "Java", "MongoDB"],
  // },
  {
    id: "bootcamp",
    type: "education",
    organization: "University of Minnesota",
    title: "Full Stack Web Development Certificate",
    location: "Remote",
    start: "Dec 2021",
    end: "May 2022",
    startDate: "2021-12",
    endDate: "2022-05",
    description: "Full Stack Web Development Certificate",
    // TO DO: add some projects
    projects: [],
  },
];
