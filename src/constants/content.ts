import {
  FramerMotionIcon,
  GitHubIcon,
  NextJSIcon,
  NpmIcon,
  PostmanIcon,
  ReactIcon,
  TailwindIcon,
  ViteIcon,
  VSCodeIcon,
} from "../components/ui/Icons";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandTypescript,
} from "react-icons/tb";

import {
  RiFirebaseLine,
  RiJavascriptLine,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiReactquery,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";

import {
  inkmarkImg,
  jagasreeImg,
  tailwindLandingpageImg,
  dragdropImg,
  tickTacToeImg,
} from "../assets";

export const aboutMe =
  "I'm a final year ECE student and a passionate Full-Stack Developer who thrives on solving complex system design challenges. From front-end magic to back-end logic, I love creating seamless, scalable, and impactful web applications. Constantly learning, always building, and never backing down from a tough problem.";

export const toolsIUse = [
  [
    { name: "VS Code", icon: VSCodeIcon },
    { name: "Vite", icon: ViteIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Npm", icon: NpmIcon },
  ],
  [
    { name: "React", icon: ReactIcon },
    { name: "TailwindCSS", icon: TailwindIcon },
    { name: "Framer-Motion", icon: FramerMotionIcon },
    { name: "Next.js 15", icon: NextJSIcon },
  ],
];

export const skills = [
  // web dev
  { name: "HTML", icon: IoLogoHtml5 },
  { name: "CSS", icon: IoLogoCss3 },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "GitHub", icon: FaGithub },
  { name: "Git", icon: FaGitAlt },
  { name: "Spring framework", icon: SiSpring },
  { name: "Spring Boot", icon: SiSpringboot },

  // programming
  { name: "C programming", icon: TbBrandCpp },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },

  // database
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "FireBase", icon: RiFirebaseLine },

  // libraries
  { name: "React Query", icon: SiReactquery },
];

export const projects = [
  {
    image: inkmarkImg,
    name: "InkMark",
    shortDescription: "Simple and fast markdown editing with export options.",
    techStacks: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Firebase-Firestore",
    ],
    description: [
      "Full-stack markdown manager for developers, writers, and teams.",
      "Edit and Export markdown files instantly as .md or .pdf.",
      "Write, preview, and autosave markdown with smart syncing.",
      "Debounce mechanism ensures smooth large file editing experience.",
      "Secure JWT auth with OTP-based email verification system.",
      "Easily manage favorites, trash, and restore deleted files.",
      "Modern UI built using Tailwind and reusable components.",
    ],
    githubLink: "https://github.com/Hari-prasath-03/Inkmark",
    liveLink: "https://inkmark.vercel.app",
  },
  {
    image: dragdropImg,
    name: "DragDrop Notes",
    shortDescription:
      "Visual note-taking with intuitive drag-and-drop and color coding.",
    techStacks: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Vite",
    ],
    description: [
      "A full-stack note organizer designed for fast idea capture.",
      "Drag and drop notes to rearrange them freely with live visualy.",
      "CRUD with notes also support for custom color labels.",
      "Notes are tied to user sessions and stored securely in MongoDB.",
      "Context-based state management for simplicity.",
      "Built with modular React components and RESTful API integration.",
      "Modern UI with Tailwind and smooth drag-and-drop interaction.",
    ],
    githubLink: "https://github.com/Hari-prasath-03/NotesApp",
    liveLink: "https://dad-notes-app.vercel.app/",
  },
  {
    image: jagasreeImg,
    name: "Jagasree Collections",
    shortDescription: "Responsive fashion catalog with dashboard control.",
    techStacks: [
      "React",
      "Tailwind CSS",
      "Framer-motion",
      "Node.js",
      "Express",
    ],
    description: [
      "Online catalog built for kerala traditional saries showcasing.",
      "Fully responsive design tailored for mobile, tablet, and desktop.",
      "Dedicated admin dashboard to manage product listings, offers, etc,.",
      "Supports categorized browsing by gender and age group.",
      "Visual product exploration with interactive carousels.",
      "Context-based global state management for centerelization.",
      "Tailwind CSS powered UI with Framer-motion animations.",
    ],
    liveLink: "https://jagasreecollections.in/",
  },
  {
    image: tailwindLandingpageImg,
    name: "TailwindCSS landing-page",
    shortDescription:
      "Modern landing page with smooth light and dark mode switching.",
    techStacks: ["React", "TypeScript", "Tailwind CSS"],
    description: [
      "Responsive landing page with light/dark mode toggle.",
      "Built using React for modular components and utility-first styling.",
      "Persistent theme state with localStorage to better user preference.",
      "Minimalistic Hero section with clean and smart layout.",
      "Reusable Button and components with interactive hover effects.",
      "Tailored theming logic using custom hook for mode transitions.",
    ],
    githubLink: "https://github.com/Hari-prasath-03/Tailwindcss-LandingPage",
    liveLink: "https://hari-prasath-03.github.io/Tailwindcss-LandingPage/",
  },
  {
    image: tickTacToeImg,
    name: "4x4 Tic-Tac-Toe",
    shortDescription: "A strategic React-based game with an extended 4x4 grid.",
    techStacks: ["React", "JavaScript", "CSS", "Vite", "Vercel"],
    description: [
      "A Tic-Tac-Toe featuring a 4x4 grid for enhanced gameplay.",
      "Support both 2 players and also play with AI opponent.",
      "Built with React.js using component-based architecture.",
      "Styled with CSS to ensure a clean and responsive design.",
      "Vite used for fast development with hot module replacement.",
      "Features a clean codebase and structure for easy scalability.",
    ],
    githubLink: "https://github.com/Hari-prasath-03/4x4-tick-tack-toe",
    liveLink: "https://4x4-tick-tac-toe.vercel.app/",
  },
];
