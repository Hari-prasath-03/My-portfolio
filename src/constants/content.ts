import {
  DockerIcon,
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
  SiReactrouter,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
} from "react-icons/si";

import {
  inkmarkImg,
  jagasreeImg,
  tailwindLandingpageImg,
  dragdropImg,
  tickTacToeImg,
  quoteLockImg,
  ytAudioPlayeer,
  kanbanBoardImg,
} from "../assets";
import { GiZeusSword } from "react-icons/gi";

export const aboutMe =
  "I'm a final year ECE student and a passionate Full-Stack Developer who thrives on solving complex system design challenges. From front-end magic to back-end logic, I love creating seamless, scalable, and impactful web applications. Constantly learning, always building, and never backing down from a tough problem.";

export const toolsIUse = [
  [
    { name: "VS Code", icon: VSCodeIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Vite", icon: ViteIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Postman", icon: PostmanIcon },
  ],
  [
    { name: "React", icon: ReactIcon },
    { name: "TailwindCSS", icon: TailwindIcon },
    { name: "Framer-Motion", icon: FramerMotionIcon },
    { name: "Next.js 15", icon: NextJSIcon },
    { name: "Npm", icon: NpmIcon },
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
  { name: "Spring Security", icon: SiSpringsecurity },

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
  { name: "Zustand", icon: GiZeusSword },
  { name: "React Router", icon: SiReactrouter },
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
    githubLink: [
      "https://github.com/Hari-prasath-03/inkMark-frontend",
      "https://github.com/Hari-prasath-03/inkMark-server",
    ],
    liveLink: "https://inkmark.vercel.app",
  },
  {
    image: ytAudioPlayeer,
    name: "YT Audio PWA",
    shortDescription: "Progressive web music player using YouTube iframe.",
    techStacks: ["React", "TypeScript", "Tailwind CSS", "YouTube IFrame API"],
    description: [
      "Lightweight audio player built over YouTube iframe API.",
      "Add any YouTube music links to custom playlists instantly.",
      "Enjoy autoplay, looping, and next-track transitions seamlessly.",
      "Media Session API integration for full mobile background controls.",
      "Built as a PWA with looks similar to native apps.",
      "Responsive UI designed for both desktop and mobile experiences.",
      "Loop toggle for individual tracks with visual feedback support.",
      "Auto-saves playlist to localStorage for persistent music sessions.",
    ],
    githubLink: ["https://github.com/Hari-prasath-03/yt-player"],
    liveLink: "https://yt-audio-playeer.vercel.app/",
  },
  {
    image: kanbanBoardImg,
    name: "Kanban Task Planner",
    shortDescription:
      "Minimal and intuitive Kanban board for organizing tasks and boosting productivity.",
    techStacks: ["React", "Tailwind CSS", "JavaScript", "Drag and Drop"],
    description: [
      "A clean, drag-and-drop based task planner built using React.",
      "Supports multiple columns like Backlog, TODO, In Progress etc.",
      "Ideal for tracking personal projects, learning goals, and team workflows.",
      "Real-time visual updates and card interactions for clear tracking.",
      "Lightweight design with responsive layout and intuitive card actions.",
      "Built with modern utility-first styling using Tailwind CSS.",
      "All data is stored in local storage for simplicity.",
    ],
    githubLink: ["https://github.com/Hari-prasath-03/Notion-Konbat"],
    liveLink: "https://notion-konban.vercel.app/",
  },
  {
    image: quoteLockImg,
    name: "QuoteLock",
    shortDescription: "Secure quote with rate limits and email auth.",
    techStacks: [
      "React",
      "TypeScript",
      "Bootstrap",
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
    ],
    description: [
      "Built with secure, scalable Spring Boot backend architecture.",
      "Custom token bucket algorithm for user rate limiting.",
      "Implements stateless JWT auth using Spring Security filters.",
      "Interceptor-based request guard without touching endpoint logic.",
      "Responsive HTML emails powered by Thymeleaf templating engine.",
      "Supports email OTP verification for signup and reset-password.",
      "Developed using React and TypeScript for safer UI logic.",
      "Bootstrap-styled frontend with clean, responsive modern design.",
    ],
    githubLink: [
      "https://github.com/Hari-prasath-03/QuoteLock-frontend",
      "https://github.com/Hari-prasath-03/QuoteLock-server",
    ],
    liveLink: "https://quotelock.vercel.app/",
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
    githubLink: [
      "https://github.com/Hari-prasath-03/notes-app",
      "https://github.com/Hari-prasath-03/notes-app-server",
    ],
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
    githubLink: ["https://github.com/Hari-prasath-03/Tailwindcss-LandingPage"],
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
    githubLink: ["https://github.com/Hari-prasath-03/4x4-tick-tack-toe"],
    liveLink: "https://4x4-tick-tac-toe.vercel.app/",
  },
];
