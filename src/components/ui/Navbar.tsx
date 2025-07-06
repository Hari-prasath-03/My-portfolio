import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Logo from "../sub/Logo";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation().pathname;
  const socials = [
    {
      link: "https://www.linkedin.com/in/hari-prasath-k",
      name: "LinkedIn",
      icon: "bx bxl-linkedin",
    },
    {
      link: "https://github.com/Hari-prasath-03",
      name: "Github",
      icon: "bx bxl-github",
    },
    {
      link: "mailto:hariprasathk2023@gmail.com",
      name: "Gmail",
      icon: "bx bxl-gmail",
    },
  ];

  const socialVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <nav id="Hero" className="h-20 relative z-10">
      {path === "/" && <Sidebar />}
      <div className="flex justify-between items-center responsive-container h-full">
        <Logo />
        <motion.div
          className="flex gap-4 sx:gap-5"
          initial="hidden"
          animate="visible"
          variants={socialVariants}
        >
          {socials.map(({ link, icon }, i) => (
            <motion.a
              variants={socialVariants}
              href={link}
              target="_blank"
              key={i}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              whileHover={{
                scale: 1.1,
                y: -3,
              }}
              className="bx text-xl hover:text-primary"
            >
              <div className={icon} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
