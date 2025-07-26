import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { projects } from "../../constants/content";
import Card, { CardHeader } from "../ui/Card";
import PageTitle from "../ui/PageTitle";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export type Project = {
  name: string;
  shortDescription: string;
  description: string[];
  techStacks: string[];
  image: string;
  githubLink?: string[];
  liveLink: string;
};

const Projects = () => {
  return (
    <div className="hero-grad">
      <section
        id="Portfolio"
        className="responsive-container min-h-screen h-full flex flex-col pb-10 sm:pb-16"
      >
        <PageTitle>
          My Works | Valuable projects shaped by learning, curiosity, and clean
          code.
        </PageTitle>

        <div className="flex flex-col gap-10">
          {projects.slice(0, 4).map((project: Project, i: number) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
        <Link
          to="/about#projects"
          className="text-center self-center w-fit mt-8 text-lg md:text-xl font-secondary text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-sky-300 leading-tight after-hover"
        >
          View all projects?
        </Link>
      </section>
    </div>
  );
};

export default Projects;

export const ProjectCard = ({
  project,
  index,
  animation = true,
}: {
  project: Project;
  index: number;
  animation?: boolean;
}) => {
  return (
    <Card
      animateDirFrom={undefined}
      animateOnce
      className={`flex flex-col sm:flex-row gap-5 sm:gap-10 p-3 sm:p-0 sm:py-10 sm:pl-10 ${
        animation ? "sticky" : "*:text-xl"
      }`}
      style={animation ? { top: `calc(35px + ${index * 30}px)` } : {}}
    >
      <div className="flex-1 flex gap-3 sm:gap-5 flex-col">
        <CardHeader
          title={project.name}
          discription={project.shortDescription}
          fontSize="lg"
        />
        <hr className="text-stone-500" />

        <ul className="flex flex-wrap gap-2 px-2">
          {project.techStacks.map((tool, i) => (
            <SkillTag key={i} tool={tool} />
          ))}
        </ul>

        <ul className="space-y-1 px-2">
          {project.description.map((desc, i) => (
            <li
              key={i}
              className="text-xs sm:text-base inline-flex gap-2 text-stone-400 items-center"
            >
              <IoIosCheckmarkCircleOutline />
              {desc}
            </li>
          ))}
        </ul>

        <div className="pl-3 flex flex-wrap gap-5">
          <GithubBtn githubLink={project.githubLink} />
          {project.liveLink && <ViewLiveBtn liveLink={project.liveLink} />}
        </div>
      </div>

      <div className="flex-1 bg-cyan-400">
        <img
          className="h-full object-left object-cover"
          src={project.image}
          alt={project.name}
        />
      </div>
    </Card>
  );
};

const SkillTag = ({ tool }: { tool: Project["techStacks"][number] }) => (
  <li className="w-fit inline-flex items-center bg-gradient-to-r from-emerald-300 to-sky-500 rounded-full gap-2 px-3 py-1 shadow-2xl border border-neutral-800/20">
    <p className="text-xs sm:text-sm text-neutral-800 font-primary font-extrabold">
      {tool}
    </p>
  </li>
);

const GithubBtn = ({ githubLink }: { githubLink: Project["githubLink"] }) => {
  if (!githubLink || githubLink.length === 0) return null;
  if (githubLink.length === 1) {
    return (
      <a
        href={githubLink[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm sm:text-base text-neutral-800 bg-neutral-100 border border-neutral-100 font-primary tracking-tight rounded-md inline-flex items-center gap-2 px-3 py-1.5 shadow group"
      >
        <i className="bx bxl-github" />
        <span>View Code</span>
      </a>
    );
  }
  return (
    <>
      {githubLink.map((link, i) => (
        <a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base text-neutral-800 bg-neutral-100 border border-neutral-100 font-primary tracking-tight rounded-md inline-flex items-center gap-2 px-3 py-1.5 shadow group"
        >
          <i className="bx bxl-github" />
          <span>View {i === 0 ? "Frontend" : "Backend"}</span>
        </a>
      ))}
    </>
  );
};

const ViewLiveBtn = ({ liveLink }: { liveLink: string }) => (
  <a
    href={liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm sm:text-base bg-transparent border border-neutral-100 text-neutral-100 font-light font-primary tracking-tight rounded-md inline-flex items-center gap-2 px-3 py-1.5 shadow group"
  >
    <CgArrowTopRight className="scale-105 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-75" />
    <span>Live Demo</span>
  </a>
);
