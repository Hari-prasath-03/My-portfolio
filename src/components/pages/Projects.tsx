import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { projects } from "../../constants/content";
import Card, { CardHeader } from "../ui/Card";
import PageTitle from "../ui/PageTitle";
import { CgArrowTopRight } from "react-icons/cg";
import { LuCodeXml } from "react-icons/lu";

type project = {
  name: string;
  shortDescription: string;
  description: string[];
  techStacks: string[];
  image: string;
  githubLink?: string;
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
          {projects.map((project: project, i: number) => (
            <Card
              animateDirFrom={undefined}
              key={i}
              animateOnce
              className="flex flex-col sm:flex-row gap-5 sm:gap-10 p-3 sm:p-0 sm:py-10 sm:pl-10 sticky"
              style={{
                top: `calc(55px + ${i * 30}px)`,
              }}
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
                <div className="pl-3 flex gap-5">
                  {project.githubLink && (
                    <GithubBtn githubLink={project.githubLink} />
                  )}
                  <ViewLiveBtn liveLink={project.liveLink} />
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

const SkillTag = ({ tool }: { tool: string }) => {
  return (
    <li className="w-fit inline-flex items-center bg-gradient-to-r from-emerald-300 to-sky-500 rounded-full gap-2 px-3 py-1 shadow-2xl border border-neutral-800/20">
      <p className="text-xs sm:text-sm text-neutral-800 font-primary font-extrabold">
        {tool}
      </p>
    </li>
  );
};

const GithubBtn = ({ githubLink }: { githubLink: string }) => (
  <a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm sm:text-base text-neutral-800 bg-neutral-100 border border-neutral-100 font-primary tracking-tight rounded-md inline-flex items-center gap-2 px-3 py-1.5 shadow group"
  >
    <span>View on GitHub</span>
    <LuCodeXml className="scale-105 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-75" />
  </a>
);

const ViewLiveBtn = ({ liveLink }: { liveLink: string }) => (
  <a
    href={liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm sm:text-base bg-transparent border border-neutral-100 text-neutral-100 font-light font-primary tracking-tight rounded-md inline-flex items-center gap-2 px-3 py-1.5 shadow group"
  >
    <span>Live Demo</span>
    <CgArrowTopRight className="scale-105 transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-75" />
  </a>
);
