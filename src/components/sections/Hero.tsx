import { motion } from "framer-motion";
import { rotateAndScaleUp, slideInFromLeft } from "../../utils/motion";

import me from "../../assets/me.png";
import { handleClickLink } from "../../utils";

const Hero = () => {
  const slideTextVarients = {
    initial: {
      x: "8%",
    },
    animate: {
      x: "-98%",
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
  };

  return (
    <div className="h-[calc(100vh-80px)] hero-grad relative isolate overflow-x-hidden">
      <div className="absolute inset-0 -z-10 overflow-x-hidden">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-primary/45 rounded-full blur-3xl opacity-25" />
        <div
          className="absolute inset-0 -z-20 opacity-85"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <motion.div
        variants={slideTextVarients}
        initial="initial"
        animate="animate"
        className="absolute font-primary bottom-0 text-[35vh] sm:text-[50vh] whitespace-nowrap tracking-tighter font-bolder text-[#ffffff09] overflow-hidden -z-10"
      >
        Inovative Developer
      </motion.div>

      <div className="responsive-container h-full">
        <div className="w-full flex flex-col md:flex-row justify-between py-5 md:py-0">
          <div className="flex-1 flex flex-col items-start justify-center gap-2.5 sm:gap-5 text-left max-w-[600px] px-1 md:px-2 font-primary">
            <motion.h1
              variants={slideInFromLeft(0.2)}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl font-bold"
            >
              Hi, I'm Hari prasath
            </motion.h1>
            <motion.h2
              variants={slideInFromLeft(0.3)}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-6xl font-secondary text-transparent bg-clip-text bg-gradient-to-tr from-primary via-violet-400 to-white animate-move-bg"
            >
              Full-Stack Developer & Software Developer
            </motion.h2>
            <motion.p
              variants={slideInFromLeft(0.5)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-lg"
            >
              I craft scalable and impactful solutions by solving complex system
              challenges, striving to enhance user experiences. And
              <span className="selection:bg-cyan-400 selection:text-neutral-700">
                {" "}
                I love{" "}
              </span>{" "}
              to learn new technologies and
              <span className="selection:bg-cyan-400 selection:text-neutral-700">
                {" "}
                improve myself.
              </span>
            </motion.p>
            <div className="flex gap-3 mt-3">
              <motion.a
                href="/resume/Hari-resume.pdf"
                download={true}
                variants={slideInFromLeft(0.7)}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-outline flex items-center gap-2"
              >
                <span>Download CV</span> <span className="bx bx-download" />
              </motion.a>
              <motion.a
                onClick={(e) => handleClickLink(e, "About")}
                variants={slideInFromLeft(0.8)}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-ghost"
              >
                Explore
              </motion.a>
            </div>
          </div>

          <div className="flex-1 grid place-content-center sm:pt-10 sm:pl-8">
            <motion.img
              variants={rotateAndScaleUp(0.5)}
              initial="hidden"
              animate="visible"
              className="h-[260px] sx:h-[450px] rounded-fancy animate-border-radius rotate-3 border-2 grayscale-25 bg-bg/50 hover:border-primary hover:shadow-[0px_0px_18px] hover:shadow-primary/30"
              src={me}
              alt="My Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
