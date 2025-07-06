import { motion } from "framer-motion";
import PageTitle from "../ui/PageTitle";
import me from "../../assets/me.jpg";

const AboutSub = () => {
  const content = [
    {
      title: "Who I Am",
      content:
        "A detail-driven full-stack developer with a strong foundation in both frontend and backend technologies. Blending creativity with logic, I enjoy turning ideas into responsive, scalable, and user-centered web applications. I focus on clean architecture, cool interactions, and writing code that’s both readable and reliable.",
    },
    {
      title: "What I Know & What I Can Do",
      content:
        "Proficient in building end-to-end applications using the MERN stack, with practical experience in React, Node.js, Express, MongoDB, and modern frontend tooling like Tailwind CSS and React Query. Comfortable working with Java for backend systems and familiar with key object-oriented principles and data structures. Capable of building clean REST APIs, integrating authentication flows, and deploying real-world full-stack solutions with performance and maintainability in mind.",
    },
    {
      title: "What I’m Exploring & Aiming For",
      content:
        "Fascinated by system design, clean architecture, and real-world problem solving. Currently deepening my understanding of how large-scale systems are structured and scaled. My goal is to evolve into a developer who can think across the stack, design with intention, and contribute meaningfully to high-performing teams.",
    },
  ];
  
  return (
    <motion.section
      className="responsive-container flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PageTitle>
        Behind the Code | More than code - a journey of purpose, learning, and
        craftsmanship.
      </PageTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 h-full md:mt-5">
        {/* left */}
        <motion.div
          className="flex-1 grid place-content-center relative h-fit md:sticky md:top-28 my-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute right-1/2 transform translate-x-1/2 -rotate-3 animate-smooth-rotate rounded-2xl bg-primary/15 min-w-[260px] sx:min-w-[350px] h-[290px] sx:h-[400px]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.img
            className="grayscale-[10%] h-[290px] sx:h-[400px] rotate-3 object-cover rounded-2xl border-2 border-transparent bg-bg/50 hover:border-primary hover:shadow-[0px_0px_18px] hover:shadow-primary/30 transition-all duration-300"
            src={me}
            alt="My Image"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* right */}
        <motion.div
          className="flex-1 flex flex-col justify-center md:my-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-2.5 text-justify text-[17px] leading-[1.8]">
            {content.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <h3 className="para-title">{item.title}</h3>
                <p className="para">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSub;
