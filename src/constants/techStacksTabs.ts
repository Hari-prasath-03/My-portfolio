const tabs = ["Languages", "Front-end", "Back-end", "Tools", "Concepts"];

const content: Record<string, string[]> = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "C"],
  "Front-end": [
    "React.js",
    "Tailwind CSS",
    "Framer motion",
    "Shadcn UI",
    "Material UI",
    "TypeScript",
    "Bootstrap",
    "Zustand",
    "React Query",
    "Next.js",
    "HTML",
    "Vanilla CSS",
    "JavaScript",
  ],
  "Back-end": ["Spring Boot", "Node.js", "Express.js", "Mongodb", "MySQL"],
  Tools: ["VS code", "InteleJ", "Postman", "Git", "Github", "Docker"],
  Concepts: [
    "Object oriented programing",
    "Data structures & Algorithms",
    "API Design",
    "Networking",
    "System Design",
  ],
};

const iconMap: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",

  "React.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Tailwind CSS":
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Vanilla CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Framer motion": "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  "Shadcn UI": "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  "Material UI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  Zustand:
    "https://img.icons8.com/?size=512w&id=sJXle6UehcOM&format=png",
  "React Query":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

  "Spring Boot":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  "VS code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  InteleJ:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

  "Object oriented programing":
    "https://img.icons8.com/?size=512w&id=Jwpp2CRvRcC0&format=png",
  "Data structures & Algorithms":
    "https://img.icons8.com/?size=512w&id=JHNvegaTfHjR&format=png",
  Networking: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "System Design":
    "https://img.icons8.com/?size=512w&id=RdDKot1cudKt&format=png",
  "API Design":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
};

export { tabs, content, iconMap };
