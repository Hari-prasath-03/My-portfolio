import { motion } from "framer-motion";
import PageTitle from "../ui/PageTitle";
import { projects } from "../../constants/content";
import { Project, ProjectCard } from "./Projects";

const Allprojects = () => {
  return (
    <motion.section
      id="projects"
      className="responsive-container flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PageTitle>
        My Works | Valuable projects shaped by learning, curiosity, and clean
        code.
      </PageTitle>
      <div className="flex flex-col gap-10 mb-10">
        {projects.map((project: Project, i: number) => (
          <div className="min-h-[80vh] flex justify-center items-center">
            <ProjectCard
              key={i}
              project={project}
              index={i}
              animation={false}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Allprojects;
